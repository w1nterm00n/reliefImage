function Reviews() {
    return(
        <div id="reviews" className="reviews mt-20">
            <div className="green_decoration_line m-0-auto w-fit flex flex-col items-center">
                <img src="./src/assets/green_logo.svg" alt="green logo" />
                <div className="line w-[340px] bg-[#34642C] h-[1px] mb-1" />
                <span className="text-lg text-[#34642C]">ОТЗЫВЫ</span>
            </div>
            <div className="reviews_container my-20 grid grid-cols-three text-sm justify-center gap-7">
                <div className="review flex flex-col items-center gap-3 max-w-[340px]">
                <div className="image_container w-20 h-20 bg-gray-500 rounded-full" />
                <span className="mb-2">Михаил</span>
                <p className="text-[#34642C] text-justify">
                    К компании relief image обратился в конце 2019 года, и летом 2020 все
                    работы были закончены. Мы с семьей живём в пос. Правдинское озеро,
                    хотели наш пустой и неровный участок превратить в уютный зеленый сад, с
                    хорошим газоном, огородом и создать цветники у дома. Работой довольны,
                    команда Надежды теперь занимается обслуживанием нашего участка.
                </p>
                </div>
                <div className="review flex flex-col items-center gap-3 max-w-[340px]">
                <div className="image_container w-20 h-20 bg-gray-500 rounded-full" />
                <span className="mb-2">Наталья</span>
                <p className="text-[#34642C] text-justify">
                    В 2016 году понадобились специалисты по уходу за садом. С командой
                    Надежды наш сад зацвёл новыми красками. В том же году мы купили дом в
                    Репино. Хотели создать уютный уголок с зоной отдыха. И уже тогда мы
                    понимали, кому доверить воплощение наших желаний. Работой довольны, все
                    предпочтения были учтены. По сегодняшний день мы доверяем наш сад только
                    специалистам relief image.
                </p>
                </div>
                <div className="review flex flex-col items-center gap-3 max-w-[340px]">
                <div className="image_container w-20 h-20 bg-gray-500 rounded-full" />
                <span className="mb-2">Ольга</span>
                <p className="text-[#34642C] text-justify">
                    Наш участок находится в Петергофе. К Надежде обратились в 2016 году.
                    Была необходимость в уходе за садом, растения болели, а также, было
                    много насекомых. Работой команды довольны. Вот уже 4 года доверяем наш
                    сад специалистам!
                </p>
                </div>
            </div>
        </div>
    )
}

export default Reviews;