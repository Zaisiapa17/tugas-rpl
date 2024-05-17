import * as React from "react"


import Image from "next/image"

interface HeaderProps {
    pathName: string;
}

export function CardComponent({ pathName }: HeaderProps) {
    return (
        <div className="rounded-lg shadow-lg w-[159px] h-[140px] flex items-center justify-center">
            <Image
                className="mx-auto w-28"
                src={pathName}
                width={500}
                height={500}
                alt="Logo"
            />
        </div>
    )
}
