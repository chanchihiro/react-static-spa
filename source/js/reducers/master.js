import types from "constants/master"

const initialState = {
  // 練習のデータ
  data: {
    text: '練習用の文言です'
  }
}

const master = (state = initialState, action) => {
  switch (action.type) {
    case types.PRACTICE:
      return state
    default:
      return state
  }
}
export default master
