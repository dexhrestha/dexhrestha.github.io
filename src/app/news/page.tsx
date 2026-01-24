import { News } from '@/src/components/posts'

export const metadata = {
  title: 'News',
  description: 'News',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">News</h1>
      <News />
    </section>
  )
}
