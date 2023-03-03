export default function UniqueID(lenght: number, name?: string) : string {

    let UID = ''
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  
    const lenghtNum = lenght ?? 6

    for (var i = 0; i < lenghtNum; i++) {
        UID += char.charAt(Math.floor(Math.random() * char.length))
    }

    return UID 
}

