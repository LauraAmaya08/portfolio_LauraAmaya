export const Project = ({title, description, image, technologies, enlace}) => {
    return(
        <div className="h-[35vh] flex flex-col justify-center items-end flex-shrink-0 mx-5 overflow-hidden">
            <div className="group relative h-[80%] w-[100%] bg-black">
                <img src={image} alt="" className="w-[100%] h-[100%] object-cover"/>
                <div className="absolute top-0 right-[-100%] bg-azul duration-100 ease-in-out transform group-hover:right-0 w-full h-full flex flex-col justify-around items-center p-4">
                    <p className="text-white text-sm 2xl:text-base font-medium font-outfit">{description}</p>
                    <div className="flex justify-center items-center gap-2 w-[80%]">
                        {technologies.map((tech, index) => {
                            return(
                                <div className="h-5 w-5 md:h-6 md:w-6 2xl:h-7 2xl:w-7 flex justify-center items-center">
                                    <img src={tech} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <button className="text-azul bg-white rounded-xl cursor-pointer md:text-xs 2xl:text-base font-semibold border-none outline-none px-4 py-3 "onClick={()=>{window.open(enlace) 
                    console.log(enlace)}}>Code</button>
                </div>
            </div>
            <p className="font-outfit text-lg">{title}</p>
        </div>
    )
}