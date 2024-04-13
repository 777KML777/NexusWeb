import { BellDot, User } from "lucide-react";
import Image from "next/image";

export function MenuBar(){
    return (
        <nav className="flex w-full bg-[#FCFAFA] bg-opacity-25 items-center justify-between px-8 py-4 rounded-3xl">
            <Image
            src={"/images/logo-nexus.png"}
            alt="Logo NEXUS"
            width={800}
            height={800}
            className="w-40"
            priority={true}
            />

            <ul className="flex gap-6 text-3xl font-semibold">
                <li className="cursor-pointer underline">HOME</li>
                <li className="cursor-pointer hover:underline">RANKING</li>
                <li className="cursor-pointer hover:underline">BENEFÍCIOS</li>
            </ul>

            <div className="flex gap-4">
                <p>Olá, <span>usuário</span></p>
                <User />
                <BellDot />
            </div>
        </nav>
    )
}