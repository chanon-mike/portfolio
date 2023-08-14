import Link from 'next/link';
import { useState } from 'react';
import { HiMiniBars3BottomLeft, HiOutlineComputerDesktop } from 'react-icons/hi2';
import type { NavLink } from '../types';

const navLinks: NavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'project',
    title: 'Projects',
  },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-10xl mx-auto px-10 font-mono text-[16px] text-text">
        <Link
          href="/"
          className="w-max flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <span>
            <HiOutlineComputerDesktop color="white" fontSize="1.5em" />
          </span>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 pr-2 border-r-white">
            chanon_mike
          </h1>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-primary' : 'text-text'
              } hover:text-accent font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
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
                  className={`hover:text-accent font-medium cursor-pointer ${
                    active === nav.title ? 'text-primary' : 'text-text'
                  }`}
                  onClick={() => {
                    setMenuToggle(!menuToggle);
                    setActive(nav.title);
                  }}
                >
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
