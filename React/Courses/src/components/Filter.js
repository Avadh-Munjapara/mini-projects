export default function Filter({filterData,setCategory,category}){
    function clickHandler(title){
     setCategory(title);
    }
    return(
<> {
            filterData.map(cat=>{
                return <button onClick={
                    ()=>{
                        clickHandler(cat.title);
                    }
                }  className={`px-5 h-10 text-white rounded-md r ${category==cat.title?"bg-[#252734] border-2 ":"bg-[#2E3142] border-transparent"}  
                transition-all duration-200 `} key={cat.id} >{cat.title}</button>
            })
            
            }</>
       
    )
}