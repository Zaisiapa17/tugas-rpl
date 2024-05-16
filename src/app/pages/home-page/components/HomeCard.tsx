import * as React from "react"
import Image from "next/image"

interface HeaderProps {
    pathName: string;
}

export function HomeCard({ pathName }: HeaderProps) {
    return (
        <div className="rounded-lg shadow-lg w-[104px] h-[103px] flex items-center justify-center">
            <Image
                className="mx-auto w-auto"
                src={pathName}
                width={500}
                height={500}
                alt="Logo"
            />
        </div>
    )
}
