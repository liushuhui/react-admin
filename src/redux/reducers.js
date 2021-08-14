const initState = {
  username: '',
  menuList: [{
    title: '',
    icon: ''
  }]
}

export default (state = initState, action) => {
  const {
    payload,
    type
  } = action;
  switch (type) {
    case 'SET_MENU': {
      return {
        ...state,
        menuList: payload,
      }
    }
    case 'UPDATE_MENU': {
      let stateData;
      if (!payload.data.childId) {
        stateData = state.menuList[payload.index - 1];
        stateData.title = payload.data.title;
        stateData.icon = payload.data.icon;
        stateData.key = payload.data.key;
      } else {
        stateData = state.menuList.map(item => {
          const findData = item.children.find(im => im.childId === payload.data.childId);
          if(findData) {
            findData.title = payload.data.title;
            findData.key = payload.data.key;
            findData.icon = payload.data.icon;
            return findData;
          }       
        })
      }

      return {
        ...state,
        ...stateData
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