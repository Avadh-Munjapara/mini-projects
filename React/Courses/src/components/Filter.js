export default function Filter({filterData,setCategory}){
    function clickHandler(title,e){
     setCategory(title);
    }
    return(
<> {
            filterData.map(cat=>{
                return <button onClick={
                    ()=>{
                        clickHandler(cat.title);
                    }
                } className="py-2 px-5 text-white rounded-md hover:bg-[#252734] transition-all duration-200 bg-[#2E3142] " key={cat.id} >{cat.title}</button>
            })
            
            }</>
       
    )
}