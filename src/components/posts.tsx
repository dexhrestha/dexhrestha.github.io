import Link from 'next/link'
import { formatDate, getBlogPosts } from '../app/blog/utils'

export async function BlogPosts() {
  const allBlogs = await getBlogPosts().then(res=>res.results);
  console.log(allBlogs);
   return (
    <div>
      
      { allBlogs
        .sort((a, b) => {
          if (
            new Date(a.properties["Published Date"].date.start) > new Date(b.properties["Published Date"].date.start)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.id}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.properties['Slug'].rich_text[0].plain_text}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.properties['Published Date'].date.start, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.properties['Title'].title[0].plain_text}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
