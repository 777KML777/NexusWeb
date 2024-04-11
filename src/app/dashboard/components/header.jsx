import style from "./header.module.css"

export default function Header(){
    return(
        <>
            <div className={style.container_header}>
                <header className={style.header}>
                    <div className={style.logo_nexus}></div>
                    <div className={style.buttons_header}>
                        <a href="#" className={style.button}>HOME</a>
                        <a href="#" className={style.button}>RANKING</a>
                        <a href="#" className={style.button}>BENEFÍCIOS</a>
                    </div>
                    <div className={style.container_user_icons}>
                        <p className={style.text_ola_user}>Olá usuário</p>
                        <button className={style.button_user}></button>
                        <button className={style.button_bell}></button>
                    </div>
                </header>
            </div>
        </>
    )
}