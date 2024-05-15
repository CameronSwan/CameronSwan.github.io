import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
        <header class="flex justify-between align-middle p-10 border border-red-600">
        <h1 class="text-5xl"><i class="fa-solid fa-location-dot"></i> Cameron Swan</h1>
        <nav class="flex justify-center">
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