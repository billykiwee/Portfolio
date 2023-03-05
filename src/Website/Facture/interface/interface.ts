export interface ProjectProps {
    ID : string
    projectName: string
    date: Date
}



export interface jsPDFOptions {
    format          : string,
    unit            : any,
}


export interface AddressProps {
    name: string;
    adress: string;
    additionalAdress?: string;
    city: string;
    zipCode: number;
    clientAdress?: boolean
}

export interface LignItem {
    name    : string;
    price   : string;
    qte     : number;
    subTotal: number;
    id      : string;
}

export interface FactureState {
    editablesVisible: boolean
}



export interface TableProps {
    visible : boolean
} 



export interface TableLignProps {
    id: string
    name: string;
    price:  string,
    qte:  number,
    setTotal: (newTotal: number) => void;
}
  
export interface TableLignState {
    name: string;
    price:  string,
    qte:  number,
}

export type Sum = [string, number]


export interface ProjectName {
    project : string
}
export type ProjectNameState = ProjectName