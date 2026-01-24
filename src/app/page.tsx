import { News } from '@/src/components/news'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Dipesh Shrestha
      </h1>
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
