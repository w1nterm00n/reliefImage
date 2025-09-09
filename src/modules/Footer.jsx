function Footer() {
    return(
        <footer className="bg-[#5A554D] text-white">
        <div className="footer_wrapper pt-12 pb-6 pl-[10vw] pr-[30vw]">
            <div className="flex justify-between mb-5">
            <span className="text-lg">Контакты</span>
            <div className="flex gap-5">
                <a href="#!">
                <img
                    src="./src/assets/instagram_logo.svg"
                    alt="instagram logo"
                    className="w-6"
                />
                </a>
                <a href="#!">
                <img
                    src="./src/assets/whatsapp_logo.svg"
                    alt="whatsapp logo"
                    className="w-6"
                />
                </a>
                <a href="#!">
                <img src="./src/assets/email_logo.svg" alt="email logo" className="w-6" />
                </a>
            </div>
            </div>
            <div className="flex justify-between items-end">
            <div className="flex flex-col">
                <div className="font-light">Телефон</div>
                <div className="flex gap-2">
                <img
                    src="./src/assets/phone_icon_white.svg"
                    alt="phone icon"
                    className="w-3"
                />
                <span>+7 (981) 98-50-04</span>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="font-light">Email</div>
                <div>relief.image@mail.ru</div>
            </div>
            <div className="flex gap-2">
                <img
                src="./src/assets/location_icon_white.svg"
                alt="location icon"
                className="w-4 font-light"
                />
                <span>Санкт-Петербург и ЛО</span>
            </div>
            </div>
        </div>
        <div className="grass w-full">
            <img className="w-full" src="./src/assets/footer_grass.png" alt="grass image" />
        </div>
    </footer>
    )
}

export default Footer;