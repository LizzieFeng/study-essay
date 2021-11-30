// document.write('search webpack'); // 测试双入口打包

import React from "react";
import  ReactDOM  from "react-dom";
import './search.css';
import './search.less';
import icon from './img/icon.jpeg';
import '../../common/index';
//  定义一个react组件
class Search extends React.Component {
    render() {
        debugger
        return <div className="search-text search-border">
            Search  Text --watch -- <img src={icon}></img>
        </div>;
    }
}

ReactDOM.render(
    <Search></Search>,
    document.getElementById('root')
);