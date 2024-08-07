import {Metadata} from 'next';
import Link from 'next/link';
import {twMerge} from 'tailwind-merge';

type ColorVariantType = 'github' | 'linkedin' | 'twitter' | 'youtube';

type SocialLinkType = {
  title: string;
  href: string;
  logo: string; // The first logo should be white/gray
  hoverLogo: string; // The logo on hover should include original colors
  colorVariant: ColorVariantType;
}

function SocialLink({
  title,
  href,
  logo,
  hoverLogo,
  colorVariant,
}: {
  title: string;
  href: string;
  logo: string;
  hoverLogo: string;
  colorVariant: ColorVariantType;
}) {
  const colorVariants: Record<ColorVariantType, string> = {
    youtube: 'hover:bg-red-500 hover:border-red-500 hover:text-white',
    github: 'hover:bg-red-500 hover:border-red-500',
    linkedin: 'hover:bg-red-500 hover:border-red-500',
    twitter: 'hover:bg-red-500 hover:border-red-500',
  }

  return (
    <Link
      href={href}
      target={'_blank'}
      className={twMerge(
        'inline-block rounded-sm border border-gray-700 px-2 py-1',
        `${colorVariants[colorVariant]}`
      )}
    >
      {title}
    </Link>
  )
}

export const metadata: Metadata = {
  title: 'Osman Ahmed',
}

export default function HomePage() {
  const socialLinks: SocialLinkType[] = [
    {title: 'GitHub', href: 'https://github.com/onahmed', logo: '#', hoverLogo: '#', colorVariant: 'github'},
    {title: 'LinkedIn', href: '#', logo: '#', hoverLogo: '#', colorVariant: 'youtube'},
    {title: 'Twitter', href: '#', logo: '#', hoverLogo: '#', colorVariant: 'twitter'},
    {title: 'YouTube', href: '#', logo: '#', hoverLogo: '#', colorVariant: 'youtube'},
  ]

  return (
    <div className={'container'}>
      <h1 className={'text-3xl font-semibold'}>Osman Ahmed</h1>

      <div>
        <ul className={'flex flex-row flex-wrap gap-3'}>
          {socialLinks.map((socialLink: SocialLinkType) => (
            <li key={socialLink.href}>
              <SocialLink
                title={socialLink.title}
                href={socialLink.href}
                logo={socialLink.logo}
                hoverLogo={socialLink.hoverLogo}
                colorVariant={socialLink.colorVariant}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
