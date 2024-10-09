import Card from "./Card"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Testimonials({reviews}){
    return(
        <div className="bg-white w-[55%] mx-auto flex flex-col items-center gap-7 pb-12 shadow-xl rounded-md"> 
        <Card review={reviews[0]}></Card>
        <div>

    <div className="flex gap-5 mt-3 -mb-1">
        <button>
            <FiChevronLeft className="text-3xl hover:text-[#8B5CF6] text-[#A78BFA]"/>
        </button>
        <button>        
            <FiChevronRight className="text-3xl hover:text-[#8B5CF6] text-[#A78BFA]"/>
        </button> 
    </div>

        </div>
        <button className="bg-[#A78BFA] text-white font-bold px-9 py-2 rounded-md transition-colors duration-200 hover:bg-[#8B5CF6]">Surprise Me</button>
        </div>
    )
}