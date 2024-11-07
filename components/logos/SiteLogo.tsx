import Link from 'next/link';
import OBMLogo from './OBMLogo';
import { GlobalData } from '../../lib/types';
import Logo from './Logo';

export default function SiteLogo({
  siteData,
}: {
  siteData: GlobalData;
}): JSX.Element {
  return (
    <div className="flex md:flex-row lg:px-0">
      <h1 className="flex space-x-2">
        <Link
          href="/" 
          className="text-gray-700 bg-clip-text text-4xl font-sansfont-bold	"
        >
        <Logo />
        {/* {siteData.metadata.site_title} */}
        </Link>
      </h1>
      {/* <span className="relative hidden text-lg tracking-wide text-zinc-500 dark:text-zinc-200 md:flex">
        {siteData.metadata.site_tag}
      </span> */}
    </div>
  );
}
