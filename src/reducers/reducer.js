/*
const intialState = {
    num: 0
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { num: state.num + 1 }
        default:
            return state
    }

}
export default reducer;
*/

const intialState = {
    num: 0,
    data: null,
    error: ""
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, num: state.num + 1 }
        case "FetchData":
            return { ...state, data: action.data }
        case "ERROR":
            return { ...state, error: action.msg }
        default:
            return state
    }
}

export default reducer
