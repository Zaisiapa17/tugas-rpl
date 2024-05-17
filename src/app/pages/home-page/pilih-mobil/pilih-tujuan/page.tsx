import React from 'react'
import { CardTujuan } from './CardTujuan'

const pageTujuan = () => {
  return (
    <>
    <section className='flex flex-col gap-6 justify-center items-center my-5'>
        <CardTujuan />
        <CardTujuan />
        <CardTujuan />
    </section>
    </>
  )
}

export default pageTujuan