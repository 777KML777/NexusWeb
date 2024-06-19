"use client";

import { Input } from "@/components/ui/input"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"

// import { api } from "../../../api/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import Image from "next/image";
// import {api, fetcher } from "../../api/api.js";
// import { useEffect } from "react";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { faCheck, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            items-center
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
                    Informações Pessoais
                </p>
                <FontAwesomeIcon icon={faCheck} />
            </div>

            <Avatar className={
                `
                    mt-4
                    size-1/4 xl:size-1/6
                `
            }
            >
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div
                className={
                    `
                    mt-4
                `
                }
            >
                <Label htmlFor="nome">Nome</Label>
                <Input
                    value="Felipe"
                    id="nome"
                    className={
                        `
                            min-w-80
                            
                        `
                    }
                />
            </div>
            <div
                className={
                    `
                    mt-4
                `
                }>
                <Label htmlFor="sobrenome">Sobrenome</Label>
                <Input
                    value="Oliveira"
                    id="sobrenome"
                    className={
                        `
                            min-w-80
                        `
                    }
                />
            </div>
            <div
                className={
                    `
                    mt-4
                `
                }>
                <Label htmlFor="email">E-mail</Label>
                <Input
                    value="felipeoliveira@gmail.com"
                    id="email"
                    className={
                        `
                            min-w-80
                        `
                    }
                />
            </div>
            <div
                className={
                    `
                    mt-4
                `
                }>
                <Label htmlFor="empresa">Empresa</Label>
                <Input
                    disabled
                    value="Company Condelivery"
                    id="empresa"
                    className={
                        `
                            min-w-80
                        `
                    }
                />
            </div>
            <div
                className={
                    `
                    mt-4
                `
                }>
                <Label htmlFor="departamento">Departamento</Label>
                <Input
                    disabled
                    value="Desenvolvimento Digital"
                    id="departamento"
                    className={
                        `
                            min-w-80
                        `
                    }
                />
            </div>

            <Button
                className={
                    `
                    min-w-80
                    bg-[#006DB0]
                    mt-4
                `
                }>Alterar Senha</Button>
            <Button
                className={
                    `
                
                bg-transparent
                    min-w-80
                    mt-4
                    border-chill_red
                    border-2
                    text-black
                `
                }>Apagar sua conta</Button>
        </div>
    );
}
