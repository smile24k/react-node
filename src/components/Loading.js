import React,{Component} from 'react';
require("../../less/loading.less");

export default class Loading extends Component {
    render() {
        return (
            <div className="circle-wrapper fade-in">
                <div className="circle1 circle"></div>
                <div className="circle2 circle"></div>
                <div className="circle3 circle"></div>
                <div className="circle4 circle"></div>
                <div className="circle5 circle"></div>
                <div className="circle6 circle"></div>
                <div className="circle7 circle"></div>
                <div className="circle8 circle"></div>
                <div className="circle9 circle"></div>
                <div className="circle10 circle"></div>
                <div className="circle11 circle"></div>
                <div className="circle12 circle"></div>
            </div>
        );
    }
}