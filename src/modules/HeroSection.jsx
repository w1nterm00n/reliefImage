import Navigation from "./Navigation";

function HeroSection() {
    return(
    <div className="hero_section text-white flex flex-col relative">

    <Navigation />

    <section className="hero_section_content flex justify-between px-[10vw] flex-grow">
        <div className="my-20">
        <div className="logo mb-12">
            <a href="#!">
            <img src="./src/assets/logo.svg" alt="logo" />
            </a>
        </div>
        <p className="text-4xl max-w-md mb-12">
            Благоустройство и озеленение участков
        </p>
        <button className="px-10 py-2 bg-[rgba(255,126,53,0.53)] text-[#FFDF9E] border-[#FF7E35] border-2 text-2xl rounded mb-36">
            Оставить заявку
        </button>
        </div>
        <div className="self-center flex flex-col gap-5">
        <a href="#!">
            <img
            src="./src/assets/instagram_logo.svg"
            alt="instagram logo"
            className="w-10"
            />
        </a>
        <a href="#!">
            <img
            src="./src/assets/whatsapp_logo.svg"
            alt="whatsapp logo"
            className="w-10"
            />
        </a>
        <a href="#!">
            <img src="./src/assets/email_logo.svg" alt="email logo" className="w-10" />
        </a>
        </div>
    </section>
    <section className="features-section bg-[rgba(33,26,21,0.87)] bottom-[-50px] mx-[10vw] w-[80vw] py-8 max-h-34 absolute rounded">
        <div className="flex justify-around items-center items-baseline">
        <div className="flex flex-col items-center">
            <img
            src="./src/assets/sheet_icon.png"
            alt="sheet icon"
            className="h-[54px] w-fit"
            />
            <p className="text-[#FFDF9E] text-sm">Опыт работы более 10 лет</p>
        </div>
        <div className="flex flex-col items-center">
            <img
            src="./src/assets/task_icon.png"
            alt="task icon"
            className="h-[54px] w-fit"
            />
            <p className="text-[#FFDF9E] text-sm">Гарантия на растения</p>
        </div>
        <div className="flex flex-col items-center">
            <img
            src="./src/assets/plant_icon.png"
            alt="plant icon"
            className="h-[54px] w-fit"
            />
            <p className="text-[#FFDF9E] text-sm">Лучшие питомники</p>
        </div>
        </div>
    </section>
    </div>
    )
}

export default HeroSection;