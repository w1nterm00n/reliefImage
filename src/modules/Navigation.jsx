function Navigation() {
    return(
        <section className="nav_wrapper flex justify-between py-2 bg-[rgba(37,73,31,0.4)] px-[10vw]">
            <nav className="flex w-1/2 justify-between items-center">
            <a href="#aboutUs">О Компании</a>
            <a href="#ourProjects">Проекты</a>
            <a href="#gardenTreatment">Уход за садом</a>
            <a href="#landscape">Ландшафт</a>
            <a href="#reviews">Отзывы</a>
            </nav>
            <div className="phone_and_location flex flex-col">
            <div className="flex gap-3">
                <img src="./src/assets/phone_icon.svg" alt="phone icon" className="w-3" />{" "}
                <span className="text-[#FFDF9E]">тел.+7 (981) 98-50-04</span>{" "}
            </div>
            <div className="flex gap-2">
                <img
                src="./src/assets/location_icon.svg"
                alt="location icon"
                className="w-4"
                />{" "}
                <span className="text-[#FFDF9E]">Санкт-Петербург и ЛО</span>{" "}
            </div>
            </div>
        </section>
    )
}

export default Navigation;