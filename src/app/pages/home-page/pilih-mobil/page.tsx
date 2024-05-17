import React from 'react'
import { CardComponent } from './CardComponent'

const pagePilihmobil = () => {
    return (
        <>
            <section className="flex flex-col my-5 p-3">
                <h1 className="text-2xl font-medium">Ekonomi</h1>
                <div className="flex justify-center flex-wrap gap-12 my-5">
                    <CardComponent pathName="/images/bus/1.png" />
                    <CardComponent pathName="/images/bus/1.png" />
                    <CardComponent pathName="/images/bus/1.png" />
                    <CardComponent pathName="/images/bus/1.png" />
                </div>
            </section>
            <section className="flex flex-col my-5 p-3">
                <h1 className="text-2xl font-medium">Eksklusif</h1>
                <div className="flex justify-center flex-wrap gap-12 my-5">
                    <CardComponent pathName="/images/bus/2.png" />
                    <CardComponent pathName="/images/bus/2.png" />
                    <CardComponent pathName="/images/bus/2.png" />
                    <CardComponent pathName="/images/bus/2.png" />
                </div>
            </section>
        </>
    )
}

export default pagePilihmobil