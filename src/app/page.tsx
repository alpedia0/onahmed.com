import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Osman Ahmed',
}

export default function HomePage() {
  return (
    <div className={'container'}>
      <h1 className={'text-3xl font-semibold'}>Osman Ahmed</h1>

      <div>
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </div>
  );
}
