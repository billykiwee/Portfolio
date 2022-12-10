
var style = document.createElement('style')
document.getElementsByTagName('html')[0].appendChild(style) 


export default function GenerateCSS() {

    const properties = [
        {name: 'w-'  , propertie : 'width'},
        {name: 'h-'  , propertie : 'height'},
        {name: 'm-t-', propertie : 'margin-top'},
        {name: 'm-b-', propertie : 'margin-bottom'},
        {name: 'm-l-', propertie : 'margin-left'},
        {name: 'm-r-', propertie : 'margin-right'},
        {name: 'm-', propertie : 'margin'},
        {name: 'p-t-', propertie : 'padding-top'},
        {name: 'p-b-', propertie : 'padding-bottom'},
        {name: 'p-l-', propertie : 'padding-left'},
        {name: 'p-r-', propertie : 'padding-right'},
        {name: 'p-', propertie : 'padding'},
        
        {name: 'border-r-', propertie : 'border-radius'},
        {name: 'gap-', propertie : 'gap'},
        {name: 'zi-', propertie : 'z-index'},

        {name: 'f-s-', propertie : 'font-size'},
        {name: 'f-w-', propertie : 'font-weight'},
    ]  

 /*    let getAllClass = []
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
        for (let i = 0; i < 1000; i++) {

            if (allClass.includes(`${properties[v].name}${i}`)) {

                createCSS.push(`
.${properties[v].name}${i} { 
    ${properties[v].propertie} : ${i}px; 
}
                `)
            }
            
        }
    } */


    let CSS = '' /* Array.from(new Set([...createCSS])).sort().toString() */
    
    let CSSF = CSS.split(',').join(' ')
    console.log(`New CSS genered ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`);
    style.innerHTML = 
`   
/* _____New CSS change_____ 
    ${new Date().toDateString()} at ${new Date().toLocaleTimeString()}
    user : ${'user?.email'}
*/ 
    ${CSSF}
`


// User doit entrer id avec cssgen pour que le programme détecte l'id et puisse accoller le cssText

let elements = document.getElementsByTagName('*')


let result = Object.values(elements).map(element=> {
    
    let r = ''

    let indicator = 'CSS_GEN'
    let isCSS_GEN = element.classList


    Object.values(isCSS_GEN).map(cssElement=> {

        if (cssElement.split('-')[0] === indicator) {
     
            if (element.style.cssText) {
         
                r = `.${cssElement} : {${element.style.cssText}}`
            }
        } 
    })
    return r
})

    return result

}



var newDiv = document.createElement("button");

newDiv.id = 'css_gen_reload'
newDiv.style= `
position: fixed;
width: 6rem;
height: 3rem;
background: #26de81;
padding: 0.4rem;
top: 0px;
display: flex;
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



window.onload = () => GenerateCSS()
let btn = document.querySelector('#css_gen_reload')

btn.onmousedown = () => {
    newDiv.style.borderBottom = 'unset'
}
btn.onmouseup = () => {
    newDiv.style.borderBottom = '6px solid #00000017'
}

if (btn) btn.onclick = () => {
    GenerateCSS()

    let copyText= GenerateCSS()

    navigator.clipboard.writeText(copyText);
}


