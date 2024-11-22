export const Certification = ({title, institution, year, image}) => {
    return(
        <div className="h-[40%] w-[100%] flex justify-between items-center flex-shrink-0  overflow-hidden">
            <div className="group relative h-[100%] w-[45%] bg-black overflow-hidden">
                <img src={image} alt="" className="w-[100%] h-[100%] object-cover"/>
                <div className="absolute top-0 right-[-100%] bg-azul duration-100 ease-in-out transform group-hover:right-0 w-full h-full flex flex-col justify-evenly items-center p-4">
                    <button className="text-azul bg-white rounded-xl cursor-pointer font-semibold border-none outline-none px-4 py-3 ">PDF</button>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-[45%]">
                <p className="font-outfit text-lg">{institution} - {year}</p>
                <p className="font-outfit text-2xl">{title}</p>

            </div>
        </div>
    )
}