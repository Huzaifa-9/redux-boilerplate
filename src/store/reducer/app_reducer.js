const INITIAL_STATE = {
  app_name: 'CHAT_NAME',
  app_data: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        app_data: action.data,
      };
    default:
      return { ...state };
  }
};
