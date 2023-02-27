export const initialState = {
    lign: []
}

const reducer = (state, action) => {

    switch(action.type) {

        case 'set_Lign' : return {
            ...state,
            lign: action.lign
        }


        default : return state
    }
}

export default reducer