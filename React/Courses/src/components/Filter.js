export default function Filter({filterData}){
    return(
        <div>
            {
            
            filterData.map(cat=>{
                return <button key={cat.id} >{cat.title}</button>
            })
            
            
            }
        </div>
    )
}