'use client'

import './globals.css'
import React from 'react'
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Flex, Breadcrumb, Layout, Menu, theme, ConfigProvider } from 'antd'
const { Header, Content, Sider } = Layout

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`
}))

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: Array.from({ length: 4 }).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`
      }
    })
  }
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <html lang='en'>
      <body>
        <Flex gap='middle' wrap>
          {/* see https://ant.design/components/layout#design-token */}
          <ConfigProvider
            theme={{
              components: {
                Layout: {
                  headerBg: 'fff'
                },
                Menu: {
                  itemBg: 'fff'
                }
              }
            }}
          >
            {/* see https://ant.design/components/layout#layout-demo-top-side-2 */}
            <Layout>
              <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src='https://josudoey.github.io/img/logo.png'
                      className='mr-3 h-6 sm:h-9'
                      alt='Logo'
                    />
                  }
                </div>
                <Menu
                  mode='horizontal'
                  defaultSelectedKeys={['2']}
                  items={items1}
                  style={{ flex: 1, minWidth: 0 }}
                />
              </Header>
              <Layout>
                <Sider width={200} style={{ background: colorBgContainer }}>
                  <Menu
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    items={items2}
                  />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                  <Breadcrumb
                    items={[
                      { title: 'Home' },
                      { title: 'List' },
                      { title: 'App' }
                    ]}
                    style={{ margin: '16px 0' }}
                  />
                  <Content
                    style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 280,
                      background: colorBgContainer,
                      borderRadius: borderRadiusLG
                    }}
                  >
                    {children}
                  </Content>
                </Layout>
              </Layout>
            </Layout>
          </ConfigProvider>
        </Flex>
      </body>
    </html>
  )
}
