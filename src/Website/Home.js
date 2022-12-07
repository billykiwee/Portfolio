import React, { useEffect, useState } from 'react'
import Container from '../App/components/Container'
import formatCurrency from '../App/utils/formatCurrency'
import '../Website/portfolio.css'

export default function Netflix() {


    const ProfilImg = 'https://aboghanbari.com/static/me-e1cc23f413b201636eecefd46a8abdc8.jpg'

    const socialMedia = {
        GitHub : {
            logo1 : '/images/github.svg',
            logo2: '/images/github-white.svg',
            name : 'GitHub',
            color: 'black',
            link: 'https://github.com/billykiwee'
        },
        Instagram : {
            logo1 : '/images/instagram.svg',
            logo2: '/images/instagram-white.svg',
            name : 'Instagram',
            color: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
            link: 'https://www.instagram.com/kiwee.site/'
        },
        LinkedIn : {
            logo1 : '/images/linkedin.svg',
            logo2: '/images/linkedin-white.svg',
            name : 'LinkedIn',
            color: '#0A66C2',
            link: 'https://github.com/billykiwee'
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
        nikkoferro : {
            img : 'https://nikoferrotattoo.com/wp-content/uploads/2022/05/Capture-décran-le-2022-05-06-à-17.56.00.png',
            name: 'NikkoFerro Tatoo',
            id  : 'nikkoferro',
            link: 'https://nikoferrotattoo.com/',
            logo: 'https://nikoferrotattoo.com/wp-content/uploads/2022/05/Group-9-3.png'
        },
        bubblegame: {
            img : 'https://kiwee.site/wp-content/uploads/2022/11/Capture-décran-le-2022-11-29-à-16.58.32.png',
            name: 'BubbleGame',
            id  : 'bubblegame',
            link: 'https://animated-gumdrop-7ecba7.netlify.app/',
            logo: '/images/bubblegame.png',
            text: "Création d'un jeu de couleur."
        },
        fitness: {
            img : 'https://kiwee.site/wp-content/uploads/2022/05/Capture-décran-le-2022-05-23-à-18.43-1.png',
            name: 'fitness',
            id  : 'fitness'
        },
        adrienncall: {
            img : 'https://kiwee.site/wp-content/uploads/2022/05/Post-insta-9-1.png',
            name: 'Adrien N call',
            id  : 'adrienncall'
        }
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
        },
    }

    var date1 = new Date()
    var date2 = new Date('03/02/1998')

    var difference = date1.getTime() - date2.getTime()

    var days = Math.ceil(difference / (1000 * 3600 * 24))

    /* console.log({
        an      : days / 365,
        mois    : days / 30,
        jours   : days,
        heures  : days * 24,
        minutes : days * 24 * 60,
        secondes: days * 24 * 60 * 60,
    }) */



    const [Task, setTask] = useState('')
    const [tasks, setTasks] = useState([])


    const data = [
        {
            label      : 'name',
            placeholder: 'John',
            type       : 'text',
        },
        {
            label      : 'email',
            placeholder: 'john@gmail.com',
            type       : 'email',
        },
        {
            label      : 'price',
            placeholder: formatCurrency(10),
            type       : 'number',
        },
        {
            label      : 'password',
            placeholder: '******',
            type       : 'password',
        }
    ]

    function Level({level}) {

        let solid = <span className='h-04 w-2 black border-r-04'></span>
        let clear = <span className='h-04 w-2 grey-200 border-r-04'></span>

        if (level === 1) return <>{solid}{clear}{clear}{clear}{clear}</>
        if (level === 2) return <>{solid}{solid}{clear}{clear}{clear}</>
        if (level === 3) return <>{solid}{solid}{solid}{clear}{clear}</>
        if (level === 4) return <>{solid}{solid}{solid}{solid}{clear}</>
        if (level === 5) return <>{solid}{solid}{solid}{solid}{solid}</>
    
    }


    function hoverImage(id) {
        document.querySelector('#project-' + id).style.background= '#00000066'
        document.querySelector('#info-' + id).style.display= 'flex'

        document.querySelector('#project-' + id).onmousemove = w => {

            let imgHeight =  document.querySelector('#' + id).clientHeight
            let imgWidth =  document.querySelector('#' + id).clientWidth
            let lay = 1000
            let x = (w.clientX+lay) /imgWidth
            let y = (w.clientY+lay) /imgHeight

            document.querySelector('#' + id).style = `transform : translate(${(x)}%, ${(y)}%)`
            document.querySelector('#' + id).parentElement.style.transform= 'scale(1.1)'
        }
    }
    function unFocusImage(id) {
        document.querySelector('#project-' + id).style.background= 'unset'
        document.querySelector('#info-' + id).style.display= 'none'

        document.querySelector('#' + id).style = `transform : translate(0)`
        document.querySelector('#' + id).parentElement.style.transform= 'scale(1)'
    }

    useEffect(e=> {
        window.onscroll = (e) => {
            var h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        
            var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 10;

            document.querySelector('video').currentTime = percent

        }
        document.querySelector('video').playbackRate = 0.9

        document.querySelector('video').controls = false
    })

    return (
        <Container>
            <div classpassword='grid gap-1rem '>

                {/* <header className='display justify-c p-lr-2 h-3 zi-2 white border-r-100'>
                    <div className='display gap'>
                        <div>
                            <button onClick={e=> document.getElementById('Home').scrollIntoView()}>
                                <span className='f-s-16'>Home</span>
                            </button>
                        </div>
                        <div>
                            <button onClick={e=> document.getElementById('Works').scrollIntoView()} >
                                <span className='f-s-16 c-grey'>Works</span>
                            </button>
                        </div>
                        <div>
                            <button onClick={e=> document.getElementById('Profil').scrollIntoView()}>
                                <span className='f-s-16 c-grey'>Profil</span>
                            </button>
                        </div>
                        <div>
                            <button onClick={e=> document.getElementById('Contact').scrollIntoView()}>
                                <span className='f-s-16 c-grey'>Contact</span>
                            </button>
                        </div>
                    </div>
                </header> */}

                <div className='grid gap-1rem'>
                    <section className=' gap-1rem align-top' id='Home' >
                        <div className='block grid border-r-2 gap-2rem white' 
                            style={{
                                flex: '1 0 55%', 
                                backgroundSize: 'cover',
                                backgroundImage : `url(${ProfilImg})`,
                                backdropFilter: 'opacity(0.3)',
                            }}
                        >
                            <div 
                                className='grid border-r-2 gap-2rem h-100'  
                                style={{
                                    backdropFilter: 'blur(44px)',
                                    background: '#ffffff94',
                                }}
                            >
                                <div className='grid p-2 justify-s-b h-100 gap-2rem'>
                                    <div className='grid gap'>   
                                        <div className='grid'>   
                                            <span className='f-s-2rem f-w-500'>Bonjour World,</span>
                                            <span className='f-s-2rem f-w-500'>Je suis Billy, votre futur développeur !</span>
                                        </div>
                                        <div className='display m-t-1'>
                                            <span className='f-w-300 f-s-16'>Développeur depuis 4 ans, je suis passioné par le code et le design et aujourd'hui je vous présente qui je suis et ce que je fais.</span>
                                        </div>
                                    </div>

                                    <div className='gap' id='social-bar'>
                                        <div>
                                            <a href='mailto:billyturpin642@gmail.com'>
                                                <button className='black hover-black border-r-100 p-lr-2 h-3' >
                                                    <span className='f-s-16'>Me contacter</span>
                                                </button>
                                            </a>
                                        </div>
                                        <div className='display justify-s-a gap'>
                                            {
                                                Object.values(socialMedia).map(social=> {
                                                    return (
                                                        <a href={social.link}>
                                                            <button 
                                                                className='white border-r-100 h-3 w-3 p-1 transition' 
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
                                                                    <img src={social.logo1} className={'w-3 h-3 ' + social.name} />
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

                        <div className='display align-top border-r-2 w-100' style={{flex: '1 0 22%', height: '500px'}}>
                            <img className='w-100 border-r-2' src={ProfilImg} style={{height: '500px'}} />
                        </div>
                    </section>

                    <video className='w-100 h-100 border-r-2' controls src="/videos/nikoferro.mp4" type="sample/mp4"/>
                    
                    <section className='gap-1rem' id='Works' >
                        <div className='gap-1rem align-top' id='works'>
                            {
                                Object.values(projects)
                                .map(project=> {
                                    return (
                                        <div className='border-r-2 click overflow-hidden relative' style={{flex: '1 0 38%', height: '500px'}} >
                                            <div 
                                                className='h-100 zi-2 absolute border-r-2 w-100 h-100 transition' 
                                                id={'project-' + project.id}
                                                onMouseMove={e=> hoverImage(project.id)}
                                                onMouseLeave={e=> unFocusImage(project.id)}
                                            >
                                                <div className='display h-100 align-end disable w-100' id={'info-' + project.id}>
                                                    <div className='grid align-top w-100 h-100'>
                                                        <div className='grid h-100 w-100'>
                                                            <div className='grid p-2 justify-s-b h-100'>
                                                                <div className='display'>
                                                                    <div className='display justify-e  w-100'>
                                                                        <a href={project.link} >
                                                                            <button className='display justify-c w-3 h-3 white hover-white border-r-100'>
                                                                                <span className='display'>
                                                                                    <img src='/images/link.svg' />
                                                                                </span>
                                                                            </button>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className='display gap'>
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
                                            <span className='display h-100 transition'>
                                                <img className='w-100 h-100 border-r-2 transition' src={project.img} id={project.id} />
                                            </span> 
                                        </div> 
                                    )
                                })/* .slice(0,2) */
                            }
                        </div>
                    
                        
                    </section>

                    <section className='gap-1rem' id='Profil'>
                        <div className='display wrap gap-1rem align-top'>
                            <div className='grid gap-1rem border-r-2 p-2 white' style={{flex: '1 0 38%'}}>

                                <div>
                                    <span className='f-s-25'>Mon profil</span>
                                </div>

                                <div className='display justify-s-b'>
                                    <div>
                                        <span className='f-s-16'>Mes stacks</span>
                                    </div>
                                </div>

                                <div className='display wrap gap-1rem'>
                                    {
                                        Object.values(skills)
                                        .map(skill=> {
                                            return (
                                                <div className='grid gap-1rem shadow border-r-1 p-1'>
                                                    <div>
                                                        <span className='display gap'>
                                                            <img src={skill.logo} className='display h-2 w-2' />
                                                            <span>{skill.name}</span>
                                                        </span>
                                                    </div>
                                                    <div className='grid'>
                                                        <div className='display gap-04'>
                                                            <Level level={skill.level} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='gap-1rem' id='Contact' >
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
                                    <button className='black p-1 border-r-100'>
                                        <span className='f-s-16'>Envoyer</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </Container>

    )
}
