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

    /* return (
        <>
            <div style={{
                    backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/b731d0ca-9886-4932-9bc0-61bebd780b90/FR-fr-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100vh',
                    position: 'absolute',
                    top: 0,
                    zIndex: 0,
                }}
            >
            </div>
            <div style={{height: '100vh', top: 0,backdropFilter: 'brightness(0.3)'}}>
                <header className='display p-2'>
                    <div className='display'>
                        <span className='display'>
                            <svg viewBox="0 0 111 30" width={166} ><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" fill='red'></path></g></svg>
                        </span>
                    </div>
                </header>

                <div className='display justify-c c-white m-t-4'>
                    <div className='w-50 p-2 border-r-04' style={{background: '#00000091'}}>
                        <div className='grid gap m-b-2'>
                            <h2>S'identifier</h2>
                            <input className='border-0 p-1' placeholder='Email ou numéro de téléphone'style={{background: '#333', color: 'white'}} />
                            <input className='border-0 p-1' placeholder='Mot de passe' style={{background: '#333', color: 'white'}}/>

                            <div className='grid m-t-2'>
                                <button className='border-r-04 h-3' style={{background: 'red'}}>
                                    <span className='c-white f-s-18'>S'identifier</span>
                                </button>

                                <div className='display justify-s-b f-w-200 f-s-14'>
                                    <div className='display gap'>
                                        <input type='checkbox' checked />
                                        <span>Se souvenir de moi</span>
                                    </div>
                                    <div className='display'>
                                        <span>Besoin d'aide ?</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='grid f-s-14 f-w-200'>
                            <span>Première visite sur Netflix ? <a href='#' className='link'>Inscrivez-vous.</a></span>
                            <small>Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot.</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) */




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


    async function validForm(e) {
        e.preventDefault()

        for (const v in data) {

            let divError = document.querySelector('#error-' + e.target[v].id)

            const minLengthName = 4
            const maxLengthName = 16
            const minLengthPassword = 6
            const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            const regexPWD = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)&é"'(§è!çà)-^$`ù=:;,]/
            const regexPWDNumber = /.[1234567890]/
            const minPrice = formatCurrency(0.1)

            function setError(error) {
                return divError.innerText = error
            }

            if (e.target[v].id === 'name') {
                if (e.target[v].value.length < minLengthName) setError(`Le nom doit faire ${minLengthName} lettre au minimum`)
                else if (e.target[v].value.length > maxLengthName) setError(`Le nom doit faire ${maxLengthName} lettre au maximum`)
                else setError('')
            }
            if (e.target[v].id === 'email') {
                if (!e.target[v].value.match(regexEmail)) setError("L'email n'est pas valide")
                else setError('')
            }
            if (e.target[v].id === 'price') {
                if (e.target[v].value <= 0) setError(`Il faut enter un prix d'au moins ${minPrice}`)
                else setError('')
            }
            if (e.target[v].id === 'password') {
                if (e.target[v].value.length < minLengthPassword) setError(`Le mot de passe doit avoir ${minLengthPassword} charactères au minimum`)
                else if (!e.target[v].value.match(regexPWD)) setError("Le mot de passe doit contenir un caractère spécial")
                else if (!e.target[v].value.match(regexPWDNumber)) setError("Le mot de passe doit contenir un nombre")
                else setError('')
            }
        }
    }
    

    function Level({level}) {

        let solid = <span className='h-04 w-2 black border-r-04'></span>
        let clear = <span className='h-04 w-2 grey-200 border-r-04'></span>

        if (level === 1) return <>{solid}{clear}{clear}{clear}{clear}</>
        if (level === 2) return <>{solid}{solid}{clear}{clear}{clear}</>
        if (level === 3) return <>{solid}{solid}{solid}{clear}{clear}</>
        if (level === 4) return <>{solid}{solid}{solid}{solid}{clear}</>
        if (level === 5) return <>{solid}{solid}{solid}{solid}{solid}</>
    
    }
    

    const arr = [1,1,1,3,2,2,3]

    let min = Math.min(...arr)
    let max = arr.reduce((x,y)=> x > y ? x : y)
    let sum = arr.reduce((x,y)=> x + y)
    let newArr = Array.from(new Set([...arr]))



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

                                    <div className='gap-1rem' id='social-bar'>
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
                            <img className='w-100 border-r-2 h-100' src={ProfilImg} />
                        </div>
                    </section>
                    
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
                                                onMouseMove={e=> {
                                                    document.querySelector('#project-' + project.id).style.background= '#00000066'
                                                    document.querySelector('#' + project.id).style.transform= 'scale(1.06)'
                                                    document.querySelector('#info-' + project.id).style.display= 'flex'
                                                }}
                                                onMouseLeave={e=> {
                                                    document.querySelector('#project-' + project.id).style.background= 'unset'
                                                    document.querySelector('#' + project.id).style.transform= 'scale(1)'
                                                    document.querySelector('#info-' + project.id).style.display= 'none'
                                                }}
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
                                            <span className='display h-100'>
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
