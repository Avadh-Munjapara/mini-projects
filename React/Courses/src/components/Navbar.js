
export default function Navbar({children}){
    return (
        <div>
     <h1 className="bg-[#22223B] text-4xl text-center pt-4 pb-4 text-white font-semibold">Top Courses</h1>
    <nav className="flex justify-center gap-5 py-4">{children}</nav>
        </div>
   
    )
}