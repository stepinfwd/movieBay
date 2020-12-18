const initialState = [{
  showDetail: [],
  loading: true,
  error: null,
}];
export const showDetailReducer = (state = initialState,action ) => {
  switch (action.type) {
    case "fetch_show_detail":
      return {...state,loading:true};
    case "fetch_show_detail_success":
      return {...state,showDetail:action.payload,loading: false };
    case "fetch_show_detail_failure":
      return {...state,loading:false,error:action.payload};
    default:
      return state;
  }
};
