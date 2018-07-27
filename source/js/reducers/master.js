import types from "constants/master"

const initialState = {

}

const master = (state = initialState, action) => {
  switch (action.type) {
    case types.ON:
      return state
    case types.OFF:
      return initialState
    default:
      return state
  }
}
export default master
