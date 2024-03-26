
export default function LoginLayout({children}){
    return(
        //Os arquivos layout estão ao redor do conteúdo da página principal, aqui pode ficar a navigation por exemplo. A página principal é o componente "children".
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </main>
    )
}