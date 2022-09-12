import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.variable.min.css';
import routes from './routes';

function App() {
  ConfigProvider.config({
    theme: {
      primaryColor: '#0960bd',
    },
  });
  const element = useRoutes(routes);
  return <ConfigProvider locale={zhCN}>{element}</ConfigProvider>;
}

export default App;
