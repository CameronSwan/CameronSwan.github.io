import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
        <div className="h-full flex justify-center">
            <div className="flex flex-col w-6/12 justify-center">
            <p className="text-xl">Hi, my name is</p>
            <p className="text-5xl text-cyan-600">Cameron Swan</p>
            <p className="text-xl">I make maps and build software.</p>
            <br/>
            <p className="text-xl">I am a GIS specialist and full-stack software developer. I have experience with the ESRI suite and QGIS and experience with the MERN and LAMP web stacks as well as various other software development technologies.</p>
            <br/>
            <p><Link to={'/portfolio'} className="w-fit px-3 py-1 pt-0 text-2xl hover:bg-cyan-600 hover:bg-opacity-10 text-cyan-600 border-2 border-cyan-600 rounded-full">Portfolio</Link></p>
            </div>
        </div>
        </>
    );
}