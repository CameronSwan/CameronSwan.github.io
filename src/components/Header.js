import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
        <header class="flex justify-between">
        <img src="" alt=""/>
        <h1>Cameron Swan</h1>
        <nav>
            <ul class="flex">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/portfolio'}>Portfolio</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </nav>
        </header>
        </>
    );
}