"use client";
import { api } from "../../../api/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import Image from "next/image";
// import {api, fetcher } from "../../api/api.js";
// import { useEffect } from "react";

import { useForm } from "react-hook-form";

export default function LoginPage() {
  // Hook do próprio next para redirecionar para outra página após uma ação.

  const { push } = useRouter();

  const [isSaving, setIsSaving] = useState(false);

  async function createUser(payload) {
    setIsSaving(true);
    await api.post("/router", payload);
  }

  const form = useForm();

  async function onSubmit(data) {
    console.log(data);
    // call api
    // push("/pagina")
    await createUser(data);
  }

  // const {data, isLoading} = useSWR("/router", fetcher)

  // // Forma mais manual de fazer o fetch
  // // const [state, setState] = useState();
  // // useEffect(() => {
  // //   api.get("/router").then(({ data }) => {
  // //     // setState()
  // //   });
  // // }, []);

  // if (isLoading) {
  //   return <div>Carregando</div>
  // }

  return (
    // Neste arquivo será o proprio conteudo da página como sections e a main
    <div
      className={`
            items-center
            flex
            flex-col
            justify-center
            h-full
            gap-3
        `}
    >
      <p className="font-bold">Acessar Painel</p>
      <p
        className={`
        italic
        text-center
        w-80 
      `}
      >
        Evocando conexão entre as dimensões ambiental, social e de governo
      </p>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div
          className={`
            flex
            flex-col
            gap-5
          `}
        >
          <div
            className={`
            flex
            flex-col
          `}
          >
            <label
              htmlFor=""
              className={`
              text-[#2A933E]
            `}
            >
              Email
            </label>
            <input
              className={`
              border
              border-solid 
              border-[#2A933E]
              h-8
              
            `}
              type="text"
              {...form.register("email", {
                required: {
                  value: true,
                  message: "Email obrigatório",
                },
              })}
            />
            {/* border-[0D6511] */}
            {form.formState.errors.email?.message}
          </div>

          <div
            className={`
            flex
            flex-col
          `}
          >
            <label
              htmlFor=""
              className={`
              text-[#2A933E]
            `}
            >
              Senha
            </label>
            <input
              className={`
              border
              border-solid 
              border-[#2A933E]
              h-8
              
            `}
              type="password"
              {...form.register("senha", {
                required: {
                  value: true,
                  message: "Senha Obrigatória",
                },
              })}
            />
            {/* border-[0D6511] */}
            {form.formState.errors.senha?.message}

            <div
              className={`
                flex
                gap-2
                text-[#0D6511]
                pt-4
              `}
            >
              <input
                type="radio"
                //onClick={}
                {...form.register("keepConnected")}
              />
              <label>Manter-me conectado</label>
            </div>
          </div>

          <button
            type="submit"
            className={`
            bg-[#2A933E]
            text-white
            h-8
            w-80
        `}
          >
            {isSaving ? "Entrando..." : "Entrar"}
          </button>

          <p
            className={`
              underline
              text-[#0D6511]
              text-center
            `}
          >
            Esqueceu a senha?
          </p>
        </div>
      </form>
    </div>
  );
}
