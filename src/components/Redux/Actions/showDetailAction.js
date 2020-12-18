import axios from "axios";

const fetchShowdetail=()=>{
return{
    type:"fetch_show_detail",
}
}
const fetchShowdetailSuccess=(data)=>{
    return{
        type:"fetch_show_detail_success",
        payload:data
    }
}
const fetchShowdetailFailure=(error)=>{
    return{
        type:"fetch_show_detail_failure",
        payload:error
    }
}
export const ShowDetailAction=()=>{
    return (dispatch)=>{
        dispatch(fetchShowdetail)
        const url = "http://api.tvmaze.com/shows/1";
        axios.get(url).then((show) => dispatch(fetchShowdetailSuccess(show.data)));

    }

}