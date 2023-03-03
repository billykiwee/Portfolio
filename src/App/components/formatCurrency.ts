
export default function formatCurrency(data :number, currency?:string, digit ?:number) {

    const formatC = new Intl.NumberFormat( 

        currency ?? 'fr-FR', { 
            style                : 'currency',
            currency             : 'EUR',
            minimumFractionDigits: digit ?? 2
        }
    ).format(data)

    return formatC
}
