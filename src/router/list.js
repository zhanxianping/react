import {Navigate} from 'react-router-dom';
import Home from "@/view/home/index";
import NotFound from "@/layouts/404";
import IndexDetail from "@/view/index/index";
import About from "@/view/about/index";
import Interface from "@/view/interface/index";

// 配置路由映射 （不同的路由对应渲染不同的页面组件）
const router = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "*",
        element: <NotFound/>,
    },
    {
        path: "/interface",
        element: <Interface/>,
    },
    {
        path: "/home",
        element: <Home/>,
        children: [
            {
                // 默认嵌套路由
                index: true,
                element: <IndexDetail />,
            },
            {
                path: "about",
                element: <About />,
            },
        ]
    },
];

export default router;