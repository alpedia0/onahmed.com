'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
import {twMerge} from "tailwind-merge";
import Image from 'next/image'
import contrastSvg from '@/public/contrast.svg';
import languageSvg from '@/public/language.svg';

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
        <div className={'flex items-center gap-x-24'}>
          <div><Link href='/' className={'text-3xl font-semibold'}>cd /</Link></div>
          <ul className='flex gap-x-4 text-lg'>
            {navPaths.map(( navPath: NavPath ) => (
              <NavPathListItem navPath={navPath} key={navPath.href}/>
            ))}
          </ul>
        </div>

        <ul className={'flex gap-x-3'}>
          <li>
            <button className={'rounded border border-transparent p-2'}>
              <Image src={contrastSvg} alt={'Contrast'} height={24} width={24}/>
            </button></li>
          <li>
            <button className={'rounded border border-transparent p-2'}>
              <Image src={languageSvg} alt={'Contrast'} height={24} width={24}/>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
