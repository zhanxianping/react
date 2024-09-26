import './App.css';
import router from "@/router/index";
import store from "@/store/index";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {ConfigProvider} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

function App() {
    return (
        <ConfigProvider locale={zhCN}>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </ConfigProvider>
    );
}

export default App;
