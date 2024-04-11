import Header from "./components/header"
import Buttons from "./components/buttons"
import Card from "./components/card"
import style from "./style.module.css"
import Grafico from "./components/grafico"

export default function DashboardPage(){
    return(
        <>
            <div className={style.container_conteudo}>
                <Header />
                <div className={style.container_buttons}>
                    <Buttons/>
                </div>
                <Grafico />
            </div>
           
        </>
    )
}