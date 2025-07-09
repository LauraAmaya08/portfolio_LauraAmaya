export const Certification = ({ title, institution, year, image }) => {
    return (
        <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-full sm:w-1/2 aspect-video sm:aspect-auto h-auto sm:h-40 overflow-hidden rounded-lg">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-full sm:w-1/2 text-center sm:text-left">
                <p className="font-outfit text-sm sm:text-base">{institution} - {year}</p>
                <p className="font-outfit text-lg sm:text-2xl font-semibold">{title}</p>
            </div>
        </div>
    );
};
