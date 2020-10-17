const setData = (data) => {
    return (dispatch) => {
        // (console.log("hello"))
        dispatch({type:"SET_DATA",data:data})
    }
};
export { setData }