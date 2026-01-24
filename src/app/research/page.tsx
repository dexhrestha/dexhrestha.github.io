import { BlogPosts } from '@/src/components/posts'

export const metadata = {
  title: 'Research',
  description: 'My research interest',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My research interest</h1>
      <p className="text-base text-gray-700 leading-relaxed mb-4">
        You are going to do research? Are you mad?
      </p>
    </section>
  )
}
