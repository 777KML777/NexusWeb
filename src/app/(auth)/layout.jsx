import Image from "next/image";
export default function LoginLayout({ children }) {
  return (

    <main className="flex">

      <div
        className="bg-[#07510A] flex flex-col justify-between min-h-screen p-8 text-white w-2/4">
        <Image src="/logo.png" alt="Logo Nexus" width={100} height={100} />
        <p>Painel do parceiro Nexus - 2024</p>
      </div>

      <div className="flex flex-col items-center justify-center p-8 w-2/4">
        <p className="font-semibold block">
          Primeiro Acesso
        </p>
        {children}
      </div>
    </main>
  );
}
