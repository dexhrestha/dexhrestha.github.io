"use client"

import { useEffect, useState } from "react"
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

type Task = {
  id: number
  text: string
  done: number
  current?: boolean
  startedAt?: number
  elapsedWork?: number // seconds of work time
  elapsedBreak?: number // seconds of break time
}

const WORK_TIME = 1800 // 30 minutes in seconds
const BREAK_TIME = 300 // 5 minutes in seconds

function SortableItem({ task, disabled, mode }: { task: Task; disabled: boolean; mode: "idle" | "running" | "break" }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: task.id,
    disabled,
  })
  const style = { transform: CSS.Transform.toString(transform), transition }

  // Calculate progress based on mode
  let progress = 0
  let backgroundColor = "#ffffff" // white for idle
  
  if (task.current && mode === "running") {
    // Show work progress
    const currentWork = (task.elapsedWork ?? 0) + (task.startedAt ? (Date.now() - task.startedAt) / 1000 : 0)
    progress = Math.min(currentWork / WORK_TIME, 1)
    backgroundColor = `linear-gradient(to right, #7bed9f ${progress * 100}%, #ffffff ${progress * 100}%)`
  } else if (task.current && mode === "break") {
    // Show break progress
    const currentBreak = (task.elapsedBreak ?? 0) + (task.startedAt ? (Date.now() - task.startedAt) / 1000 : 0)
    progress = Math.min(currentBreak / BREAK_TIME, 1)
    backgroundColor = `linear-gradient(to right, #feca57 ${progress * 100}%, #ffffff ${progress * 100}%)`
  } else if (task.done >= 100) {
    // Task is complete
    backgroundColor = "#2d6a4f"
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        ...style,
        background: backgroundColor,
        color: task.current ? "#1f2937" : "#9ca3af",
      }}
      className="relative flex flex-col w-full p-4 rounded-2xl cursor-grab select-none transition"
    >
      <div className="flex items-center">
        {/* Drag handle */}
        <div className="mr-3 flex flex-col justify-between h-6 z-10">
          <div className="flex justify-between w-3">
            <span className="block h-1 w-1 bg-gray-400 rounded-full"></span>
            <span className="block h-1 w-1 bg-gray-400 rounded-full"></span>
          </div>
          <div className="flex justify-between w-3">
            <span className="block h-1 w-1 bg-gray-400 rounded-full"></span>
            <span className="block h-1 w-1 bg-gray-400 rounded-full"></span>
          </div>
          <div className="flex justify-between w-3">
            <span className="block h-1 w-1 bg-gray-400 rounded-full"></span>
            <span className="block h-1 w-1 bg-gray-400 rounded-full"></span>
          </div>
        </div>

        {/* Task text */}
        <span className="break-words overflow-hidden text-ellipsis whitespace-pre-wrap flex-1 z-10">
          {task.text}
        </span>
      </div>
    </div>
  )
}

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState("")
  const [mode, setMode] = useState<"idle" | "running" | "break">("idle")
  const [, forceTick] = useState(0)

  const currentTask = tasks.find(t => t.current)

  const getSpentWorkSeconds = (task: Task) => {
    if (!task.current || mode !== "running") return task.elapsedWork ?? 0
    return (task.elapsedWork ?? 0) + Math.floor((Date.now() - (task.startedAt ?? Date.now())) / 1000)
  }

  const getSpentBreakSeconds = (task: Task) => {
    if (!task.current || mode !== "break") return task.elapsedBreak ?? 0
    return (task.elapsedBreak ?? 0) + Math.floor((Date.now() - (task.startedAt ?? Date.now())) / 1000)
  }

  const remainingSeconds = currentTask
    ? mode === "running"
      ? Math.max(WORK_TIME - getSpentWorkSeconds(currentTask), 0)
      : Math.max(BREAK_TIME - getSpentBreakSeconds(currentTask), 0)
    : 0

  // Render tick
  useEffect(() => {
    const id = setInterval(() => forceTick(t => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  // Auto-transition when timer completes
  useEffect(() => {
    if (!currentTask || remainingSeconds > 0) return

    if (mode === "running") {
      // Work time completed, save work time and switch to break
      setTasks(prev =>
        prev.map(t =>
          t.id === currentTask.id
            ? {
                ...t,
                elapsedWork: WORK_TIME,
                current: true, // Keep current for break
                startedAt: Date.now(), // Start break timer
              }
            : t
        )
      )
      setMode("break")
    } else if (mode === "break") {
      // Break completed, mark task as done
      setTasks(prev =>
        prev.map(t =>
          t.id === currentTask.id
            ? {
                ...t,
                done: 100,
                elapsedBreak: BREAK_TIME,
                elapsedWork: WORK_TIME, // Preserve work time
                current: false,
                startedAt: undefined,
              }
            : t
        )
      )
      setMode("idle")
    }
  }, [remainingSeconds, mode, currentTask])

  // Start button logic
  const handleStart = () => {
    // Determine if we should start work or break
    const hasAnyWorkTime = tasks.some(t => (t.elapsedWork ?? 0) > 0)
    
    if (!hasAnyWorkTime) {
      // Idle mode -> Start first incomplete task
      const index = tasks.findIndex(t => t.done < 100)
      if (index === -1) return

      setTasks(prev =>
        prev.map((t, i) =>
          i === index
            ? { ...t, current: true, startedAt: Date.now() }
            : { ...t, current: false }
        )
      )
      setMode("running")
    } else {
      // Break mode -> Resume or start next task
      const currentIndex = tasks.findIndex(t => t.current)
      
      if (currentIndex !== -1) {
        // Resume current task's work - save break time first
        const task = tasks[currentIndex]
        const currentBreakTime = mode === "break" ? getSpentBreakSeconds(task) : task.elapsedBreak
        
        setTasks(prev =>
          prev.map((t, i) =>
            i === currentIndex
              ? { ...t, current: true, startedAt: Date.now(), elapsedBreak: currentBreakTime }
              : t
          )
        )
        setMode("running")
      } else {
        // Find next incomplete task
        const nextIndex = tasks.findIndex(t => t.done < 100)
        if (nextIndex === -1) return

        setTasks(prev =>
          prev.map((t, i) =>
            i === nextIndex
              ? { ...t, current: true, startedAt: Date.now() }
              : { ...t, current: false }
          )
        )
        setMode("running")
      }
    }
  }

  // Break button logic
  const handleBreak = () => {
    if (!currentTask) return

    // Save current work progress
    const currentWorkTime = getSpentWorkSeconds(currentTask)
    
    setTasks(prev =>
      prev.map(t =>
        t.id === currentTask.id
          ? {
              ...t,
              elapsedWork: currentWorkTime,
              // Don't recalculate elapsedBreak here - it's preserved as-is
              // The getSpentBreakSeconds function will add the new time to it
              current: true,
              startedAt: Date.now(), // Reset timer to start counting additional break time
            }
          : t
      )
    )
    setMode("break")
  }

  // Formatting
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0")
    const s = (seconds % 60).toString().padStart(2, "0")
    return `${m}:${s}`
  }

  // Persistence
  useEffect(() => {
    const stored = localStorage.getItem("pomodoroTasks")
    if (stored) {
      const parsed = JSON.parse(stored)
      setTasks(parsed)
      
      // Determine initial mode based on stored tasks
      const hasAnyWorkTime = parsed.some((t: Task) => (t.elapsedWork ?? 0) > 0)
      if (!hasAnyWorkTime) {
        setMode("idle")
      } else {
        setMode("break")
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("pomodoroTasks", JSON.stringify(tasks))
  }, [tasks])

  // Task operations
  const addTask = () => {
    if (!input.trim() || tasks.length >= 4) return
    setTasks([...tasks, { id: Date.now(), text: input, done: 0, elapsedWork: 0, elapsedBreak: 0 }])
    setInput("")
  }

  const clearTasks = () => {
    if (mode === "running") return // Can't clear during running mode
    setTasks([])
    localStorage.removeItem("pomodoroTasks")
    setMode("idle")
  }

  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const oldIndex = tasks.findIndex(t => t.id === active.id)
    const newIndex = tasks.findIndex(t => t.id === over.id)
    setTasks(arrayMove(tasks, oldIndex, newIndex))
  }

  return (
    <section className="max-w-2xl mx-auto mt-12 p-6 bg-gray-100 rounded-3xl shadow-lg w-full flex flex-col">
      <h1 className="font-bold text-3xl mb-6 tracking-tight text-gray-900 text-center">
        Pomodoro List
      </h1>

      <div className="flex gap-4 mb-8 w-full items-stretch">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), addTask())}
          className="flex-1 px-4 py-3 rounded-2xl border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white resize-none w-full"
          placeholder="Add a task"
          maxLength={120}
          rows={2}
        />
        <button
          onClick={addTask}
          disabled={tasks.length >= 4}
          className={`px-6 py-3 font-medium rounded-2xl transition ${
            tasks.length >= 4
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
          }`}
        >
          Add
        </button>
      </div>

      <div className="flex flex-col w-full gap-4">
        {/* Task list */}
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
            <div className="flex flex-col gap-4 w-full">
              {tasks.map(task => (
                <SortableItem key={task.id} task={task} disabled={mode === "running"} mode={mode} />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {/* Clock */}
        <div className="flex justify-center items-center w-full h-32 bg-gray-800 rounded-2xl mt-4">
          <span className="text-6xl font-extrabold text-[#f5f5dc] font-mono">
            {formatTime(remainingSeconds)}
          </span>
        </div>
      </div>

      {/* Control buttons */}
      <div className="flex justify-between gap-4 mt-6 w-full">
        {mode === "running" && (
          <button
            onClick={handleBreak}
            className="flex-1 px-6 py-3 font-medium rounded-2xl transition bg-yellow-500 text-white hover:bg-yellow-600"
          >
            Break
          </button>
        )}
        {(mode === "break" || mode === "idle") && (
          <button
            onClick={handleStart}
            disabled={tasks.every(t => t.done >= 100) || tasks.length === 0}
            className="flex-1 px-6 py-3 font-medium rounded-2xl transition bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Start
          </button>
        )}
        {(mode === "break" || mode === "idle") && (
          <button
            onClick={clearTasks}
            className="flex-1 px-6 py-3 font-medium rounded-2xl transition bg-red-600 text-white hover:bg-red-700"
          >
            Clear
          </button>
        )}
      </div>

      {/* Mode indicator */}
      <div className="text-center mt-4 text-sm text-gray-600">
        Mode: <span className="font-semibold capitalize">{mode}</span>
      </div>
    </section>
  )
}