export default (state = {
    contacts: []
}, action) => {
    switch (action.type) {
        case "GET_COTACTS":
            return {
                ...state,
                contacts: action.contacts
            }
        default:
            return state
    }
}