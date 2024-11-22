export const Project = ({title, description, image, enlace}) => {
    return(
        <div className="h-[35vh] flex flex-col justify-center items-end flex-shrink-0 mx-5 overflow-hidden">
            <div className="group relative h-[80%] w-[100%] bg-black">
                <img src={image} alt="" className="w-[100%] h-[100%] object-cover"/>
                <div className="absolute top-0 right-[-100%] bg-azul duration-100 ease-in-out transform group-hover:right-0 w-full h-full flex flex-col justify-evenly items-center p-4">
                    <p className="text-white font-medium font-outfit">{description}</p>
                    <button className="text-azul bg-white rounded-xl cursor-pointer font-semibold border-none outline-none px-4 py-3 "onClick={()=>{window.open(enlace) 
                    console.log(enlace)}}>Code</button>
                </div>
            </div>
            <p className="font-outfit text-lg">{title}</p>
        </div>
    )
}