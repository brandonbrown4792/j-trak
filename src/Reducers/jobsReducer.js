export default (state = {
    jobs: []
}, action) => {
    switch (action.type) {
        case "GET_JOBS":
            return {
                ...state,
                jobs: action.jobs
            }
        default:
            return state
    }
}