
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
        
        {name: 'border-r-', propertie : 'border'},
        {name: 'gap-', propertie : 'gap'},
        {name: 'zi-', propertie : 'z-index'},

        {name: 'f-s-', propertie : 'font-size'},
        {name: 'f-w-', propertie : 'font-weight'},
    ]  

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
        for (let i = 0; i < 1000; i++) {
            if (allClass.includes(`${properties[v].name}${i}`)) {

                createCSS.push(`
.${properties[v].name}${i} { 
    ${properties[v].propertie} : ${i}px; 
}
                `)
            }
            
        }
    }

    let CSS = Array.from(new Set([...createCSS])).sort().toString()

    let CSSF = CSS.split(',').join(' ')
    style.innerHTML = 
`   
/* _____New CSS change_____ 
    ${new Date().toDateString()} at ${new Date().toLocaleTimeString()}
    user : ${'user?.email'}
*/ 
    ${CSSF}
`




    return style.innerHTML

}


  // crée un nouvel élément div
  var newDiv = document.createElement("button");

  newDiv.id = 'css_gen_reload'
  newDiv.style= `
  position: fixed;
  width: 3rem;
  height: 3rem;
  background: blue;
  padding: 0.4rem;
  top: 0px;
  display: flex;
  align-items: center;
  box-shadow: 4px 4px #000000;
  border-radius: 8px;
  justify-content: center;
  color: white;
  `
  newDiv.innerHTML = 'CSS'
  // ajoute le nœud texte au nouveau div créé
  document.body.appendChild(newDiv);




window.onload = () => GenerateCSS()
let btn = document.querySelector('#css_gen_reload')

if (btn) btn.onclick = () => {
    GenerateCSS()

    
    let copyText= GenerateCSS()
    navigator.clipboard.writeText(copyText);
}


