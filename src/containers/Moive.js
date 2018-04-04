import React, {Component} from "react";
import {getMoiveList} from "../actions/mall";
import Loading from '../components/Loading';
import {Row,Col} from 'antd'
import {connect} from "react-redux";

class Moive extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        const {getMoiveList} = this.props;
        getMoiveList();
    }
    toDetail(item){
        this.props.history.push('/subject/id/'+item.id);
    }
    render(){
        let {data} = this.props;
        return(
            <div className="test-wrap">
                <Row gutter={12}>
                    {data && data.subjects?data.subjects.map(function (item,i) {
                        return(
                            <Col onClick={this.toDetail.bind(this,item)} key={i} span={4}><img style={{height:'300px'}} src={item.images.small} alt=""/><div>{item.title}</div></Col>
                        )
                    }.bind(this)):<Loading/>}
                </Row>
            </div>
        )

    }
}
const mapStateToProps = (state,props) => {
    console.log(state);
    return{
        data:state.moiveList.data
    }
};
export default connect(
    mapStateToProps,
    {
        getMoiveList
    }
)(Moive)