export default function Incriment({valobj}){
    function handleincriment(){
        valobj.setValue(valobj.value+1);
    }
    return (
         <button onClick={handleincriment} className="h-16 w-16 text-black bg-white rounded-md text-4xl">
            +
         </button>
    )
}   