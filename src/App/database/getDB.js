import { db } from "./firebase"

export default function GetDB(where) {

    const data = db.collection(where).get()
    .then(snapshot => {
        return snapshot.docs.map(doc => doc.data())
    })

    return data
}


/* 
const {ShopID} = useStateValue()

const [AllShop, setAllShop] = useState([])

useEffect(()=> {

    db.collection('shop').onSnapshot(snapshot => {
        setAllShop(snapshot.docs.map(doc => doc.data()))
    })

}, [])

function getShop() {
    for (const v in AllShop) {
        if (AllShop[v].ShopID === ShopID) return AllShop[v]
    }
}

const Shop = getShop() */

export function getShopInfo(shop, getUser, info) {

    for (const v in shop) {
        if (shop[v].email === getUser) {
            if (info === 'photo') return shop[v].photo
            if (info === 'email') return shop[v].email
            if (info === 'name') return shop[v].name
            if (info === 'id') return shop[v].id
        }
    }
}  

export function GetUserInfo(user, getUser, info) {

    for (const v in user) {
        if (user[v].email === getUser) {
            if (info === 'photo') return user[v].photos[0]
            if (info === 'email') return user[v].email
            if (info === 'name') return user[v].name
            if (info === 'id') return user[v].id
        }
    }
}  
