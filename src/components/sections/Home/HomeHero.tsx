import { CalendarCheck, CalendarX2, CircleUserRound, MapPin, Search } from "lucide-react"

const HomeHero = () => {
    return (
        <section className="relative grid grid-cols-1 mt-8 rounded-3xl bg-main md:grid-cols-2">
            <div className="flex flex-col justify-center px-8 ">
                <h2 className="py-8 md:text-5xl leading-10 text-[#060f24] text-4xl md:text-start text-center">احجز مصيفك بضغطة زر </h2>
                <p className="pb-8 leading-8 txt-xl lg:pb-0 text-light">استمتع بصيف لا يُنسى انت وعائلتك , واحجز مصيف الأحلام بضغة زر واحدة , فقط اختار مايناسبك من خياراتنا المتعددة.</p>
            </div>
            <img src="young.png" loading="lazy" alt="young image" className="relative -translate-x-1/2 lg:-top-16 lg:left-32 left-1/2 lg:translate-x-0 -top-10" />
            <div className="absolute lg:bottom-0 bg-[#95C1FB] flex gap-5 p-4 rounded-2xl -translate-x-1/2 lg:translate-y-1/2 left-1/2 lg:flex-row flex-col
                -bottom-[55%]
            ">

                <div className="flex items-center gap-2 p-2 overflow-auto bg-light rounded-2xl">
                    <MapPin />
                    <input type="text" name="" id="" placeholder="وجهة السفر" className="focus:outline-none" />
                </div>

                <div className="flex items-center gap-2 p-2 overflow-auto bg-light rounded-2xl">
                    <CalendarCheck />
                    <input type="text" name="" id="" placeholder="تاريخ الوصول" className="focus:outline-none" />
                </div>

                <div className="flex items-center gap-2 p-2 overflow-auto bg-light rounded-2xl">
                    <CalendarX2 />
                    <input type="text" name="" id="" placeholder="تاريخ المغادرة" className="focus:outline-none" />
                </div>

                <div className="flex items-center gap-2 p-2 overflow-auto bg-light rounded-2xl">
                    <CircleUserRound />
                    <input type="text" name="" id="" placeholder="عدد الأفراد والغرف" className="focus:outline-none" />
                </div>

                <div className="flex items-center p-2 overflow-auto bg-main rounded-2xl text-light ">
                    <input type="text" name="" id=""
                        placeholder="ابحث"
                        className="bg-transparent focus:outline-none placeholder:text-light
                     md:w-[100px] px-3" />
                    <Search />
                </div>

            </div>
        </section>
    )
}

export default HomeHero
