const initialState = {
  music: {}
}

const music = (state= initialState, action) => {

  switch(action.type) {
    case "SET_MUSIC":
      return {
        ...state,
        music: action.payload.music
      }
    default:
      return state
  }
}

export default music