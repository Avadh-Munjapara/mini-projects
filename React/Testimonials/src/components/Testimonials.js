import Card from "./Card"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Testimonials({reviews}){
    return(
        <div>
        <Card review={reviews[0]}></Card>
        <div>

        <button>
            <FiChevronLeft/>
        </button>
        <button>        
            <FiChevronRight/>
        </button>
        
        </div>
        <button>Surprise Me</button>
        </div>
    )
}