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
import ItemNotification from './components/ItemNotification.jsx';

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
                    Notificações
                </p>
                <FontAwesomeIcon icon={faCheck} />
            </div>

            <h2 className='font-bold px-4 mt-8'>Tarefas e Ranking</h2>

            {/* PRIMEIRA PARTE PARTE  */}
            <ItemNotification text="Receba notifcação há criação de uma nova tarefa."  colorIcon="text-green-500" colorSeconIcon="text-black-900" border="border-b-2" />
            <ItemNotification text="Receba notificação ao fim de uma tarefa."  colorIcon="text-green-500" colorSeconIcon="text-black-900"  border="border-b-2" />
            <ItemNotification text="Receba notificação ao receber pontos de uma tarefa" colorSeconIcon="text-green-500" colorIcon="text-black-900"  border="border-b-2" />
            <ItemNotification text="Receba notificação ao atualizar a sua posição no ranking"  colorIcon="text-green-500" colorSeconIcon="text-black-900" border="border-b-2" />
            <ItemNotification text="Receba notificação sobre atividade de seus colegas." colorSeconIcon="text-green-500" colorIcon="text-black-900" border="border-b-2" />
            <ItemNotification text="Receba notificação sobre o seu progresso mensal."  colorIcon="text-green-500" colorSeconIcon="text-black-900"/>

            {/* SEGUNDA PARTE */}             
            <h2 className='font-bold px-4 mt-8'>Segurança</h2>
            <ItemNotification text="Receba notificação ao realizar um novo login." colorIcon="text-green-500" colorSeconIcon="text-black-900" border="border-b-2"/>
            <ItemNotification text="Receba notificação sobre atualizações no seu perfil."  colorIcon="text-green-500" colorSeconIcon="text-black-900" />

            {/* TERCEIRA PARTE */}
            <Button
                className={
                    `
                    self-center
                    min-w-80
                    bg-[#006DB0]
                    mt-4
                `
                }>Silenciar Notificações</Button>
        </div>
    );
}
