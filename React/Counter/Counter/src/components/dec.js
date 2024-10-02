export default function Decrement({valobj}){
    function handleDecrement(){
        valobj.setValue(valobj.value-1);
    }   
    return (
         <button onClick={handleDecrement} className="h-16 w-16 text-black bg-white rounded-md text-4xl">
            -
         </button>
    )
}