
export default function Card({course}){
    let description;
    if(course.description.length>100){
         description=course.description.substr(0,100)+"...";
    }
    else{
         description=course.description;
    }
    return (
       <div className="flex flex-col w-72 bg-[#2A2B44]  gap-2 rounded-md">
        <img className=" w-full rounded-md" src={course.image.url} alt={course.image.alt} />
        <div className="text-white flex flex-col gap-2 pb-3 px-3">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p>{description}</p>
        </div>
       </div>
    )
}