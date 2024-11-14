import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../components/Layout.tsx';
import { SunIcon, MoonIcon } from '@heroicons/react/16/solid';

interface NavbarProps {
  handleClick: () => void;
}

export default function Navbar({ handleClick }: NavbarProps) {
  const theme = useContext(ThemeContext);
  return (
    <header>
      <nav className="flex flex-row items-center justify-between w-full h-20 px-8 py-2 md:px-16 gap-8 bg-slate-100 dark:bg-dark-nav shadow-md">
        <h1 className="text-2xl font-extrabold">
          <Link to="/">Where in the World?</Link>
        </h1>
        <button
          className="p-2 border-[1px] border-solid border-dark-nav dark:border-slate-100 hover:opacity-75 rounded-md"
          onClick={handleClick}
        >
          {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
        </button>
      </nav>
    </header>
  );
}
