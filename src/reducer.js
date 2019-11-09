const initialState = {
  text: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        ...state,
        text: action.text
      };
    default:
      return state
  }
}