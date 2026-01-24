import { BlogPosts } from '@/src/components/posts'

export const metadata = {
  title: 'About',
  description: 'About me',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About me</h1>
      <p className="text-base text-gray-700 leading-relaxed mb-4">
        Who the hell is this guy
      </p>
    </section>
  )
}
