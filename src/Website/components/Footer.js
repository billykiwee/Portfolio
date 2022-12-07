import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../App/components/Container'




export default function Footer() {

    return (
        <div className='grey'>
            <Container style='m-t-4 m-b-2'>
                <div className='grid'>
                    <div className='display overflow-hidden'>
                        <img src='/images/logo.png' width={50} />
                    </div>

                    <BlockFooter title='Plan du site'>
                        <LinkFooter link='' text='Commencer un projet' />
                        <LinkFooter link='' text='Services' />
                        <LinkFooter link='' text='Réalisations' />
                        <LinkFooter link='' text='Qui sommes nous ?' />
                    </BlockFooter>

                    <BlockFooter title='Explorer'>
                        <LinkFooter link='' text='Carrières' />
                        <LinkFooter link='' text='Témoignages' />
                        <LinkFooter link='' text='FAQs' />
                        <LinkFooter link='' text='Mentions légales et CGU' />
                    </BlockFooter>

                    <BlockFooter title='Contact'>
                        <LinkFooter link='' text='contact@kiwee.site' />
                    </BlockFooter>

                </div>
            </Container>
        </div>
    ) 
}


function BlockFooter({children, title}) {
    return (
        <div className='grid m-t-1 m-b-1'>
            <div className='display m-b-04'>
                <span className='f-s-25 f-w-500'>{title}</span>
            </div>
            <div className='grid'>{children}</div>
        </div>
    )
}

function LinkFooter({link, text}) {
    return (
        <Link to={'/' + link} className='f-s-16 opacity p-04'>
            <span className='hover-link'>{text}</span>
        </Link>
    )
}