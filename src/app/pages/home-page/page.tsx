"use client"

import React from "react";
import { HomeCaursel } from "./components/HomeCaursel";
import { HomeCard } from "./components/HomeCard";

const pageHome = () => {
    return (
        <>
            <section className="flex justify-center my-5">
                <HomeCaursel />
            </section>
            <section className="flex justify-center gap-7 my-5">
                <HomeCard pathName="/images/icon/pilih-bus.png" />
                <HomeCard pathName="/images/icon/image.png" />
                <HomeCard pathName="/images/icon/sejarah-pemesanan.png" />
            </section>
            <section className="flex flex-col my-5 p-3">
                <h1 className="text-2xl font-medium">Untuk Kamu</h1>
                <div className="rounded-lg shadow-lg w-[360px] h-[284px] flex items-center justify-center mx-auto mt-5">
                    Banner promo
                </div>
            </section>
        </>
    );
};

export default pageHome;
