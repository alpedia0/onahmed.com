import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Resume - Osman Ahmed',
}

export default function ResumePage() {
  return (
    <div className={'container'}>
      <h1 className={'text-3xl font-semibold'}>Resume</h1>
    </div>
  )
}
