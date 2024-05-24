import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot, faDownload } from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot, faDownload)

export function Header() {
    return (
        <>
        <header className="flex justify-between p-10 bg-slate-200 border-b-4 border-cyan-600">
        <Link to={'/'} className="text-5xl text-cyan-600"><FontAwesomeIcon icon="location-dot"/> Cameron Swan</Link>
        <nav className="flex">
            <ul className="flex items-center gap-20">
                <li><Link to={'./resume.pdf'} download='resume.pdf' target="_blank" className="px-3 py-1 pt-0 text-2xl hover:bg-cyan-600 hover:bg-opacity-10 text-cyan-600 border-2 border-cyan-600 rounded-full">Resume <FontAwesomeIcon icon="download"/></Link></li>
                <li className="text-2xl hover:text-cyan-600"><Link to={'/'}>Home</Link></li>
                <li className="text-2xl hover:text-cyan-600"><Link to={'/about'}>About</Link></li>
                <li className="text-2xl hover:text-cyan-600"><Link to={'/portfolio'}>Portfolio</Link></li>
                <li className="text-2xl hover:text-cyan-600"><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </nav>
        </header>
        </>
    );
}