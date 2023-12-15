import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { HiMiniBars3BottomLeft, HiOutlineComputerDesktop } from 'react-icons/hi2';

import type { NavLink } from '@/@types';

const navLinks: NavLink[] = [
  {
    id: 'overview',
    title: 'Overview',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
];

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  const changeTo = router.locale === 'en' ? 'ja' : 'en';

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 font-mono">
      <div className="w-full flex justify-between items-center max-w-10xl mx-auto px-10 text-[16px] text-text">
        <Link
          href="/"
          className="w-max flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <span>
            <HiOutlineComputerDesktop
              color="white"
              fontSize="1.5em"
              className={`${
                isHover
                  ? '-rotate-12 transition-transform duration-300 ease-in-out scale-110'
                  : 'rotate-0 transition-transform duration-300 ease-in-out'
              }`}
            />
          </span>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 pr-2 border-r-white">
            chanon-mike
          </h1>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id} className="hover:text-accent font-medium cursor-pointer">
              <Link href={`/#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
          <li>
            <a
              href={`/${changeTo}/${router.asPath}`}
              className="mt-[2px] flex flex-row text-text hover:text-accent justify-center items-center gap-1"
            >
              <FaGlobe className="text-xl" />
              <p className="text-sm">{router.locale === 'en' ? 'JA' : 'EN'}</p>
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <HiMiniBars3BottomLeft
            className="text-white text-[30px] cursor-pointer"
            onClick={() => setMenuToggle(!menuToggle)}
          />
          <div
            className={`${
              !menuToggle ? 'hidden' : 'flex'
            } p-5 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 bg-foreground rounded-2xl shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="hover:text-accent font-medium cursor-pointer text-text"
                  onClick={() => setMenuToggle(!menuToggle)}
                >
                  <Link href={`/#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
              <li>
                <a
                  href={`/${changeTo}/${router.asPath}`}
                  className="flex flex-row text-text hover:text-accent justify-center items-center gap-2"
                >
                  <FaGlobe className="text-lg" />
                  <p className="">{router.locale === 'en' ? 'Japanese' : 'English'}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
