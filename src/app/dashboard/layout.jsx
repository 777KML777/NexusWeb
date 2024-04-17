import { MenuBar } from "./components/menu";


export default function DashboardLayout({children}){
    return(
        <div className="min-h-screen bg-[#FCFAFA] text-white">
            <div className="p-12 bg-[#07510A]">
                <MenuBar />
            </div>
            <main className="">
                {children}
            </main>
        </div>
    )
}