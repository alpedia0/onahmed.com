import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav className='flex justify-between container'>
        <div>
          <Link href='/'>onahmed</Link>
        </div>
        <div>
          <ul className='flex gap-x-3'>
            <li>
              <Link href={'/projects'}>Projects</Link>
            </li>
            <li>
              <Link href={'/contributions'}>Contributions</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
