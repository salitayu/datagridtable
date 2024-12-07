'use client'

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, Table } from 'antd'
import { createElement } from 'react'
const { Header, Content, Sider } = Layout

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const dataSource = [
    {
        key: '1',
        name: 'Kayla',
        age: 70,
        address: '9 Walnut Street'
    },
    {
        key: '2',
        name: 'Steven',
        age: 77,
        address: '523 Route 1'
    },
    {
        key: '3',
        name: 'Anna',
        age: 65,
        address: '40 Spruce Street'
    },
    {
        key: '4',
        name: 'Courtney',
        age: 45,
        address: '58452 Holly Drive'
    },
    {
        key: '5',
        name: 'Jason',
        age: 37,
        address: '3580 Lake Street'
    },
    {
        key: '6',
        name: 'Amanda',
        age: 51,
        address: '37 Delaware Avenue'
    },
    {
        key: '7',
        name: 'William',
        age: '21',
        address: '50 Pleasant Street'
    },
    {
        key: '8',
        name: 'Tiffany',
        age: 38,
        address: '26 3rd Street'
    }
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

export default function Home() {
  return (
    <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
        </Header>
    <Layout>
        <Sider width={200}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
            />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
            style={{ margin: '16px 0' }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
          <Table dataSource={dataSource} columns={columns}/>
          </Content>
        </Layout>
        </Layout>
  </Layout>
  );
}
