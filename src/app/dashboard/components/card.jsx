import Image from "next/image";

export default function Card(){
    return(
        <div className="border-2 border-white rounded-md py-4 px-6 min-w-96 w-96 cursor-pointer">
            <Image 
            alt="Card Image"
            src={"/images/dashboard/card-image.png"}
            width={800}
            height={800}
            className="w-full rounded-md"
            />
            <div className="mt-4 flex flex-col gap-4">
                <h3 className="font-semibold text-2xl">Como Reciclar Afeta Sua Vida e do Nosso Planeta!</h3>
                <p className="line-clamp-3 text-[#E1E1E1]">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop and more recently with desktop</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Image 
                            alt="Card Image"
                            src={"/images/dashboard/user-1.png"}
                            width={800}
                            height={800}
                            className="w-12"
                        />
                        <span className="font-bold text-lg">Miguel Bizzi</span>
                    </div>
                    <p className="text-[#aaaaaa] font-medium">Dezembro 21, 2023</p>
                </div>
            </div>
        </div>
    )
}