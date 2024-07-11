'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
import {twMerge} from "tailwind-merge";

export function Header() {
  const currentPathname: string = usePathname();

  return (
    <header>
      <nav className='container flex justify-between'>
        <div>
          <Link href='/' className={'text-3xl font-semibold'}>cd /</Link>
        </div>
        <div>
          <ul className='flex gap-x-3 text-lg'>
            <li>
              <Link
                href={'/projects'}
                className={twMerge(
                  (currentPathname === '/projects') && ('font-semibold')
                )}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={'/contributions'}
                className={twMerge(
                  (currentPathname === '/contributions') && ('font-semibold')
                )}
              >
                Contributions
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
