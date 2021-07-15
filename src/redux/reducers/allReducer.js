const initialState = {
    fn: "",
    email: "",
    pass: "",
  };
  
  const allDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ALL_DATA":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default allDataReducer;
  