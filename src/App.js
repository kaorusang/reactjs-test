import React,{Component} from "react";
import img from "./asset/logo.png";

const Home = ()=> <div>Home123</div>

export default class App extends Component{
    //测试
    constructor(...args){
        super(...args);
        this.state={count:100}
    }
    plus(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return <div>
            <Home />
            {this.state.count}
            <input onClick={this.plus.bind(this)} type="button" value="按钮"/>
            <img src={img} />
        </div>
    }
}