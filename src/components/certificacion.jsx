export const Certification = ({title, institution, year, image}) => {
    return(
        <div className="h-[40%] w-[100%] flex justify-between items-center flex-shrink-0  overflow-hidden">
            <div className="group relative h-[100%] w-[45%] bg-black overflow-hidden">
                <img src={image} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
            <div className="flex flex-col gap-2 w-[45%]">
                <p className="font-outfit text-lg">{institution} - {year}</p>
                <p className="font-outfit text-2xl">{title}</p>

            </div>
        </div>
    )
}