function GardenTreatment() {
    return(
        <div className="garden_treatment bg-gray-400 bg-[url('./assets/garden_treatment_bg.png')] bg-cover bg-center">
            <div className="garden_treatment_wrapper pt-6 pb-16">
                <div className="mx-auto mb-3 w-[80vw] flex items-center gap-4">
                <span className="font-lg text-[#FFDF9E]">УХОД ЗА САДОМ</span>
                <span className="flex flex-col items-end mt-1 flex-grow">
                    <img
                    src="./assets/yellow_logo.svg"
                    alt="yellow logo"
                    className="w-[39px]"
                    />
                    <div className="line bg-[#FFDF9E] h-[1px] mb-1 mb-6 w-full" />
                </span>
                </div>
                <div className="w-[80vw] mx-auto bg-[rgba(33,26,21,0.87)] p-6 mb-10 rounded">
                <p className="text-[#FFDF9E] text-sm font-light">
                    Каждый участок требует постоянный профессиональный уход, чтобы
                    поддерживать ту красоту, которую планировал ландшафтный дизайнер. Это
                    подразумевает большой комплекс работ, требующих много времени.
                    Доверьтесь нашим опытным садоводам! И мы гарантируем качество работ,
                    здоровый сад, а самое главное ваше сэкономленное время.
                </p>
                </div>
                <div className="bg-white w-[80vw] mx-auto py-10 px-4 rounded">
                <div className="flex gap-6 mb-10">
                    <div className="flex flex-col flex-[3] gap-5">
                    <button className="text-lg py-4 flex justify-center shadow-md rounded-md not_selected_button">
                        СЕЗОННЫЕ ВЫЕЗДЫ
                    </button>
                    <button className="text-lg py-4 flex justify-center shadow-md rounded-md not_selected_button">
                        ОСЕНЬ
                    </button>
                    <button className="text-lg py-4 flex justify-center shadow-md rounded-md selected_button">
                        ВЕСНА
                    </button>
                    <button className="text-lg py-4 flex justify-center shadow-md rounded-md not_selected_button">
                        ЛЕТО
                    </button>
                    </div>
                    <div className="flex-[7] mt-[30px]">
                    <p className="flex items-center gap-[10px] text-sm tracking-wider leading-7">
                        <span className="w-[4px] h-[4px] inline-block bg-[#FF7E35] rounded" />
                        Edksk e;rwlkrl cmxkjcki fwwrtwer(sadkaos)
                    </p>
                    <p className="flex items-center gap-[10px] text-sm tracking-wider leading-7">
                        <span className="w-[4px] h-[4px] inline-block bg-[#FF7E35] rounded" />
                        Edksk e;rwlkrl cmxkjcki fwwrtwer(sadkaos)
                    </p>
                    <p className="flex items-center gap-[10px] text-sm tracking-wider leading-7">
                        <span className="w-[4px] h-[4px] inline-block bg-[#FF7E35] rounded" />
                        Edksk e;rwlkrl cmxkjcki fwwrtwer(sadkaos)
                    </p>
                    <p className="flex items-center gap-[10px] text-sm tracking-wider leading-7">
                        <span className="w-[4px] h-[4px] inline-block bg-[#FF7E35] rounded" />
                        Edksk e;rwlkrl cmxkjcki fwwrtwer(sadkaos)
                    </p>
                    <p className="flex items-center gap-[10px] text-sm tracking-wider leading-7">
                        <span className="w-[4px] h-[4px] inline-block bg-[#FF7E35] rounded" />
                        Edksk e;rwlkrl cmxkjcki fwwrtwer(sadkaos)
                    </p>
                    <p className="flex items-center gap-[10px] text-sm tracking-wider leading-7">
                        <span className="w-[4px] h-[4px] inline-block bg-[#FF7E35] rounded" />
                        Edksk e;rwlkrl cmxkjcki fwwrtwer(sadkaos)
                    </p>
                    </div>
                </div>
                <p className="text-sm font-light mb-2">
                    *Выезд и консультация специалиста оплачивается отдельно.
                </p>
                <p className="text-sm font-light">
                    *Отдельно оплачивается: вывоз мусора, химия, удобрение, материалы для
                    дополнительных работ ( например: земля, мульча, бордюрная лента и т.д.)
                </p>
                </div>
            </div>
        </div>
    )
}

export default GardenTreatment;