import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getMoiveSubject} from '../actions/mall';
import Loading from '../components/Loading'

class Subject extends Component{
    constructor(props){
        super(props);
        console.log(111);
    }
    render(){
        let {data} = this.props;
        return(
            <div>
                {
                    data && data.title?data.code == 500?<div>{data.data.msg}</div>:<div>{data.title}</div>:<Loading/>
                }
            </div>
        )
    }
    componentWillMount(){
        const {getMoiveSubject,id} = this.props;
        id != '' && id != undefined && getMoiveSubject(id);

    }

}
const mapStateTopProps = (state,props) => {
    console.log(state);
    return{
        id:props.match.params.id,
        data:state.moiveSubject.data
    }
};
export default connect(
    mapStateTopProps,
    {
        getMoiveSubject
    }
)(Subject)