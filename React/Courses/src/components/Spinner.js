import "./spinner.css"
export default function Spinner(){
    return(
            <div className="flex  gap-3 h-full flex-col justify-center items-center">
                <div className="custom-loader"></div>
                <p className="text-3xl text-white">Loading...</p>
            </div>      
    )
}