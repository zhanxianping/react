import React from "react";
import {Link, Outlet} from "react-router-dom";
import {Button} from "antd";

export default class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Link to={`/interface?a=1&b=2`}><Button>去接口页</Button></Link>
                <h1>这是Home页</h1>
                <Outlet/>
            </>
        )
    }
}