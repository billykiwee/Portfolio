


const varaibleNumber = [
    {
        name: 'w-', 
        propertie : 'width',
        variable: true, 
    },
    {
        name: 'h-'  ,
        propertie : 'height',
        variable: true, 
    },
    {
        name: 'm-t-',
        propertie : 'margin-top',
        variable: true, 
    },
    {
        name: 'm-b-',
        propertie : 'margin-bottom',
        variable: true, 
    },
    {
        name: 'm-l-',
        propertie : 'margin-left',
        variable: true, 
    },
    {
        name: 'm-r-',
        propertie : 'margin-right',
        variable: true, 
    },
    {
        name: 'm-', 
        propertie : 'margin',
        variable: true, 
    },
    {
        name: 'p-t-', 
        propertie : 'padding-top',
        variable: true, 
    },
    {
        name: 'p-b-', 
        propertie : 'padding-bottom',
        variable: true, 
    },
    {
        name: 'p-l-', 
        propertie : 'padding-left',
        variable: true, 
    },
    {
        name: 'p-r-', 
        propertie : 'padding-right',
        variable: true, 
    },
    {
        name: 'p-', 
        propertie : 'padding',
        variable: true, 
    },
    {
        name: 'border-r-', 
        propertie : 'border-radius',
        variable: true, 
    },
    {
        name: 'gap-', 
        propertie : 'gap',
        variable: true, 
    },
    {
        name: 'zi-', 
        propertie : 'z-index',
        variable: true, 
    },
    {
        name: 'f-s-', 
        propertie : 'font-size',
        variable: true, 
    },
    {
        name: 'f-w-', 
        propertie : 'font-weight',
        variable: true, 
    },
]


const variableColor = [
    {
        name: 'bg-', 
        propertie : 'background-color',
        color: true,
        colorValue: '',
        opacity: ''
    },
    {
        name: 'c-', 
        propertie : 'color',
        color: true,
        colorValue: '',
        opacity: ''
    },
    {
        name: 'border-', 
        propertie : 'border-color',
        color: true,
        colorValue: '',
        opacity: ''
    },
]

export const properties = [

    ...varaibleNumber,
    ...variableColor,
    {
        name: 'flex', 
        variable: false, 
        propertie: ['display','align-items', 'position'],
        style : 'display: flex;align-items: center;position: relative;'
    },
    {
        name: 'grid', 
        variable: false, 
        propertie: ['display', 'flex-direction', 'flex-wrap', 'position'],
        style : 'display: flex;flex-direction: column;flex-wrap: nowrap;position: relative;'
    },
    {
        name: 'wrap', 
        variable: false, 
        propertie: 'flex-wrap',
        style : 'flex-wrap: wrap;'
    },
    {
        name: 'justify-c', 
        variable: false, 
        propertie: 'justify-content',
        style : 'justify-content : center;'
    },
    {
        name: 'justify-s-b', 
        variable: false, 
        propertie: 'justify-content',
        style : 'justify-content : space-between;'
    },
    {
        name: 'justify-s-a', 
        variable: false, 
        propertie: 'justify-content',
        style : 'justify-content : space-around;'
    },
    {
        name: 'justify-e', 
        variable: false, 
        propertie: 'justify-content',
        style : 'justify-content : flex-end;'
    },
    {
        name: 'absolute', 
        variable: false, 
        propertie: 'position',
        style : 'position: absolute;'
    },
    {
        name: 'fixed', 
        variable: false, 
        propertie: 'position',
        style : 'position: fixed;'
    },
    {
        name: 'relative', 
        variable: false, 
        propertie: 'position',
        style : 'position: relative;'
    },
   
]  