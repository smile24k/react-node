import {combineReducers} from 'redux';
function moiveList(state={data:{},loading:true}, action) {
    switch (action.type){
        case "GET_MOIVE_LIST_START":
            return state;
            break;
        case "GET_MOIVE_LIST":
            return action.data;
            break;
        default:
            return state;
    }
}
function moiveSubject(state={data:{},loading:true}, action) {
    switch (action.type){
        case "GET_MOIVE_SUBJECT_LOADING":
            return state;
            break;
        case "GET_MOIVE_SUBJECT":
            return action.data;
            break;
        default:
            return state;
    }
}
function menuList(state={data:[],loading:true}, action) {
    switch (action.type){
        case "GET_MENULIST_LOADING":
            return state.data;
            break;
        case "GET_MENULIST":
            return action.data.data.result[0].as.subnode || [];
            break;
        default:
            return state;
    }
}

var reducer = combineReducers({
    moiveList,
    moiveSubject,
    menuList
});
export default reducer;