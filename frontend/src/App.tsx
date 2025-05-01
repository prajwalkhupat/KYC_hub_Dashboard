/*
import { ConfigProvider, Switch, theme, Layout, Space } from 'antd';
import { useState } from 'react';
import Dashboard from './components/Dashboard';

const { Header, Content } = Layout;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: 'transparent', padding: '0 24px', display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: darkMode ? '#fff' : '#000' }}>KYC Hub – Credit Risk Dashboard</h1>
          <Space>
            <Switch checked={darkMode} onChange={setDarkMode} />
            <span style={{ color: darkMode ? '#fff' : '#000' }}>Dark Mode</span>
          </Space>
        </Header>
        <Content style={{ padding: 24 }}>
          <Dashboard />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;

*/

import { ConfigProvider, Switch, theme, Layout, Space, Row, Col, } from 'antd';
import { useState } from 'react'; 
import Dashboard from './components/Dashboard';

const { Header, Content } = Layout;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: 'transparent', padding: '12px 24px' }}>
        <Row gutter={[8, 8]} justify="space-between" align="middle">
          <Col xs={24} sm={16}>
            <h1 style={{ fontSize: 20, margin: 0 }}>KYC Hub – Credit Risk Dashboard</h1>
          </Col>
          <Col xs={24} sm={8} style={{ textAlign: 'right' }}>
            <Space>
              <Switch checked={darkMode} onChange={setDarkMode} />
              <span style={{ fontSize: 14 }}>Dark Mode</span>
            </Space>
          </Col>
        </Row>
      </Header>

        <Content style={{ padding: 24 }}>
          <Dashboard />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
