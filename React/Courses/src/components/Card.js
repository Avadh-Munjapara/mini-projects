
export default function Card({course}){
    console.log("card is rendering");
    return (
       <div>
        <img src={course.image.url} alt={course.image.alt} />
        <div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
        </div>
       </div>
    )
}