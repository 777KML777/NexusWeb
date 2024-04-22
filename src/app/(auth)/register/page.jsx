export default function RegisterPage (){

  return (
    <>
        <form>
            
            <div className={`flex flex-col gap-5`}>
                <div className={`flex flex-col`}>
                    <label htmlFor="" className={`text-[#2A933E] mt-4`}>E-mail</label>
                    <input className={`flex border-[1px] border-solid border-[#2A933E] rounded-lg h-10 w-80`} type="text"/>

                    <label htmlFor="" className={`text-[#2A933E] mt-4`}>Chave de acesso</label>
                    <input className={`flex border-[1px] border-solid border-[#2A933E] rounded-lg h-10 w-80`} type="text"/>

                    <label htmlFor="" className={'text-[#2A933E] mt-4'}>Senha</label>
                    <input className={`flex border-[1px] border-solid border-[#2A933E] rounded-lg h-10 w-80`} type="text" />

                    <div className={`flex gap-1 text-[#0D6511] pt-5`}>
                        <input type="checkbox" id="stay-connected" className={`cursor-pointer`}/>
                        <label htmlFor="stay-connected" className={`cursor-pointer`}>Manter-me conectado</label>
                    </div>

                    <button className={`bg-[#2a933e] text-white h-8 w-80 mt-2 rounded`}>Entrar</button>
                </div>
            </div>
        </form>
    </>
  );
}