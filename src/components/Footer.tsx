import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center items-center mb-10">
      <Link href="https://github.com/chanon-mike" className="mb-2">
        <FaGithub className="text-xl text-text" />
      </Link>
      <h5 className="text-text font-mono text-xs font-thin">
        © {thisYear} Chanon Limpipolpaibul.
      </h5>
    </footer>
  );
};

export default Footer;
