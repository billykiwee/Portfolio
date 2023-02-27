export const initialState = {
    lign: []
}

const reducer = (state, action) => {

    switch(action.type) {

        case 'add_' : return {
            ...state,
            lign: action.lign
        }


        default : return state
    }
}

export default reducer