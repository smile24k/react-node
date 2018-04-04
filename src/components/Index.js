import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getMoiveList,getMenuList} from "../actions/mall";
import { Route, BrowserRouter, Redirect, Link} from 'react-router-dom';
require('../../less/index.less');
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Subject from "./Subject";
import Moive from "../containers/Moive";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            headerText:'正在热映'
        };
        this.getList = this.getList.bind(this);
    }

    onCollapse(collapsed){
        console.log(collapsed);
        this.setState({ collapsed });
    }
    getList(type){
        console.log(type);
        const {getMoiveList} = this.props;
        if(type == 1){
            getMoiveList();
        }else if(type == 2){

        }else{

        }
    }
    selectOption(obj){
        console.log(obj);
        this.setState({
            headerText:obj.key.split(' ')[0]
        })
    }
    render() {
        let {menuList} = this.props;
        console.log(menuList);
        return (
            <Layout  style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse.bind(this)}
                >
                    <div className="logo" />
                    <Menu theme="dark" onSelect={this.selectOption.bind(this)} defaultSelectedKeys={['1']} mode="inline">
                        {menuList.map((item,index) => {
                            return(
                                item.isHas==1 && item.isbutton!=1 &&
                                <SubMenu
                                    key={item.url+' '+index}
                                    title={<span><Icon type="user" /><span>{item.authName}</span></span>}
                                >
                                    {item.subnode && item.subnode.map((list,j) =>{
                                        return(
                                            list.isHas==1 &&
                                            <Menu.Item key={list.url+' '+j}>{list.authName}</Menu.Item>
                                        )
                                    })}

                                </SubMenu>

                            )
                        })}
                    </Menu>
                </Sider>
                <Layout>
                    <Header  style={{ background: '#fff', padding: 0,textAlign:'center' }}>{this.state.headerText}</Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>{this.state.headerText}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Route path='/home' component={Moive}/>
                            <Route path='/subject/id/:id' component={Subject}/>

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

class Index extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let {getMenuList} = this.props;
        getMenuList();
    }
    render(){
        let {menuList} = this.props;
        return(
            <div>
                { menuList.length > 0 &&
                    <SiderDemo {...this.props}/>
                }

            </div>
        )
    }
}
const mapStateToProps = (state,props) => {
  return{
      data:state.moiveList.data,
      menuList:state.menuList
  };
};
const mapDispatchToProps = {
        getMoiveList,
        getMenuList
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
