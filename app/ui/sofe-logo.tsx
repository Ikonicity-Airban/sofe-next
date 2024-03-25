import Image from 'next/image';
import { Square2StackIcon } from '@heroicons/react/24/outline';
import logo from '@/public/logo.png'
import { openSans } from '@/app/ui/fonts';

export default function SofeLogo() {
  return (
    <div
      className={`${openSans.className} flex gap-2 flex-row items-center leading-none text-white`}
    >
      <div className="object-cover">
        <Image src="/Burger Shape.png" width={50} height={50} alt='Logo'className="object-contain"/>
      </div>
      <p className="text-xl md:text-[24px] bg-gradient-to-br from-light to-primary-light bg-clip-text text-transparent font-semibold">Sofe</p>
    </div>
  );
}
