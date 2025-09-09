function ConsultationFormCard() {
    return(
        <div className="consultationForm max-w-[808px] fixed z-10 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
            <div className="consultationFormWrapper flex">
                <div className="imageWrapper bg-[#a89060] flex justify-center flex-1">
                    <img src="./src/assets/logo.svg" alt="logo" />
                </div>
                <div className="formWrapper bg-[rgb(33,26,21)] flex flex-col justify-center py-8 pr-8 pl-6 flex-2 relative">
                    <button className="w-6 h-6 absolute top-2 right-2 cursor-pointer text-xl">x</button>
                    <span className="text-[#FFDF9E] text-lg mb-5">Получить консультацию специалиста</span>
                    <form action="" className="flex flex-col">
                        <input className="bg-white mb-5 h-[30px] pl-7 placeholder:text-sm placeholder:text-black text-black" type="text" id="fname" name="fname" placeholder="Имя*"/>
                        <input className="bg-white mb-8 h-[30px] pl-7 placeholder:text-sm placeholder:text-black text-black" type="number" id="fphone" name="fphone" placeholder="Телефон*"/>
                        <div className="flex justify-center align-center gap-2 self-start">
                            <input className="w-4" type="checkbox" name="" id="" />
                            <span className="text-sm text-white">Согласен с <a href="#!" className="text-[#FFDF9E] underline">политикой конфиденциальности</a></span>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    )
}

export default ConsultationFormCard;