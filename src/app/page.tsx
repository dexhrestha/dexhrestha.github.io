import { News } from '@/src/components/news'
import Link from 'next/link'
import { Quote } from '../components/quote'
export const revalidate = 60;  

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Dipesh Shrestha
      </h1>
      <Quote />

      <Link key="cv" 
            className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"   
            target="_blank"
            rel="noopener noreferrer"  
            href="/files/cv.pdf"> CV 
      </Link>
      &nbsp; |  &nbsp;

      <Link key="contact" 
            className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
            href="mailto:example@email.com"> Email
          
      </Link>

        <p className="mb-4">
          I'm a research assistant at the{' '}
          <Link
            key="bottini"
            className="grey underline"
            href="http://bottinilab.com"
          >
            Bottini Lab
          </Link>{' '}
          working on studying time perception and mental simulations.
        </p>

      <div className="my-8">
        <News />
      </div>
    </section>
  )
}
