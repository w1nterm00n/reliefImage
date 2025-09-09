function AboutUs() {
    return(
        <div id="aboutUs" className="about_us_section mt-20 relative">
            <div className="about_us_wrapper w-[80vw] m-0-auto">
                <div className="green_decoration_line m-0-auto w-fit flex flex-col items-center">
                <img src="./src/assets/green_logo.svg" alt="green logo" />
                <div className="line w-[340px] bg-[#34642C] h-[1px] mb-1 mb-6" />
                </div>
                <div className="bg-[rgba(33,26,21,0.87)] p-6 text-[#FFDF9E] relative rounded">
                <p className="text-lg font-medium mb-1">О КОМПАНИИ</p>
                <span className="text-sm">
                    <span className="font-medium">Relief Image </span>- компания по уходу за
                    садом и ландшафтом. Более 10 лет мы занимаемся благоустройством
                    загородных участков, также имеем порядка 60 готовых работ в
                    Ленинградской области и Санкт-Петербурге. К нам обращаются и доверяют
                    уже более 20 постоянных клиентов за помощью по благоустройству и уходу
                    участков. Наша компания отличается КАЧЕСТВОМ выполненных работ,
                    ГАРАНТИЕЙ на растения, ЛУЧШИМИ питомниками для вашего участка и
                    разработкой проекта ПОД КЛЮЧ. Обратившись к нашим специалистам, вы
                    всегда будете чувствовать, как мы с большим вниманием относимся к вашим
                    предпочтениям. Одной из ключевых задач нашей компании является то, что
                    бы клиент всегда оставался доволен и наслаждался выполненной работой.
                    Если вас интерисовали именно эти критерии при подборе спициалистов, то
                    вы попали в нужные руки!{" "}
                </span>
                <img
                    className="absolute right-0 top-0 max-h-[200px]"
                    src="./src/assets/about_us_bg_image.svg"
                    alt="about us background image"
                />
                </div>
            </div>
            <div className="tree_wrapper absolute top-[80px] -left-[20px]">
                <img src="./src/assets/tree_decoration.png" alt="tree decoration" />
            </div>
        </div>
    )
}

export default AboutUs;