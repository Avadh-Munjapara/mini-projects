import Card from './Card';

export default function Cards({courses}){

    function getcourses(){
        let allcourses=[];
        Object.values(courses).forEach(array=> {
            array.forEach(course=>{
                allcourses.push(course);
            })
        })
        return allcourses;
    }
    return (
        <div>
            {
                getcourses().map(course=>{
                    return (
                        <Card key={course.id} course={course} />
                    )
                })
            }            
        </div>
    )
}