import './Plantilla.css';
import ProductoList from '../producto/ProductoList';


import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    BarChartOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  const { Header, Sider, Content } = Layout;
  
  const Plantilla = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Usuario',
              },
              {
                key: '2',
                icon: <BarChartOutlined />,
                label: 'Estadisticas',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'Subir Producto',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}

          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <ProductoList />
            
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default Plantilla;