import { BlogPosts } from '@/src/components/posts'
export const revalidate = 60;  

export const metadata = {
  title: 'Publications',
  description: 'My publications',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Publications</h1>
      
    </section>
  )
}
