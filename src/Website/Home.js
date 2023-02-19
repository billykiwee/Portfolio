import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../App/components/Container'
import { useStateValue } from '../App/components/StateProvider'
import formatCurrency from '../App/utils/formatCurrency'
import '../Website/portfolio.css'



export const ProfilImg = 'https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/329741559_585700209797783_5646518292296135177_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Gz1JbPJpvPgAX-dRGnK&_nc_ht=scontent-cdg2-1.xx&oh=00_AfDozyn70_UQvXkiTMNd2OxC9ZBXMw31R24iyFTllK3ysQ&oe=63F72B0C'

export default function Netflix() {


    const socialMedia = {
        GitHub : {
            logo1 : '/images/github.svg',
            logo2: '/images/github-white.svg',
            name : 'GitHub',
            color: '#1dd1a1',
            link: 'https://github.com/billykiwee'
        },
        Instagram : {
            logo1 : '/images/instagram.svg',
            logo2: '/images/instagram-white.svg',
            name : 'Instagram',
            color: 'rgb(255, 99, 72)',
            link: 'https://www.instagram.com/kiwee.site/'
        },
        LinkedIn : {
            logo1 : '/images/linkedin.svg',
            logo2: '/images/linkedin-white.svg',
            name : 'LinkedIn',
            color: '#0A66C2',
            link: 'https://www.linkedin.com/in/billy-turpin-a5b283217/'
        },
        Twitter : {
            logo1 : '/images/twitter.svg',
            logo2: '/images/twitter-white.svg',
            name : 'Twitter',
            color: '#47ACDF',
            link: 'https://twitter.com/billy_kiwee'
        }
    }

    const projects = {
        qleeme : {
            img : 'https://kiwee.site/wp-content/uploads/2023/02/Group-64.png',
            name: 'Qlee.me',
            id  : 'qleeme',
            link: 'https://qlee.me/',
            logo: 'https://kiwee.site/wp-content/uploads/2023/02/favicon.png'
        },
        nikkoferro : {
            img : 'https://kiwee.site/wp-content/uploads/2023/02/Capture-decran-le-2023-02-18-a-22.40.31.png',
            name: 'NikkoFerro Tatoo',
            id  : 'nikkoferro',
            link: 'https://nikoferrotattoo.com/',
            logo: 'https://nikoferrotattoo.com/wp-content/uploads/2022/05/Group-9-3.png'
        },
        athena : {
            img : 'https://kiwee.site/wp-content/uploads/2023/02/athena.png',
            name: 'Athena',
            id  : 'athena',
            link: 'https://www.athena-co.io/',
            logo: 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.athena-co.io/&size=256'
        },
        bubblegame: {
            img : 'https://kiwee.site/wp-content/uploads/2022/11/Capture-décran-le-2022-11-29-à-16.58.32.png',
            name: 'BubbleGame',
            id  : 'bubblegame',
            link: 'https://animated-gumdrop-7ecba7.netlify.app/',
            logo: '/images/bubblegame.png',
        },
    }

    const skills = {
            JS : {
                name: 'JS',
                logo: '/images/js.svg',
                level: 5,
                type: 'F'
            },
            React : {
                name: 'React',
                logo: '/images/react.svg',
                level: 5,
                type: 'F'
            },
            TypeScript : {
                name: 'TypeScript',
                logo: '/images/typescript.svg',
                level: 1,
                type: 'F'
            },
            HTML : {
                name: 'HTML',
                logo: '/images/html.svg',
                level: 5,
                type: 'F'
            },
            CSS : {
                name: 'CSS',
                logo: '/images/css.svg',
                level: 5,
                type: 'F'
            },
            Node : {
                name: 'Node',
                logo: '/images/node.svg',
                level: 2,
                type: 'B'
            },
            PHP : {
                name: 'PHP',
                logo: '/images/php.svg',
                level: 3,
                type: 'F'
            },
            Firebase : {
                name: 'Firebase',
                logo: '/images/firebase.svg',
                level: 4,
                type: 'F'
            }
        }


    function hoverImage(id) {
        document.querySelector('#project-' + id).style.background= '#00000066'
        document.querySelector('#info-' + id).style.display= 'flex'

        document.querySelector('#project-' + id)
        .onmousemove = w => {

            let imgHeight =  document.querySelector('#' + id).clientHeight
            let imgWidth =  document.querySelector('#' + id).clientWidth
            let x = w.clientX / imgWidth
            let y = w.clientY / imgHeight

            document.querySelector('#' + id).style = `transform : translate(${(x)}%, ${(y)}%)`
            document.querySelector('#' + id).parentElement.style.transform= 'scale(1.06)'
        }
    }

    function unFocusImage(id) {
        document.querySelector('#project-' + id).style.background= 'unset'
        document.querySelector('#info-' + id).style.display= 'none'

        document.querySelector('#' + id).style = `transform : translate(0)`
        document.querySelector('#' + id).parentElement.style.transform= 'scale(1)'
    }
    

    const sections = ['Home', 'Works', 'Skills']
    const [section, setSection] = useState('Home')


/* 
    const [windowY, setwindowY] = useState(0)

    useEffect(e=> {
        const div = document.querySelector('#' + section)
        div.scrollIntoView({ behavior: "smooth" })


    }, [section])
     */


    const [scrollDirection, setScrollDirection] = useState('')
    const [onscroll, setOnscroll] = useState(0)

    useEffect(e=> {
        
        const scrollPosition = []

        window.onscroll = () => {

            scrollPosition.push(window.scrollY)
            let newPosition = scrollPosition.slice(scrollPosition.length -2, scrollPosition.length)

            
            if ((newPosition[1] - newPosition[0]) > '0') {
                setScrollDirection( 'down' )
            }
            if ((newPosition[1] - newPosition[0]) < '0') {
                setScrollDirection( 'up' )
            }

            if (window.scrollY === 0) {
                setScrollDirection( '' )
            }
            if (window.scrollY === 1000) {
                setScrollDirection( '' )
            }
            if (window.scrollY === 2176) {
                setScrollDirection( '' )
            }
        }

        
    }, [])


    
    const [count, setCount] = useState(0)
    
    useEffect(e=> {

        if (scrollDirection === 'down') {
            if (count < sections.length) {
                setCount(count + 1)
            }
        }

        if (scrollDirection === 'up') {
            if (count > 0) {
                setCount(count - 1)
            }
        }

    }, [scrollDirection])
    

    useEffect(e=> {

        if (count === 0) {
            window.scrollTo(0, 0)
        }
        else if (count === 1) {
            window.scrollTo(0, 1000)
        }
        else if (count === 2) {
            window.scrollTo(0, 2176)
        }

    }, [count])




    return (

        <>
            <div className='grid gap-1rem zi-2 display' style={{
                position: 'fixed',
                top     : '50%',
                right   : '1rem',
            }}>
                {
                    sections
                    .map(s=> {
                        return <div 
                            id={'section-' + s}
                            className={
                                (section === s 
                                ? ' w-1 h-1 blue ' 
                                : ' w-1 h-1 blue-secondary ' )
                                + ' border-r-100 border click hover-blue'
                            } 
                            onClick={e=> setSection(s)} 
                        />
                    })
                }
            </div>

            <Container>

                <div classpassword='grid gap-1rem '>

                    <div className='grid gap-1rem'>
                        
                        <section className=' section  gap-1rem' id='Home' >
                            <div className='block grid border-r-2 gap-2rem white shadow' 
                                style={{
                                    flex: '1 0 55%', 

                                }}
                            >
                                <div 
                                    className='grid border-r-2 gap-2rem h-100p'  
                                    style={{
                                        backdropFilter: 'blur(44px)',
                                        background: '#ffffff94',
                                    }}
                                >
                                    
                                    <div className='grid justify-s-b h-100p gap-2rem' style={{ padding: '3rem' }}>
                                        <div className='grid gap'>   
                                            <div className='grid'>   
                                                <span className='f-s-2rem f-w-600'>Je suis Billy, votre développeur web front-end !</span>
                                            </div>
                                            <div className='display m-t-1'>
                                                <span className='f-w-300 f-s-18'>Développeur depuis 4 ans, je suis passioné par le code et le design et aujourd'hui je vous présente qui je suis et ce que je fais.</span>
                                            </div>
                                        </div>

                                        <div className='gap' id='social-bar'>
                                            <div>
                                                <a href='mailto:billyturpin642@gmail.com'>
                                                    <button className='black hover-black border-r-100 p-lr-2 h-3' style={{borderBottom: '6px solid rgba(0, 0, 0, 0.09)', height: '3.8rem' }}>
                                                        <span className='f-s-16'>Me contacter</span>
                                                    </button>
                                                </a>
                                            </div>
                                            <div className='display justify-s-a gap'>
                                                {
                                                    Object.values(socialMedia)
                                                    .map(social=> {
                                                        return (
                                                            <a href={social.link}>
                                                                <button 
                                                                    className='white border-r-100 transition' 
                                                                    style={{borderBottom: '6px solid rgba(0, 0, 0, 0.09)', width: '3.8rem', height: '3.8rem'}}
                                                                    id={social.name} 
                                                                    onMouseEnter={e=> {
                                                                        document.querySelector('#' + social.name).style.background = social.color
                                                                        document.querySelector('.' + social.name).src = social.logo2
                                                                    }}
                                                                    onMouseLeave={e=> {
                                                                        document.querySelector('#' + social.name).style.background = ''
                                                                        document.querySelector('.' + social.name).src = social.logo1
                                                                    }}
                                                                >
                                                                    <span className='display justify-c'>
                                                                        <img src={social.logo1} className={'w-56 h-56 ' + social.name} />
                                                                    </span>
                                                                </button>
                                                            </a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='display border-r-2 w-100p shadow' style={{flex: '1 0 22%'}}>
                                <img className='w-100p border-r-2 CG-img' src={ProfilImg}  id='profil_img'/>
                            </div>
                        </section>


                    {/*  <video className='w-100p h-100p border-r-2' controls src="/videos/nikoferro.mp4" type="sample/mp4" style={{height: '500px', objectFit: 'cover'}}/> */}
                        
                        <section className=' section gap-1rem' id='Works' >
                            <div className='gap-1rem  display justify-c ' id='works'>
                                {
                                    Object.values(projects)
                                    .map(project=> {
                                        return (
                                            <div className='border-r-2 click overflow-hidden relative shadow' style={{height: '444px', width: '444px'}} >
                                                <div 
                                                    className='zi-2 absolute border-r-2 w-100p h-100p transition' 
                                                    id={'project-' + project.id}
                                                    onMouseMove={e=> hoverImage(project.id)}
                                                    onMouseLeave={e=> unFocusImage(project.id)}
                                                >
                                                    <div className='display h-100p align-end disable w-100p' id={'info-' + project.id}>
                                                        <div className='grid w-100p h-100p'>
                                                            <div className='grid h-100p w-100p'>
                                                                <div className='grid p-2 justify-s-b h-100p'>
                                                                    <div className='display'>
                                                                        <div className='display justify-e  w-100p'>
                                                                            <a href={project.link}>
                                                                                <button className='display justify-c w-3 h-3 white hover-white border-r-100'>
                                                                                    <span className='display'>
                                                                                        <img src='/images/link.svg' />
                                                                                    </span>
                                                                                </button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className='display gap-1rem'>
                                                                        <span className='display justify-c'>
                                                                            <img src={project.logo} className='border-r-100 w-3 h-3' />
                                                                        </span>
                                                                        <div className='grid' style={{background: 'unset!important'}}>
                                                                            <span className='c-white f-w-500 f-s-18'>{project.name}</span>
                                                                            <span className='c-white f-s-14 f-w-100'>{project.text}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className='display h-100p transition'>
                                                    <img className='w-100p h-100p border-r-2 transition' src={project.img} id={project.id} />
                                                </span> 
                                            </div> 
                                        )
                                    })
                                }
                            </div>
                        
                            
                        </section>

                        <section className=' section gap-1rem' id='Skills'>
                            <div className='grid gap-2rem'>
                                <div className='display justify-c m-b-2'>
                                    <span className='f-s-2rem' style={{textAlign: 'center'}}>J'utilise les dernières technologies</span>
                                </div>
                                <div className='display justify-c wrap gap-1rem w-100p'>
                                    {
                                        Object.values(skills)
                                        .map(skill=> {

                                            return (
                                                
                                                <div className='grid justify-s-b white shadow p-2 border-r-1' style={{ width: '88px' }}>  
                                                    <div className='display  justify-c gap'>
                                                        <img src={skill.logo} style={{ width: '64px' }} />
                                                    </div>
                                                    <div className='display justify-c border-r-04 p-1 h-1 '>
                                                        <small className='c-grey f-s-18'>{skill.name}</small>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </section>

                    {/*   <section className=' section gap-1rem' id='Contact' >
                            <div className='grid border-r-2 gap-2rem p-2 white' style={{flex: '1 0 20%'}} >
                                <div className='grid gap'>
                                    <span className='f-s-25'>Contact</span>
                                    <span>Et si on se faisait un petit café ?</span>
                                </div>
                                <div className='grid gap-1rem w-100'>
                                    <div className='grid gap-1rem'>
                                        <div className='grid gap-04'>
                                            <label>Nom</label>
                                            <input className='div-input' placeholder='John Doe'/>
                                        </div>
                                        <div className='grid gap-04'>
                                            <label>Email</label>
                                            <input className='div-input' placeholder='monemail@gmail.com'/>
                                        </div>
                                        <div className='grid gap-04'>
                                            <label>Message</label>
                                            <textarea className='div-input' placeholder="J'aimerai collaborer avec vous" />
                                        </div>
                                    </div>
                                    <div>
                                        <button className='black p-20 border-r-100'>
                                            <span className='f-s-16'>Envoyer</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section> */}
                    </div>
                </div>
            </Container>

        </>

    )
}
