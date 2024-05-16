"use client"

import React from "react";
import { HomeCaursel } from "./components/HomeCaursel";
import { HomeCard } from "./components/HomeCard";
import Image from "next/image";

const pageHome = () => {
    return (
        <>
            <section className="flex justify-center my-5">
                <HomeCaursel />
            </section>
            <section className="flex justify-center gap-7 my-5">
                <HomeCard pathName="/images/icon/pilih-bus.png" />
                <HomeCard pathName="/images/icon/tiket-saya.png" />
                <HomeCard pathName="/images/icon/sejarah-pemesanan.png" />
            </section>
            <section className="flex flex-col my-5">
                <h1>pageHome</h1>
                <HomeCaursel />
            </section>
        </>
    );
};

export default pageHome;
