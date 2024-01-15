import React from 'react'
import NounDigitalBank from './../../../img/NounDigitalBank.png'
import NounInterest from './../../../img/NounInterest.png'
import NounMoney from './../../../img/NounMoney.png'
import NounMonthly from './../../../img/NounMonthly.png'
import Spark from './../../../img/Spark.png'

type Requirement = {
    id: number
    img: string
    text: string
};

const benefits: Array<Requirement> = [
    {
        id: 1,
        img: NounInterest,
        text: 'Tasas desde el 8.9%'
    },
    {
        id: 2,
        img: NounMoney,
        text: 'Préstamos desde $10,000 hasta $375,000'
    },
    {
        id: 3,
        img: NounMonthly,
        text: 'Plazos hasta 36 meses'
    },
    {
        id: 4,
        img: NounDigitalBank,
        text: 'Trámites sin costo y 100% en línea'
    },
]

const BenefitsSection = () => {
  return (
    <div className='pt-[98px] snap-start w-full h-screen overflow-hidden bg-background flex flex-col md:flex-row justify-center items-center'>
        <div className='w-1/2 h-full flex justify-center items-center flex-col'>
            <h1 className='text-xl md:text-6xl font-bold text-center'>Créditos</h1>
            <div className='flex flex-row justify-center items-center gap-2' >
            <img src={Spark} alt="Manos con dinero" className= 'h-10 md:h-10 object-contain' />
            <h1 className='text-xl md:text-4xl text-cente bg-gradient-to-r from-gradient-left to-gradient-right text-transparent bg-clip-text'>Beneficios</h1>
            <img src={Spark} alt="Manos con dinero" className= 'h-10 md:h-10 object-contain' />
            </div>
            
        </div>
        <div className='w-1/2 h-full flex justify-center items-center flex-col md:gap-16 gap-8'>
            {
                benefits.map((requirement: Requirement) => (
                    <div className='flex flex-row items-center w-full' key={requirement.text}>
                        <img src={requirement.img} alt={requirement.text} className='h-10 w-10 md:w-20 object-contain' />
                        <p className='text-md md:text-2xl pl-6'>{requirement.text}</p>
                    </div>
                ))
            }
            <div className='flex flex-row items-center w-full justify-end md:pr-10 text-xs'>
                <p>
                    *Dependerá del portafolio que elijas
                </p>
            </div>
        </div>
    </div>
  )
}

export default BenefitsSection