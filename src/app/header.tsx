'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
import {twMerge} from "tailwind-merge";
import {Fragment} from 'react';

type NavPath = {
  href: string;
  title: string;
}

function NavPathListItem({
  navPath
}: {
  navPath: NavPath
}) {
  const { href, title } = navPath;
  const currentPathname: string = usePathname();
  const isActive: boolean = (currentPathname === href);

  return (
    <li>
      <Link
        href={href}
        className={twMerge(
          'px-2 py-1',
          (isActive) && ('font-semibold')
        )}
      >
        {title}
      </Link>
    </li>
  )
}

export function Header() {
  const navPaths: NavPath[] = [
    {href: '/projects', title: 'Projects'},
    {href: '/contributions', title: 'Contributions'},
    {href: '/resume', title: 'Resume'}
  ]

  return (
    <header className={'h-[60px]'}>
      <nav className='container flex h-full items-center justify-between'>
        <div>
          <Link href='/' className={'text-3xl font-semibold'}>cd /</Link>
        </div>
        <div>
          <ul className='flex gap-x-3 text-lg'>
            {navPaths.map((navPath: NavPath) => (
              <Fragment key={navPath.href}>
                <NavPathListItem navPath={navPath} />
              </Fragment>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
