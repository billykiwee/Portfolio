
export default function formatCurrency(data :number, currency?:string, digit ?:number): string {
    
    return data.toLocaleString(currency ?? 'fr-FR', { 
        style                : 'currency',
        currency             : 'EUR',
        minimumFractionDigits: digit ?? 2
    })
}
