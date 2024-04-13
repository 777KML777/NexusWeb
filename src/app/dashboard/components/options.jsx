export function Options({children, text}){
    return (
        <button className="flex flex-col justify-center items-center border-2 border-[#0D6511] rounded-md min-w-40 w-full max-w-80 py-2 text-black hover:bg-[#0D6511] hover:text-white transition-all duration-30000">
           {children}
           {text}
        </button>
    )
}