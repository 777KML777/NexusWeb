import style from "./buttons.module.css"

export default function Buttons({ buttonText, iconUrl }){
    return(
        <>
            <div className={style.conatainer_buttons}>
                <button className={style.button_beneficio}>Benefícios</button>
                <button className={style.button_editar}>Editar equipe</button>
                <button className={style.button_feedbacks}>Feedbacks</button>
                <button className={style.button_pontuação}>Ver pontuação</button>
            </div>
        </>
    )
}