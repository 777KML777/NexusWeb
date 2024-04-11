import style from "./grafico.module.css"

export default function Grafico(){
    return(
        
        <> 
            <div className={style.container_ranking}>
                <h1 className={style.container_titulo}>RANKING GERAL</h1>
                <div className={style.rankinggrafico}></div>
            </div>
        </>
    )
}