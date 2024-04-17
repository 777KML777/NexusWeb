'use client'
import Card from "./components/card"
import { Grafico, GraficoBar } from "./components/grafico"
import { Options } from "./components/options"
import { Gem, MessageSquareText, Plus, Trophy, Users } from "lucide-react"

export default function DashboardPage(){
    return(
        <div className="pt-16">
            <div className="flex justify-center gap-8">
                <Options text="Benefícios">
                    <Gem />
                </Options>
                <Options text="Editar Equipe">
                    <Users />
                </Options>
                <Options text="Feedbacks">
                    <MessageSquareText />
                </Options>
                <Options text="Ver pontuações">
                    <Trophy />
                </Options>
            </div>
            <div className="flex justify-center w-full my-8">
                {/* <GraficoBar /> */}
                <Grafico />
            </div>
            <div className="bg-gradient-to-br from-[#01a954] to-[#00220e] p-12">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-3xl">Postagens Recentes</h2>
                    <button className="flex gap-2 text-lg font-bold items-center bg-[#07510A] py-4 px-6 rounded-md hover:bg-[#01a954] transition-all duration-300">Nova Postagem <Plus strokeWidth={3}/></button>
                </div>
                <div className="flex gap-8 my-8 overflow-hidden">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="flex gap-4 w-full justify-center">
                    <span className="w-4 h-4 inline-block bg-[#14AE5C] rounded-full cursor-pointer"/>
                    <span className="w-4 h-4 inline-block bg-white rounded-full cursor-pointer hover:bg-[#14AE5C] transition-all duration-300"/>
                    <span className="w-4 h-4 inline-block bg-white rounded-full cursor-pointer hover:bg-[#14AE5C] transition-all duration-300"/>
                    <span className="w-4 h-4 inline-block bg-white rounded-full cursor-pointer hover:bg-[#14AE5C] transition-all duration-300"/>
                </div>
            </div>
        </div>
    )
}