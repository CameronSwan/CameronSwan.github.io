import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot)

export function Header() {
    return (
        <>
        <header className="flex justify-between p-10 border-b-4 border-cyan-600">
        <Link to={'/'} className="text-5xl"><FontAwesomeIcon icon="location-dot"/> Cameron Swan</Link>
        <nav className="flex">
            <ul className="flex items-center gap-20">
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