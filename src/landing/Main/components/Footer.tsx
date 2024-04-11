import React from 'react'
import Logo from './../../../img/FondflexLogoBW.png'

type FooterItem = {
    name: string,
    href: string
}

const categories: Array<FooterItem> = [
    {
        name: 'Contactar Talento',
        href: '#'
    },
    {
        name: 'Desarrollar Talento',
        href: '#'
    },
    {
        name: 'Herramientas de Gamificación',
        href: '#'
    },
]

const enterprise: Array<FooterItem> = [
    {
        name: 'Sobre nosotros',
        href: '#'
    },
    {
        name: 'Soluciones',
        href: '#'
    },
    {
        name: 'Insights',
        href: '#'
    }
]

interface FooterSectionProps {
    title?: string,
    links: Array<FooterItem>
}

const FooterSection: React.FC<FooterSectionProps> = ({title = "", links}) => {
    return (
        <ul className='flex flex-col gap-2'>
            <li className='font-bold pb-2'>{title}</li>
            {links.map((link, index) => (
                <li className='text-gray-400' key={link.name}>
                    <a href={link.href}>{link.name}</a>
                </li>
            ))}
        </ul>
    )
}

const Footer = () => {
  return (
    <footer className='bg-black text-white snap-end'>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
            <div className='flex justify-start items-start'>
                <img src={Logo} alt="Logo" className='object-contain h-14'/>
            </div>
            <FooterSection 
                title='Empresa'
                links={enterprise}
            />
            <FooterSection 
                title='Categorías'
                links={categories}
            />
            <FooterSection 
                links={categories}
            />
        </div>
    </footer>
  )
}

export default Footer