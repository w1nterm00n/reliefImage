function OurProjects() {
    return(
        <div id="ourProjects" className="our_projects_section mt-5 mb-16">
            <div className="m-0-auto w-[80vw] flex items-center gap-4">
                <span className="font-lg text-[#34642C]">НАШИ ПРОЕКТЫ</span>
                <span className="flex flex-col items-end mt-1 flex-grow">
                <img
                    src="./src/assets/green_logo.svg"
                    alt="green logo"
                    className="w-[39px]"
                />
                <div className="line bg-[#34642C] h-[1px] mb-1 mb-6 w-full" />
                </span>
            </div>
            <div className="grid grid-cols-2 grid-rows-5 gap-4 w-[80vw] mx-auto mt-2">
                <div className="col-start-1 row-span-5 h-[608px] relative bg-[url('./assets/pravdinskoye.png')] bg-cover bg-center shadow-lg gray_shadow">
                <div className="absolute bottom-0 w-full bg-[rgba(255,239,227,0.58)] flex p-4 justify-center">
                    <span className="text-lg text-[#3D2220]">Правдинское</span>
                </div>
                </div>
                <div className="row-start-1 row-end-3 col-start-2 relative bg-[url('./assets/repino.png')] bg-cover bg-center gray_shadow">
                <div className="absolute bottom-0 w-full bg-[rgba(255,239,227,0.58)] flex p-4 justify-center">
                    <span className="text-lg text-[#3D2220]">Репино</span>
                </div>
                </div>
                <div className="row-start-3 row-end-6 col-start-2 relative bg-[url('./assets/peterhof.png')] bg-cover bg-center gray_shadow">
                <div className="absolute bottom-0 w-full bg-[rgba(255,239,227,0.58)] flex p-4 justify-center">
                    <span className="text-lg text-[#3D2220]">Петергоф</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OurProjects;