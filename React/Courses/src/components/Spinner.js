import "./spinner.css"
export default function Spinner(){
    return(
        <div className="flex justify-center items-center">
            <div className="custom-loader"></div>
            <p>Loading...</p>
        </div>
    )
}