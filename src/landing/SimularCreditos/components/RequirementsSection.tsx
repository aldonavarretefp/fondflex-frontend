import React from 'react'
import HandsCash2 from './../../../img/HandsCash2.png' 
import NounBank from './../../../img/NounBank.png'
import FourStars from './../../../img/FourStars.png'
import NounIdCard from './../../../img/NounIdCard.png'
import NounNewsPaper from './../../../img/NounNewsPaper.png'


type Requirement = {
    id: number
    img: string
    text: string
};

const requirements: Array<Requirement> = [
    {
        id: 1,
        img: NounBank,
        text: 'Buen historial crediticio'
    },
    {
        id: 2,
        img: FourStars,
        text: 'Identificación oficial con fotografía'
    },
    {
        id: 3,
        img: NounIdCard,
        text: 'Cuenta bancaria con CLABE'
    },
    {
        id: 4,
        img: NounNewsPaper,
        text: 'Comprobante de ingresos y domicilio'
    },
]

const RequirementsSection = () => {
  return (
    <div className='pt-[98px] snap-start w-full h-screen overflow-hidden bg-background flex flex-col md:flex-row justify-center items-center'>
        <div className='w-1/2 h-full flex justify-center items-center flex-col'>
            <h1 className='text-xl md:text-6xl font-bold text-center'>Créditos</h1>
            <h1 className='text-xl md:text-4xl text-center'>¿Qué necesitas?</h1>
            <img src={HandsCash2} alt="Manos con dinero" className= 'h-30 md:h-60 object-contain' />
        </div>
        <div className='w-1/2 h-full flex justify-center items-center flex-col md:gap-16 gap-8'>
            {
                requirements.map((requirement: Requirement) => (
                    <div className='flex flex-row items-center w-full' key={requirement.text}>
                        <img src={requirement.img} alt={requirement.text} className='h-10 w-10 md:w-20 object-contain' />
                        <p className='text-md md:text-2xl pl-6'>{requirement.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default RequirementsSection