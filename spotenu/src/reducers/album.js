const initialState = {
  album: {}
}

const album = (state= initialState, action) => {

  switch(action.type) {
    case "SET_ALBUM":
      return {
        ...state,
        album: action.payload.album
      }
    default:
      return state
  }
}

export default album