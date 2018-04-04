
import actionTypes from '../constants/actionType';
var axios = require('axios');


export  function getMoiveList(){
    return dispatch => {
        dispatch({type:actionTypes.GET_MOIVE_LIST_START,data:{},loading:true,hasMore:true});
        axios.get("/api/v2/get/moive/list").then(function (res) {
            dispatch({type:actionTypes.GET_MOIVE_LIST,data:res,loading:false,hasMore:true})
        });
    }
}
export  function getMoiveSubject(id){
    return dispatch => {
        dispatch({type:actionTypes.GET_MOIVE_SUBJECT_LOADING,data:{},loading:true,hasMore:true});
        axios.get("/api/v2/get/moive/subject?id="+id).then(function (res) {
            dispatch({type:actionTypes.GET_MOIVE_SUBJECT,data:res,loading:false,hasMore:true})
        });
    }
}
export  function getMenuList(){
    return dispatch => {
        dispatch({type:actionTypes.GET_MENULIST_LOADING,data:{},loading:true,hasMore:true});
        axios.get("/api/v2/get/menu/list").then(function (res) {
            dispatch({type:actionTypes.GET_MENULIST,data:res,loading:false,hasMore:true})
        });
    }
}