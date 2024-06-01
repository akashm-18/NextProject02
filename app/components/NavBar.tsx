import Link from "next/link";
import { FaYoutube , FaTwitter , FaGithub , FaLaptop } from 'react-icons/fa'

export default function NavBar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <Link href="/" className="text-white/90 no-underline hover:text-white">Akash</Link>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white">
              <Link className="text-white/90 hover:text-white" href="www.youtube.com">
                <FaYoutube />
              </Link>
              <Link className="text-white/90 hover:text-white" href="www.youtube.com">
                <FaTwitter />
              </Link>
              <Link className="text-white/90 hover:text-white" href="www.youtube.com">
                <FaGithub />
              </Link>
              <Link className="text-white/90 hover:text-white" href="www.youtube.com">
                <FaLaptop />
              </Link>
            </div>
        </div>
    </nav>
  )
}
