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
}
function SortableItem({ task, disabled }: { task: Task; disabled: boolean }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: task.id,
    disabled, // disables dragging when true
  })
  const style = { transform: CSS.Transform.toString(transform), transition }

  const progress = Math.min(task.done / 100, 1)

  return (
<div
  ref={setNodeRef}
  {...attributes}
  {...listeners}
  style={{
    ...style,
    background: task.done < 100
      ? `linear-gradient(to right, #7bed9f ${progress * 100}%, #ffffff ${progress * 100}%)` // progressing
      : task.done >= 100
      ? "#2d6a4f" // done
      : "#ffffff", // idle
    color: task.current ? "#1f2937" : "#9ca3af", // dark text if current, gray if not
  }}
  className="relative flex flex-col w-full p-4 rounded-2xl cursor-grab select-none transition"
 >


      {/* Main task content */}
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
  const [timer, setTimer] = useState<number>(0) // seconds for current task
 
 
  

// Initialize timer in seconds from current progress
useEffect(() => {
  if (mode !== "running") return
  const currentTask = tasks.find(t => t.current)
  if (!currentTask) return

  let initialTimer = Math.floor(1800 - (currentTask.done / 100) * 1800) // remaining time
  setTimer(initialTimer)

  const interval = setInterval(() => {
    setTimer(prev => {
      if (prev <= 0) {
        clearInterval(interval)
        setMode("idle")
        return 0
      }
      return prev - 1
    })
  }, 1000)

  return () => clearInterval(interval)
}, [tasks.find(t => t.current)?.id, mode])

useEffect(() => {
  const currentTask = tasks.find(t => t.current)
  if (!currentTask) return
  setTasks(prev =>
    prev.map(t =>
      t.id === currentTask.id
        ? { ...t, done: Math.min(((1800 - timer) / 1800) * 100, 100), current: timer > 0 }
        : t
    )
  )
}, [timer])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0")
    const s = (seconds % 60).toString().padStart(2, "0")
    return `${m}:${s}`
  }
  const handleStartOrBreak = () => {
    // Start next task or resume after break
    const index = tasks.findIndex(t => t.done < 100)
    if (index === -1) {
      setMode("idle")
      return
    }
    setTasks(prev =>
      prev.map((t, i) => i === index ? { ...t, current: true } : { ...t, current: false })
    )
    setMode("running") // always running after pressing Start
  }


  useEffect(() => {
    const stored = localStorage.getItem("tasks")
    if (stored) setTasks(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  const addTask = () => {
    if (!input.trim()) return
    setTasks([...tasks, { id: Date.now(), text: input, done: 0 }])
    setInput("")
  }

  const clearTasks = () => {
    setTasks([])
    localStorage.removeItem("tasks")
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
          className="flex-1 px-4 py-3 rounded-2xl border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white resize-none w-full"
          placeholder="Add a task"
          maxLength={120}
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
                <SortableItem key={task.id} task={task} disabled={mode === "running"} />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {/* Clock below the list */}
      {/* Clock below the list */}
        <div className="flex justify-center items-center w-full h-32 bg-gray-800 rounded-2xl mt-4">
          <span className="text-6xl font-extrabold text-[#f5f5dc] font-mono">
            {formatTime(timer)}
          </span>
        </div>

      </div>


      {/* Control buttons */}
      <div className="flex justify-between gap-4 mt-6 w-full">
        {mode === "running" && (
          <button
            onClick={() => setMode("break")}
            className="flex-1 px-6 py-3 font-medium rounded-2xl transition bg-yellow-500 text-white hover:bg-yellow-600"
          >
            Break
          </button>
        )}
        {(mode === "break" || mode === "idle") && (
          <button
            onClick={handleStartOrBreak}
            disabled={tasks.every(t => t.done >= 100)}
            className="flex-1 px-6 py-3 font-medium rounded-2xl transition bg-green-600 text-white hover:bg-green-700"
          >
            Start
          </button>
        )}
        {mode === "idle" && (
          <button
            onClick={clearTasks}
            className="flex-1 px-6 py-3 font-medium rounded-2xl transition bg-red-600 text-white hover:bg-red-700"
          >
            Clear
          </button>
        )}
      </div>
    </section>
  )
}
