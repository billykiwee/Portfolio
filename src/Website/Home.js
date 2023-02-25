import React, { useEffect, useState } from 'react'
import Container from '../App/components/Container'

import '../Website/portfolio.css'
import '../Website/effect.css'

export const ProfilImg = 'https://kiwee.site/wp-content/uploads/2023/02/portfolioPP.png'

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
        React : {
            name: 'React.js',
            logo: '/images/react.svg',
            type: 'F'
        },
        TypeScript : {
            name: 'TypeScript',
            logo: '/images/typescript.svg',
            type: 'F'
        },
        VueJS: {
            name: 'Vue.js',
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        },
        JS : {
            name: 'JS',
            logo: '/images/js.svg',
            type: 'F'
        },
        HTML : {
            name: 'HTML',
            logo: '/images/html.svg',
            type: 'F'
        },
        CSS : {
            name: 'CSS',
            logo: '/images/css.svg',
            type: 'F'
        },
        Tailwind: {
            name: 'TailwindCSS',
            logo: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://tailwindcss.com/&size=256',
            type: 'B'
        },
        Node : {
            name: 'Node',
            logo: '/images/node.svg',
            type: 'B'
        },
        PHP : {
            name: 'PHP',
            logo: '/images/php.svg',
            type: 'F'
        },
        Firebase : {
            name: 'Firebase',
            logo: '/images/firebase.svg',
            type: 'S'
        }
    }

    function hoverImage(id) {
        document.querySelector('#project-' + id).style.background= '#f0f8ff87'
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
    
    const sections = ['Home', 'Works', 'Skills', 'CV']
    const [section, setSection] = useState('Home')


    /* useEffect(e=> {


        window.onscroll = () => {
            if (window.scrollY === 0) {
                setSection(sections[0])
            }
            if (window.scrollY > 900 && window.scrollY < 2176) {
                setSection(sections[1])
            }
            if (window.scrollY >= 2000) {
                setSection(sections[2])
            }
        }
    }) */

 /*    const [scrollDirection, setScrollDirection] = useState('')
    const [NewPosition, setNewPosition] = useState([])


    const [updateDirection, setUpdateDirection] = useState('')
    

    useEffect(e=> {
        
        const scrollPosition = []

        window.onscroll = () => {

            scrollPosition.push(window.scrollY)
            setNewPosition(scrollPosition.slice(scrollPosition.length -2, scrollPosition.length))
        }

    }, [updateDirection])


    const [stopScroll, setStopScroll]= useState(true)
    useEffect(e=> {

        if ((NewPosition[1] - NewPosition[0]) > 0) {
            setUpdateDirection('down')
            setStopScroll(false)
        }
        if ((NewPosition[1] - NewPosition[0]) < 0) {
            setUpdateDirection('up')
            setStopScroll(false)
        }


        if ((NewPosition[1] - NewPosition[0]) === 1 || (NewPosition[1] - NewPosition[0]) === -1 ) {
            setStopScroll(true)
        }
        
    }, [NewPosition])



    const [sectionPosition, setSectionPosition] = useState(0)

    useEffect(e=> {

        if (!stopScroll) {
            if (updateDirection === 'down') {
                if (sectionPosition > (sections.length * -1000)) {
                    setSectionPosition(sectionPosition - 1000)
                }

            }
            if (updateDirection === 'up') {
                if (sectionPosition < 0) {
                    setSectionPosition(sectionPosition + 1000)
                }
            }
        }

    }, [stopScroll, updateDirection])

    
    useEffect(e=> {
        
        document.querySelector('#sections').style.top = sectionPosition + 'px'


    }, [sectionPosition])
     */


    const N = 8
    const C = 'x'

    const lign = N
    let inLine = ''
    
    for (let i = 0; i < lign; i++) {
 
        inLine += ' ' + C

        let c = lign-i-1
        
        const v = new Array(c)

        v.fill(' ')

        const spaces = v.toString().split(',').join('')

       console.log(spaces + inLine)

    }





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
                        return <a 
                            href={'#'+s}
                            id={'section-' + s}
                            style={{ transform: section === s && 'scale(1.3)' }}
                            className={
                                (section === s 
                                ? ' w-1 h-1 blue ' 
                                : ' w-1 h-1 blue-secondary ' )
                                + ' border-r-100 click hover-blue'
                            } 
                            onClick={e=> setSection(s)} 
                        />
                    })
                }
            </div>

            <div class="bubbles">
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                
            </div>    
            <Container>

                <div class='grid gap-2rem ' id='sections'>  
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
                                <div className='grid justify-s-b h-100p gap-2rem p-2'>
                                    <div className='grid gap'>   
                                        <div className='grid'>   
                                            <span className='f-s-2rem f-w-600'>Billy</span>
                                            <span className='f-s-25 c-grey'>Développeur web 👨🏻‍💻</span>
                                        </div>
                                        <div className='display m-t-1'>
                                            <span className='f-w-300 f-s-18 c-grey'>Développeur depuis 4 ans, je suis passioné par le code et le design et aujourd'hui je vous présente qui je suis et ce que je fais.</span>
                                        </div>
                                    </div>

                                    <div className='gap' id='social-bar'>
                                        <div>
                                            <a href='mailto:billyturpin642@gmail.com'>
                                                <button className='blue hover-blue border-r-100 p-lr-2 h-3' style={{borderBottom: '6px solid rgba(0, 0, 0, 0.09)', height: '3.8rem' }}>
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

                        <div className='display w-100p animation-1' style={{flex: '1 0 32%'}} id='profil-img'>
                            <img className='w-100p' id='profil_img' src={ProfilImg} />
                        </div>
                    </section>

                    <section className='section gap-1rem' id='Works' >
                        <div className='grid 2rem'>
                            <div className='display justify-c m-b-2'>
                                <span className='f-s-2rem' style={{ textAlign: 'center' }}>Mes plus beaux projets</span>
                            </div>
                            <div className='gap-1rem  display justify-c ' id='works'>
                                {
                                    Object.values(projects)
                                    .map(project=> {
                                        return (
                                            <div className='border-r-2 click overflow-hidden relative shadow' style={{height: '400px', width: '400px'}} >
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
                                                                                <button className='display justify-c white hover-white border-r-100' style={{ width: '3.8rem', height: '3.8rem'}}>
                                                                                    <span className='display'>
                                                                                        <img src='/images/link.svg' width={56} />
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
                        </div>
                    </section>

                    <section className=' section gap-1rem' id='Skills'>
                        <div className='grid gap-2rem'>
                            <div className='display justify-c m-b-2'>
                                <span className='f-s-2rem' style={{textAlign: 'center'}}>J'utilise les dernières technologies</span>
                            </div>
                            <div className='display justify-s-b gap-2rem align-top'>
                                <div className='display justify-c wrap gap-1rem w-100p'>
                                    {
                                        Object.values(skills)
                                        .sort((a,b)=> b.name - a.name)
                                        .map(skill=> {

                                            return (
                                                
                                                <div className='grid justify-s-b white shadow p-2 border-r-1' style={{ width: '88px' }}>  
                                                    <div className='display justify-c margin-auto' style={{ width: '64px', height: '64px' }} >
                                                        <img src={skill.logo}  style={{ width: '64px', height: '64px' }} />
                                                    </div>
                                                    <div className='display justify-c border-r-04 m-t-1 h-1 '>
                                                        <small className='c-grey f-s-18'>{skill.name}</small>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='CV'>
                        <div className='grid gap-2rem'>
                            <div className='display justify-c'>
                                <span className='f-s-2rem'>Télécharger mon CV</span>
                            </div>
                            <div className='display justify-c m-t-1'>
                                <a href='https://kiwee.site/wp-content/uploads/2023/02/CV2023.pdf' download className='display gap'> 
                                    <button style={{ width: '18rem',  height: '18rem', borderRadius: '100%' }} className='blue shadow'>
                                        <span className='f-s-2rem'>CV</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </section>    
                        
                </div>
            </Container>

        </>

    )
}



function useInView(element, effect) {

    const [view, setView] = useState(false)

    
    useEffect(e=> {

        function Observer() {

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    setView(entry.isIntersecting)
                })
            });
            
            const getElement = document.querySelector(element)
            
            return observer.observe(getElement)
        }
        Observer()

        
        window.onscroll = () => Observer()

        return () => view
    })

    useEffect(e=> {
        if (view) {
            document.querySelector(element).classList.add(effect)
        }
        /* else document.querySelector(element).classList.remove(effect) */
    }, [view])


    return view
}
