"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// ExampleComponent.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBars,
  faBell,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faCircleExclamation,
  faEnvelope,
  faFileLines,
  faGear,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import ItemHistory from "./components/ItemHistory.jsx";

// import { api } from "../../../api/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import Image from "next/image";
// import {api, fetcher } from "../../api/api.js";
// import { useEffect } from "react";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
        <p
          className={`
                    font-bold
                `}
        >
          Histórico
        </p>
        <FontAwesomeIcon icon={faCheck} />
      </div>

      <h2 className="font-bold px-4 mt-8">Pontos na Temporada de Outono</h2>

      {/*INÍCIO --- PRIMEIRA PARTE PARTE  */}
        <ItemHistory
          text="Temporada de Verão"
          date="21/12/2023 - 20/03/2024"
          colorIcon="text-green-500"
          point="8"
        />
        <ItemHistory
          text="Temporada de Verão"
          date="21/12/2023 - 20/03/2024"
          colorIcon="text-green-500"
          point="8"
        />
        <ItemHistory
          text="Temporada de Verão"
          date="21/12/2023 - 20/03/2024"
          colorIcon="text-green-500"
          point="8"
        />
        {/* FIM --- PRIMEIRA PARTE */}

      {/* INÍCIO --- SEGUNDA PARTE */}
      <h2 className="font-bold px-4 mt-8">Rankings Passados</h2>
      <ItemHistory
        text="Temporada de Verão"
        date="21/12/2023 - 20/03/2024"
        colorIcon="text-green-500"
        point="8"
      />
      <ItemHistory
        text="Temporada de Verão"
        date="21/12/2023 - 20/03/2024"
        colorIcon="text-green-500"
        point="8"
      />
      <ItemHistory
        text="Temporada de Verão"
        date="21/12/2023 - 20/03/2024"
        colorIcon="text-green-500"
        point="8"
      />

      {/* TERCEIRA PARTE */}
      <h2 className="font-bold px-4 mt-8">Recompensas</h2>
      <ItemHistory
        text="Temporada de Verão"
        date="21/12/2023 - 20/03/2024"
        colorIcon="text-green-500"
        point="8"
      />
      <ItemHistory
        text="Temporada de Verão"
        date="21/12/2023 - 20/03/2024"
        colorIcon="text-green-500"
        point="8"
      />
    </div>
  );
}
