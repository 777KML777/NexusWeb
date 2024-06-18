"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
// ExampleComponent.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faBars, faBell, faCheck, faChevronLeft, faChevronRight, faCircleExclamation, faEnvelope, faFileLines, faGear, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';


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
                <Link
                    href={"/profile"}
                >

                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>
                <p className={`
                    font-bold
                `}
                >
                    Histórico
                </p>
                <FontAwesomeIcon icon={faCheck} />
            </div>

            <h2>Tarefas e Ranking</h2>

            {/* PRIMEIRA PARTE PARTE  */}
            <div
                className="min-h-96 flex flex-col justify-center"
            >
                <div
                    className={`
                    border-gray
                    border-b-2
                    min-h-24
                    flex
                    flex-col
                    justify-center
                    items-center
                    `}>

                    <Link
                        className="flex w-full items-center justify-around"
                        href={"/me"}
                    >

                        <div className="flex flex-col ">
                            <p>Cada um no seu quadrado</p>
                            <p>01/05/2024 10:30:11</p>
                        </div>

                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faMobile} />
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
                    `}>

                    <Link
                        className="flex w-full items-center justify-around"
                        href={"/me"}
                    >

                        <div className="flex flex-col ">
                            <p>Receba notificação há criação de uma nova tarefa</p>
                        </div>

                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faMobile} />
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
                    `}>

                    <Link
                        className="flex w-full items-center justify-around"
                        href={"/me"}
                    >

                        <div className="flex flex-col ">
                            <p>Receba notificação há criação de uma nova tarefa</p>
                        </div>

                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faMobile} />
                    </Link>
                </div>

            </div>

            <h2>Segurança</h2>

            {/* SEGUNDA PARTE  */}
            <div
                className="min-h-96 flex flex-col justify-center"
            >
                <div
                    className={`
                    border-gray
                    border-b-2
                    min-h-24
                    flex
                    flex-col
                    justify-center
                    items-center
                    `}>

                    <Link
                        className="flex w-full items-center justify-around"
                        href={"/me"}
                    >

                        <div className="flex flex-col ">
                            <p>Receba notificação há criação de uma nova tarefa</p>
                        </div>

                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faMobile} />
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
                    `}>

                    <Link
                        className="flex w-full items-center justify-around"
                        href={"/me"}
                    >

                        <div className="flex flex-col ">
                            <p>Receba notificação há criação de uma nova tarefa</p>
                        </div>

                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faMobile} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
