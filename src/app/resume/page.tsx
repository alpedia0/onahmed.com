import {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume - Osman Ahmed',
}

export default function ResumePage() {
  return (
    <div className={'container'}>
      <div className={'flex items-center justify-between'}>
        <h1 className={'text-3xl font-semibold'}>Resume</h1>
        <p><Link href={'#'} className={'px-2 py-1 underline decoration-dashed underline-offset-4 hover:no-underline'}>PDF version</Link></p>
      </div>

      <div>
        <div>
          <p className={'text-xl font-medium'}>Osman Ahmed</p>
          <p>Software engineer</p>
          <a href={'#'} className={'py-1 underline decoration-dashed underline-offset-4 hover:no-underline'}>Email</a>
          <ul className={'flex gap-x-2'}>
            <li><Link href={'#'}>GitHub</Link></li>
            <li><Link href={'#'}>LinkedIn</Link></li>
          </ul>
        </div>

        <div>
          <h3 className={'text-2xl font-semibold'}>About</h3>
        </div>

        <div>
          <h3 className={'text-2xl font-semibold'}>Projects</h3>
        </div>

        <div>
          <h3 className={'text-2xl font-semibold'}>Experience</h3>
        </div>

        <div>
          <h3 className={'text-2xl font-semibold'}>Education and Certifications</h3>
        </div>

        <div>
          <h3 className={'text-2xl font-semibold'}>Tech stack</h3>
        </div>

        <div className={'flex flex-col gap-y-2'}>
          <h3 className={'text-2xl font-semibold'}>Languages</h3>
          <ul className={'flex list-disc flex-col gap-y-1'}>
            <li>
              <span className={'font-semibold'}>English&nbsp;</span>
              <span>(fluent)</span>
            </li>
            <li>
              <span className={'font-semibold'}>Norwegian&nbsp;</span>
              <span>(native speaker)</span>
            </li>
            <li>
              <span className={'font-semibold'}>Somali&nbsp;</span>
              <span>(native speaker)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
