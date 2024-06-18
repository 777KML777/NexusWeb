"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// ExampleComponent.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBars,
  faBell,
  faChevronRight,
  faCircleExclamation,
  faFileLines,
  faGear,
  faHandMiddleFinger,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

// import { api } from "../../../api/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import Image from "next/image";
// import {api, fetcher } from "../../api/api.js";
// import { useEffect } from "react";

import { useForm } from "react-hook-form";
import Link from "next/link";

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

  return (
    // Neste arquivo será o proprio conteudo da página como sections e a main
    <div
      className={`
                flex
                flex-col
                min-h-screen
                gap-3
            `}
    >
      <div
        className={`
                        flex
                        w-full
                        justify-between
                        px-8
                        items-center
                        min-h-28
                    `}
      >
        <Link href={"/profile"}>
          <FontAwesomeIcon icon={faBars} />
        </Link>
        <p
          className={`
                    font-bold
                `}
        >
          Informações Pessoais
        </p>
        <FontAwesomeIcon icon={faBell} />
      </div>

      {/* PRIMEIRA PARTE   */}
      <div
        className={`
                    items-center
                    flex
                    pl-4
                `}
      >
        <Avatar
          className={`
                    mt-4
                    size-1/4
                `}
        >
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div
          className={`
                pl-4
            `}
        >
          <p>Felipe Oliveira</p>
          <p>Company Condelivery</p>
        </div>
      </div>

      {/* SEGUNDA PARTE  */}
      <div className="min-h-96 flex flex-col justify-center">
        <div
          className={`
                    border-gray
                    border-b-2
                    min-h-24
                    flex
                    flex-col
                    justify-center
                    items-center
                    `}
        >
          <Link
            className="flex w-full items-center justify-around"
            href={"/me"}
          >
            <FontAwesomeIcon icon={faClipboard} />
            <div className="flex flex-col ">
              <p>Informações Pessoais</p>
              <p>Minhas informações pessoais</p>
            </div>

            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>

        <div
          className={`
                    border-gray
                    border-b-2
                    min-h-24
                    flex
                    flex-col
                    justify-center
                    items-center
                    `}
        >
          <Link
            className="flex w-full items-center justify-around"
            href={"/notifications"}
          >
            <FontAwesomeIcon icon={faMessage} />
            <div className="flex flex-col ">
              <p>Notificações</p>
              <p>Minha central de notificações</p>
            </div>

            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>

        <div
          className={`
                    border-gray
                    border-b-2
                    min-h-24
                    flex
                    flex-col
                    justify-center
                    items-center
                    `}
        >
          <Link
            className="flex w-full items-center justify-around"
            href={"/history"}
          >
            <FontAwesomeIcon icon={faFileLines} />
            <div className="flex flex-col ">
              <p>Histórico</p>
              <p>Meu histórico de pontuações</p>
            </div>

            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>

      {/* TERCEIRA PARTE  */}
      <div>
        <div
          className={`
                    min-h-12
                    flex
                `}
        >
          <div className="flex w-full items-center justify-around min-h-12">
            <FontAwesomeIcon icon={faCircleExclamation} />
            <p className="w-3/6 text-center">Ajuda</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div
          className={`
                    min-h-12
                    flex
                    flex-col
                    justify-center
                    items-center
                    `}
        >
          <div className="flex w-full items-center justify-around min-h-12">
            <FontAwesomeIcon icon={faGear} />
            <p className="w-3/6 text-center">Configurações</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div
          className={`
                    min-h-12
                    flex
                    flex-col
                    justify-center
                    items-center
                    `}
        >
          <div className="flex w-full items-center justify-around min-h-12">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            <p className="w-3/6 text-center">Desconectar</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
