
const initState = {
  username: '',
  menuList: []
}

export default (state = initState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'SET_MENU': {
      return {
        ...state,
        menuList: payload
      }
    }
    case 'SET_USERNAME': {
      return {
        ...state,
        username: payload
      }
    }
    default: 
      return state;
  }
}