export function Portfolio() {
    return (
        <>
        <section className="flex flex-col text-center m-5">
            <ul>
                <li className="flex flex-col items-center">
                    <h1 className="text-3xl">Museums in Nova Scotia Maps</h1>
                    <img src="./museums.png" className="w-64 m-5" />
                    <p className="w-1/2 m-5">
                        These two maps combined show existing and historic museums in Nova Scotia.
                        These were created as part of an assignment at COGS and the "historic" museum
                        data was genearted at random from existing museums.
                    </p>
                    <div>
                        <ul className="flex">
                            <li className="mx-5">ESRI</li>
                            <li className="mx-5">ArcGIS Online</li>
                        </ul>
                    </div>
                </li>
                <li className="flex flex-col items-center">
                    <h1 className="text-3xl">Southwest Nova Ecological Science Atlas</h1>
                    <img src="./turtleisland.jpg" className="w-64 m-5" />
                    <p className="w-1/2 m-5">
                        My Final Project at COGS. Updated the Southwest Nova Ecological Science Atlas
                        to its current form.
                    </p>
                    <div>
                        <ul className="flex">
                            <li className="mx-5">ESRI</li>
                            <li className="mx-5">StoryMaps</li>
                            <li className="mx-5">Experience Builder</li>
                        </ul>
                    </div>
                </li>
                <li className="flex flex-col items-center">
                    <h1 className="text-3xl">Road Obstructions In Nova Scotia Reporter</h1>
                    <img src="./ob.png" className="w-64 m-5" />
                    <p className="w-1/2 m-5">
                        A QuickCapture project that collects data on road obstructions and displays
                        them on a map for users to see.
                    </p>
                    <div>
                        <ul className="flex">
                            <li className="mx-5">ESRI</li>
                            <li className="mx-5">ArcGIS Pro</li>
                            <li className="mx-5">QuickCapture</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
        </>
    );
}