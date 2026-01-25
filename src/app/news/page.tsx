import { News } from '@/src/components/news'
export const revalidate = 60;  

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
