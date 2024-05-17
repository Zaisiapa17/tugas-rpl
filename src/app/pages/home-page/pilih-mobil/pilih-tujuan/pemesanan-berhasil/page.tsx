"use client"

import React from 'react'
import Lottie from "lottie-react";
import groovyWalkAnimation from "./Animation.json";
import Link from 'next/link';

const pageBerhasil = () => {


    return (
        <>
            <section className="flex w-full justify-center items-center mt-10">
                <h1 className='text-2xl font-semibold'>Pemesanan tiket berhasil!</h1>
            </section>
            <Lottie animationData={groovyWalkAnimation} />
            <section className="flex flex-col w-full justify-center items-center mb-10">
                <div
                    className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                        Harap Check in 1 jam sebelum Keberangkatan
                        </p>
                    </div>
                </div>
                <div
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                        Cek tiket anda <Link href={"/pages/home-page/tiket-saya"} className='text-sky-600'>di sini</Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default pageBerhasil