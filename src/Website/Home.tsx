import React, { useEffect, useState } from 'react'
import Container from '../App/components/Container'
import '../Website/css/portfolio.css'
import '../Website/css/effect.css'
import Background from './components/Background'


export default function Home(): JSX.Element {


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


    interface ProjectInfo {
        img  : string
        name : string
        id   : string
        link: string
        logo : string
        text ?: string
    }
      
    const projects : Record<string, ProjectInfo> = {
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

    interface SkillInfo {
        name: string;
        logo: string;
        type?: string;
    }

    const skills: Record<string, SkillInfo> = {
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

    function hoverImage(id: string) {
        const projectEl = document.querySelector<HTMLElement>('#project-' + id);
        if (projectEl) {
            projectEl.style.background = '#f0f8ff87';
            projectEl.onmousemove = w => {
                const imgEl = document.querySelector<HTMLElement>('#' + id);
                if (imgEl) {
                    const imgHeight = imgEl.clientHeight;
                    const imgWidth = imgEl.clientWidth;
                    const x = w.clientX / imgWidth;
                    const y = w.clientY / imgHeight;
                    imgEl.style.transform = `translate(${x}%, ${y}%)`;
                    const imgParent = imgEl.parentElement

                    if (imgParent) imgParent.style.transform = 'scale(1.06)';
                }
            }
        }
      
        const infoEl = document.querySelector<HTMLElement>('#info-' + id);

        if (infoEl) {
          infoEl.style.display = 'flex';
        }
    }
      

    function unFocusImage(id : string) {

        const projectEl = document.querySelector<HTMLElement>('#project-' + id)
        const projectInfoEl = document.querySelector<HTMLElement>('#info-' + id)

        if (projectEl) {
            projectEl.style.background= 'unset'
        }
        if (projectInfoEl) {
            projectInfoEl.style.display= 'none'
            projectInfoEl.style.transform = `translate(0)`
        }    

        const imgParentEl = document.querySelector<HTMLElement>('#' + id)?.parentElement

        if (imgParentEl) {
            imgParentEl.style.transform= 'scale(1)'
        }
    }
    
    const sections = ['Home', 'Works', 'Skills', 'CV', 'Propose']
    const [section, setSection] = useState('Home')


    const [scrollDirection, setScrollDirection] = useState('')
    const [NewPosition, setNewPosition] = useState<number[]>([])


    const [updateDirection, setUpdateDirection] = useState('')
    

    useEffect(()=> {
        
        const scrollPosition : number[] = []

        window.onscroll = () => {

            scrollPosition.push(window.scrollY)
            setNewPosition(scrollPosition.slice(scrollPosition.length -2, scrollPosition.length))
        }

    }, [updateDirection])


    const [stopScroll, setStopScroll]= useState(true)
    useEffect(()=> {

        if ((NewPosition[1] - NewPosition[0]) > 0) {
            setUpdateDirection('down')
        }
        if ((NewPosition[1] - NewPosition[0]) < 0) {
            setUpdateDirection('up')
        }
    }, [NewPosition])


    return (

        <>
            <div className='grid gap-1rem zi-2 display' style={{
                position: 'fixed',
                top     : '50%',
                right   : '1rem',
            }}>
                {
                    sections
                    .map((s, i)=> {
                        return <a 
                            key={i}
                            href={'#'+s}
                            id={'section-' + s}
                            style={{ transform: section === s ? 'scale(1.3)' : '' }}
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

            <Background />

            <Container>
                <div className='grid gap-2rem ' id='sections'>  

                    <section className=' section  gap-1rem' id='Home' >
                        <div className='block grid border-r-2 gap-2rem white shadow' style={{ flex: '1 0 55%' }}>
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
                                                .map((social, i)=> {
                                                    return (
                                                        <a href={social.link} key={i}>
                                                            <button 
                                                                className='white border-r-100 transition' 
                                                                style={{borderBottom: '6px solid rgba(0, 0, 0, 0.09)', width: '3.8rem', height: '3.8rem'}}
                                                                id={social.name} 
                                                                onMouseEnter={e=> {
                                                                    const divEl = document.querySelector<HTMLElement>('#' + social.name)
                                                                    const divImg = document.querySelector<HTMLImageElement>('.' + social.name)

                                                                    if (!divImg) return 
                                                                    if (!divEl) return
                                                                    
                                                                    divEl.style.background = social.color
                                                                    divImg.src = social.logo2
                                                                }}
                                                                onMouseLeave={e=> {
                                                                    const divEl = document.querySelector<HTMLElement>('#' + social.name)
                                                                    const divImg = document.querySelector<HTMLImageElement>('.' + social.name)


                                                                    if (!divEl) return 
                                                                    if (!divImg) return

                                                                    divEl.style.background = ''
                                                                    divImg.src = social.logo1
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
                            <img className='w-100p' id='profil_img' src='https://kiwee.site/wp-content/uploads/2023/02/portfolioPP.png' />
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
                                    .map((project, i)=> {
                                        return (
                                            <div className='border-r-2 click overflow-hidden relative shadow' style={{height: '400px', width: '400px'}} key={i}>
                                                <div 
                                                    className='zi-2 absolute border-r-2 w-100p h-100p transition' 
                                                    id={'project-' + project.id}
                                                    onMouseMove={()=> hoverImage(project.id)}
                                                    onMouseLeave={()=> unFocusImage(project.id)}
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
                                        .map((skill, i)=> {

                                            return (
                                                
                                                <div className='grid justify-s-b white shadow p-2 border-r-1' style={{ width: '88px' }} key={i}>  
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

                    <section id='CV' className='section gap-1rem' >
                        <div className='grid gap-2rem'>
                            <div className='display justify-c'>
                                <span className='f-s-2rem'>Télécharger mon CV</span>
                            </div>
                            <div className='display justify-c m-t-1'>
                                <a href='https://kiwee.site/wp-content/uploads/2023/02/CV2023.pdf' download className='display gap'> 
                                    <button style={{ width: '18rem',  height: '18rem', borderRadius: '100%' }} className='blue shadow'>
                                        <span className='f-s-2rem'>CV</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </section>  

                    <section id='Propose' className='section gap-1rem' >
                        <div className='grid gap-2rem'>
                            <div className='display justify-c'>
                                <span className='f-s-2rem'>Proposez-moi votre projet !</span>
                            </div>
                            <div className='display justify-c m-t-1'>
                                <div className='display white  justify-c wrap border-r-2 shadow p-2'>
                                    <span className='display justify-c'>
                                        <img src='https://kiwee.site/wp-content/uploads/2023/02/portfolioPP.png' style={{ width: '12rem'}} />
                                    </span>
                                    <div className='grid'>
                                        <a href='https://www.malt.fr/profile/billyturpin'>
                                            <div className='grid  gap p-1'>
                                                <span className='display' style={{ width: '12rem', height: '4rem'}} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="745" height="213" viewBox="0 0 745 213" fill="none"><path d="M159.852 52.304C145.752 38.204 130.69 47.33 121.264 56.756L32.22 145.803C22.794 155.228 12.928 169.549 27.768 184.387C42.608 199.23 56.929 189.362 66.353 179.936L155.399 90.891C164.825 81.464 173.951 66.402 159.852 52.304Z" fill="#FC5656"/><path d="M74.78 48.657L93.635 67.511L112.827 48.319C114.13 47.013 115.453 45.801 116.784 44.658C114.774 34.518 108.988 25.351 93.626 25.351C78.235 25.351 72.456 34.554 70.457 44.716C71.894 45.959 73.328 47.205 74.78 48.657Z" fill="#FC5656"/><path d="M112.816 188.71L93.636 169.529L74.791 188.372C73.36 189.804 71.936 191.112 70.518 192.341C72.679 202.678 78.795 212.146 93.628 212.146C108.5 212.146 114.608 202.627 116.755 192.257C115.436 191.122 114.116 190.009 112.816 188.71Z" fill="#FC5656"/><path d="M66.783 94.364H30.433C17.105 94.364 0 98.563 0 118.501C0 133.378 9.522 139.487 19.894 141.633C21.122 140.215 66.783 94.364 66.783 94.364Z" fill="#FC5656"/><path d="M167.435 95.332C166.285 96.67 120.528 142.637 120.528 142.637H156.362C169.691 142.637 186.795 139.488 186.795 118.501C186.795 103.112 177.595 97.33 167.435 95.332Z" fill="#FC5656"/><path d="M78.693 82.432L85.187 75.938L66.344 57.092C56.917 47.667 42.598 37.8 27.758 52.64C16.876 63.522 19.293 74.113 25.065 82.711C26.823 82.581 78.693 82.432 78.693 82.432Z" fill="#FC5656"/><path d="M108.571 154.569L102.06 161.08L121.254 180.272C130.68 189.699 145.742 198.823 159.84 184.725C170.36 174.204 167.946 163.154 162.13 154.302C160.258 154.437 108.571 154.569 108.571 154.569Z" fill="#FC5656"/><path d="M560.612 56.612C557.393 56.612 551.759 57.417 545.586 60.1C537.538 63.588 533.245 66.271 531.099 69.758C523.049 60.369 512.585 57.417 500.78 57.417C466.168 57.417 441.485 86.662 441.485 128.248C441.485 163.128 460.266 188.885 486.828 188.885C494.876 188.885 502.121 185.664 510.708 177.617C517.414 171.445 520.635 167.422 520.635 163.665C520.635 160.981 518.757 159.103 516.073 159.103C512.316 159.103 508.292 162.322 503.194 162.322C492.193 162.322 484.68 145.418 484.68 120.466C484.68 95.515 494.607 78.612 509.632 78.612C519.559 78.612 527.072 86.123 527.072 99.003V177.348C527.072 185.932 535.12 188.347 549.877 188.347C564.367 188.347 570 185.664 570 177.348V65.199C570.003 59.831 566.515 56.612 560.612 56.612Z" fill="#FC5656"/><path d="M395.071 56.612C384.607 56.612 373.607 60.369 363.946 67.881C358.581 72.174 354.019 77.003 354.019 81.028C354.019 84.515 356.433 86.393 359.922 86.393C365.826 86.393 367.704 83.979 373.338 83.979C378.972 83.979 381.655 89.345 381.655 98.736V177.35C381.655 185.934 389.705 188.349 404.46 188.349C418.949 188.349 424.583 185.666 424.583 177.35V91.223C424.583 70.831 412.51 56.612 395.071 56.612Z" fill="#FC5656"/><path d="M319.677 56.612C308.677 56.612 298.749 60.369 289.091 67.881C283.725 72.174 279.164 77.003 279.164 81.028C279.164 84.515 281.577 86.393 285.067 86.393C290.968 86.393 292.848 83.979 297.946 83.979C303.044 83.979 305.727 89.345 305.727 98.736V177.35C305.727 185.934 313.775 188.349 328.531 188.349C343.021 188.349 348.654 185.666 348.654 177.35V91.223C348.653 70.831 336.579 56.612 319.677 56.612Z" fill="#FC5656"/><path d="M263.333 56.612C259.309 56.612 254.48 57.417 248.307 60.1C234.892 66.003 229.795 69.758 229.795 78.076V177.349C229.795 185.933 237.843 188.348 252.6 188.348C267.089 188.348 272.723 185.665 272.723 177.349V65.199C272.724 59.831 269.236 56.612 263.333 56.612Z" fill="#FC5656"/><path d="M735.278 152.127C724.545 154.81 721.327 155.615 717.569 155.615C713.009 155.615 711.398 154.273 711.398 149.444V82.368H735.815C742.254 82.368 744.668 79.954 744.668 73.515C744.668 68.149 742.254 65.464 735.815 65.464H711.398V39.439C711.398 31.389 708.717 28.17 703.081 28.17C697.716 28.17 690.202 33 674.105 46.684C657.74 60.636 648.347 69.758 648.347 76.197C648.347 79.954 651.032 82.368 655.324 82.368H668.471V154.81C668.471 176.007 678.934 188.348 697.179 188.348C709.253 188.348 718.107 183.786 728.571 175.738C738.23 168.225 744.4 162.322 744.4 157.226C744.4 152.933 741.181 150.517 735.278 152.127Z" fill="#FC5656"/><path d="M626.616 0C624.47 0 617.763 0.805 611.59 3.488C598.174 9.122 593.078 13.146 593.078 21.464V177.348C593.078 185.935 601.126 188.349 615.883 188.349C630.373 188.349 636.005 185.666 636.005 177.348V8.586C636.005 3.219 632.518 0 626.616 0Z" fill="#FC5656"/></svg>
                                                </span>
                                                <div className='display justify-c gap'>
                                                    <ul className='display'>
                                                        <li>
                                                            <svg className="star-full" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.51738 0.317102L10.8968 5.03115L15.4764 5.48484C15.7915 5.51103 16.0257 5.78767 15.9995 6.10274C15.9882 6.2386 15.9288 6.36597 15.832 6.46193L12.063 10.1975L13.4604 15.2735C13.5424 15.5821 13.3586 15.8987 13.05 15.9806C12.9134 16.0169 12.7682 16.0019 12.6419 15.9384L7.99897 13.6393L3.36244 15.9355C3.07717 16.079 2.72963 15.964 2.58619 15.6787C2.52268 15.5524 2.50765 15.4073 2.54393 15.2706L3.94129 10.1946L0.169485 6.45908C-0.0550713 6.23653 -0.0566948 5.87408 0.165859 5.64952C0.261822 5.55269 0.389191 5.49329 0.525048 5.482L5.10469 5.0283L7.48056 0.317103C7.62715 0.0307927 7.97809 -0.0824695 8.2644 0.0641246C8.37318 0.119821 8.46168 0.208323 8.51738 0.317102Z" fill="#FFC200"></path></svg>
                                                        </li>
                                                        <li>
                                                            <svg className="star-full" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.51738 0.317102L10.8968 5.03115L15.4764 5.48484C15.7915 5.51103 16.0257 5.78767 15.9995 6.10274C15.9882 6.2386 15.9288 6.36597 15.832 6.46193L12.063 10.1975L13.4604 15.2735C13.5424 15.5821 13.3586 15.8987 13.05 15.9806C12.9134 16.0169 12.7682 16.0019 12.6419 15.9384L7.99897 13.6393L3.36244 15.9355C3.07717 16.079 2.72963 15.964 2.58619 15.6787C2.52268 15.5524 2.50765 15.4073 2.54393 15.2706L3.94129 10.1946L0.169485 6.45908C-0.0550713 6.23653 -0.0566948 5.87408 0.165859 5.64952C0.261822 5.55269 0.389191 5.49329 0.525048 5.482L5.10469 5.0283L7.48056 0.317103C7.62715 0.0307927 7.97809 -0.0824695 8.2644 0.0641246C8.37318 0.119821 8.46168 0.208323 8.51738 0.317102Z" fill="#FFC200"></path></svg>
                                                        </li>
                                                        <li>
                                                            <svg className="star-full" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.51738 0.317102L10.8968 5.03115L15.4764 5.48484C15.7915 5.51103 16.0257 5.78767 15.9995 6.10274C15.9882 6.2386 15.9288 6.36597 15.832 6.46193L12.063 10.1975L13.4604 15.2735C13.5424 15.5821 13.3586 15.8987 13.05 15.9806C12.9134 16.0169 12.7682 16.0019 12.6419 15.9384L7.99897 13.6393L3.36244 15.9355C3.07717 16.079 2.72963 15.964 2.58619 15.6787C2.52268 15.5524 2.50765 15.4073 2.54393 15.2706L3.94129 10.1946L0.169485 6.45908C-0.0550713 6.23653 -0.0566948 5.87408 0.165859 5.64952C0.261822 5.55269 0.389191 5.49329 0.525048 5.482L5.10469 5.0283L7.48056 0.317103C7.62715 0.0307927 7.97809 -0.0824695 8.2644 0.0641246C8.37318 0.119821 8.46168 0.208323 8.51738 0.317102Z" fill="#FFC200"></path></svg>
                                                        </li>
                                                        <li>
                                                            <svg className="star-full" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.51738 0.317102L10.8968 5.03115L15.4764 5.48484C15.7915 5.51103 16.0257 5.78767 15.9995 6.10274C15.9882 6.2386 15.9288 6.36597 15.832 6.46193L12.063 10.1975L13.4604 15.2735C13.5424 15.5821 13.3586 15.8987 13.05 15.9806C12.9134 16.0169 12.7682 16.0019 12.6419 15.9384L7.99897 13.6393L3.36244 15.9355C3.07717 16.079 2.72963 15.964 2.58619 15.6787C2.52268 15.5524 2.50765 15.4073 2.54393 15.2706L3.94129 10.1946L0.169485 6.45908C-0.0550713 6.23653 -0.0566948 5.87408 0.165859 5.64952C0.261822 5.55269 0.389191 5.49329 0.525048 5.482L5.10469 5.0283L7.48056 0.317103C7.62715 0.0307927 7.97809 -0.0824695 8.2644 0.0641246C8.37318 0.119821 8.46168 0.208323 8.51738 0.317102Z" fill="#FFC200"></path></svg>
                                                        </li>
                                                        <li>
                                                            <svg className="star-full" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.51738 0.317102L10.8968 5.03115L15.4764 5.48484C15.7915 5.51103 16.0257 5.78767 15.9995 6.10274C15.9882 6.2386 15.9288 6.36597 15.832 6.46193L12.063 10.1975L13.4604 15.2735C13.5424 15.5821 13.3586 15.8987 13.05 15.9806C12.9134 16.0169 12.7682 16.0019 12.6419 15.9384L7.99897 13.6393L3.36244 15.9355C3.07717 16.079 2.72963 15.964 2.58619 15.6787C2.52268 15.5524 2.50765 15.4073 2.54393 15.2706L3.94129 10.1946L0.169485 6.45908C-0.0550713 6.23653 -0.0566948 5.87408 0.165859 5.64952C0.261822 5.55269 0.389191 5.49329 0.525048 5.482L5.10469 5.0283L7.48056 0.317103C7.62715 0.0307927 7.97809 -0.0824695 8.2644 0.0641246C8.37318 0.119821 8.46168 0.208323 8.51738 0.317102Z" fill="#FFC200"></path></svg>
                                                        </li>
                                                    </ul>
                                                    <span className='f-s-14 c-grey'>(1 avis)</span>
                                                </div>
                                            </div>
                                            <div className='display justify-c p-1 border-r-100 blue hover-blue'>
                                                <span className='f-s-18'>Voir mon profil</span>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>    
 
                </div>
            </Container>

        </>

    )
}

