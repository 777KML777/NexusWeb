<<<<<<< HEAD
<<<<<<< HEAD
=======
import Image from 'next/image'
>>>>>>> 92f9411319951164627ec9565cdcbe2218a5a695

export default function LoginLayout({ children }) {
  return (
    /* Os arquivos layout estão ao redor do conteúdo da página principal, aqui pode ficar a navigation por exemplo. A página principal é o componente "children". */
    <main className="flex flex-row">
      <div
        className={`
            bg-[#07510A]
            flex
            flex-col
            justify-between
            min-h-screen
            p-8
            text-white
            w-2/4
        `}
      >
        <Image 
            src='/logo.png' 
            alt='Logo Nexus'  
            width={100} 
            height= {100} 
        />
        <p>Painei do parceiro Nexus - 2024</p>
      </div>

      <div
        className={`
            flex
            flex-col 
            items-center
            justify-center
            p-8
            w-2/4
        `}
      >
        <p
            className={`
                font-semibold
                self-end
            `}
        >
            Primeiro Acesso
        </p>
            {children}
<<<<<<< HEAD
        </main>
    )
}
=======
import Image from 'next/image'

export default function LoginLayout({ children }) {
  return (
    /* Os arquivos layout estão ao redor do conteúdo da página principal, aqui pode ficar a navigation por exemplo. A página principal é o componente "children". */
    <main className="flex flex-row">
      <div
        className={`
            bg-[#07510A]
            flex
            flex-col
            justify-between
            min-h-screen
            p-8
            text-white
            w-2/4
        `}
      >
        <Image 
            src='/logo.png' 
            alt='Logo Nexus'  
            width={100} 
            height= {100} 
        />
        <p>Painei do parceiro Nexus - 2024</p>
      </div>

      <div
        className={`
            flex
            flex-col 
            items-center
            justify-center
            p-8
            w-2/4
        `}
      >
        <p
            className={`
                font-semibold
                self-end
            `}
        >
            Primeiro Acesso
        </p>
            {children}
=======
>>>>>>> 92f9411319951164627ec9565cdcbe2218a5a695
      </div>
    </main>
  );
}
<<<<<<< HEAD
>>>>>>> 2ddcac4251312a7691bede29bc00da3072323e4d
=======
>>>>>>> 92f9411319951164627ec9565cdcbe2218a5a695
