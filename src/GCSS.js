import { properties } from "./properties"

var style = document.createElement('style')
document.getElementsByTagName('html')[0].appendChild(style) 




////////////////////// GENERATE JSON CSS ////////////////////////

window.onclick = () => {


    function generateVariableNumber() {

        let rem = []
        let px = []
    
        for (const v in properties) {
            console.log(properties[v].name);
            for (let i = 0; i < 101; i++) {
    
    
                if (properties[v].variable) {
    
                    rem.push({
                        name : `${properties[v].name}${(i).toString().split('.').join('')}`,
                        style: `.${properties[v].name}${(i).toString().split('.').join('')} { ${properties[v].propertie} : ${i}px; }`
                    })
    
                    px.push({
                        name : `${properties[v].name}${(i).toString().split('.').join('')}`,
                        style: `.${properties[v].name}${(i).toString().split('.').join('')} { ${properties[v].propertie} : ${i}px; }`
                    })
                }               
            }
        }
    
        let r = []
        let v = r.concat(rem, px)
        let result = JSON.stringify(v)
    
        console.log(result);
    
        navigator.clipboard.writeText(result);
    }

    function generateVariableColor() {

        const colorGen = []

        const colors = ['black', 'white', 'blue', 'yellow', 'green', 'red', 'grey', 'orange', 'violet', 'pink', 'brown', 'gold']
    
        for (const c in colors) {
        
            for (const v in properties) {

                if (properties[v].color) {

                    if (properties[v].name === 'bg-') {

                        colorGen.push({
                            name : `${properties[v].name}${colors[c]}`,
                            style: `.${properties[v].name}${colors[c]} { background-color : var(--${colors[c]}); }`
                        })
                    }

                }
            }
        }


        let result = JSON.stringify(colorGen)
    
        console.log(result);
    
        navigator.clipboard.writeText(result);
    }

}
////////////////////////////////////////////////




export default function GenerateCSS() {


    ///// Generate css by shortcut css directly in class of element in inspector

    function ClassCss() {

        let getAllClass = []
        let all = document.getElementsByTagName("*")
        style.type = 'text/css'
        style.id = 'v____________COPY YOUR CSS_GEN HERE____________v'
        
        Object.values(all).map(e=> {
    
            let allArray = e.className.split(' ')

            getAllClass.push(...allArray)
        })

        let allClass = Array.from(new Set([...getAllClass])).sort().filter(element => element !== '')
        
    

        let createCSS = []
    
        for (const v in properties) {

            // If propertie is variable 
            if (properties[v].variable === false) {

                    createCSS.push(
                        `
                            .${properties[v].name} { 
                                ${properties[v].style}
                            }
                        `
                    )
            }


            else if (properties[v].color === true) {

                allClass.map(className=> {


                    const colors = ['black', 'white', 'blue', 'yellow', 'green', 'red', 'grey', 'orange', 'violet', 'pink', 'brown']

                    if (colors.includes(`${className.split('-')[1]}`)) {

                        if (className.split('-')[0] === 'bg') {

                            createCSS.push(
                                `
                                    .${className} { 
                                        background-color : rgb(${className.split('-')[2]} ${className.split('-')[2]} ${className.split('-')[2]})};
                                    }
                                `
                            )
                        }
    
                    }
                })

            }

            else {

                for (let i = 0; i < 100; i++) {
                    
                    if (allClass.includes(`${properties[v].name}${i}`)) {
    
                        createCSS.push(
                            `
                                .${properties[v].name}${i} { 
                                    ${properties[v].propertie} : ${i}px; 
                                }
                            `       
                        )
                    }
                    
                }
            }
        }

        let CSS = Array.from(new Set([...createCSS])).sort().toString()
        let CSSF = CSS.split(',').join(' ')
        style.innerHTML = 
    `   
    /*_____ New CSS change : ${new Date().toDateString()} at ${new Date().toLocaleTimeString()} | user : ${'user?.email'} _____ */ 
        ${CSSF}
    `

        return createCSS.sort()
    
    }

    const generateByClass = ClassCss()




    ///// Generate css directly in style section of element in inspector
    function StyleCss() {

        let elements = document.getElementsByTagName('*')
    
        const allCSS = []
    
        Object.values(elements).map(element=> {
    
            let indicator = 'CG'
            let isCSS_GEN = element.classList
    
            Object.values(isCSS_GEN).map(cssElement=> {
    
                if (cssElement.split('-')[0] === indicator) {
            
                    if (element.style.cssText) {
    
                        allCSS.push(
                            `
                                .${cssElement} {
                                    ${element.style.cssText}
                                }
                            `
                        )
                    }
                } 
            })
        })

        return allCSS
    }

    const generateByStyle = StyleCss()



    return generateByClass

}



var newDiv = document.createElement("button")
newDiv.id = 'css_gen_reload'
newDiv.style= `
position: fixed;
width: 6rem;
height: 3rem;
background: #26de81;
padding: 0.4rem;
top: 0px;
display: none;
align-items: center;
border-bottom: 6px solid #00000017;
justify-content: center;
color: #485460;
margin: 1rem;
font-weight: 500;
`

newDiv.innerHTML = 'Copy CSS'
// ajoute le nœud texte au nouveau div créé
document.body.appendChild(newDiv);


//window.onload = () => GenerateCSS()
let btn = document.querySelector('#css_gen_reload')

btn.onmousedown = () => newDiv.style.borderBottom = 'unset'
btn.onmouseup = () => newDiv.style.borderBottom = '6px solid #00000017'


const getCSS = []


if (btn) btn.onclick = () => {
    GenerateCSS()

    getCSS.push(...GenerateCSS())

    let finalCSS = Array.from(new Set([...getCSS])).toString().split(',').join(' ')


    //console.log( 'new css generated : data:text/plain;charset=utf-11,' + encodeURIComponent(style.innerHTML + finalCSS) );


    let copyText = finalCSS

    navigator.clipboard.writeText(copyText);
}

