import Teste from "@/components/teste";


export default function HomePage() {
  return (
    // Neste arquivo será o proprio conteudo da página como sections e a main
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="font-bold text-9xl">Hello World!</div>
            <div className="font-bold text-6xl">Página de Home</div>
            <Teste />
            <div className="w-[72.43px] h-8 rounded border-none bg-[#f6f6] text-[#fff]"></div>
        </main>
  );
}
