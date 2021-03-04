import React, {useState} from 'react';
import {Layout, Menu, Button} from 'antd/lib/index';
import {MenuFoldOutlined, MenuUnfoldOutlined, HeartOutlined, LoginOutlined} from '@ant-design/icons';
import styles from './layout.module.css';
import {menuConfig, ReaderRoute, localStorageMessage} from "../../utils/index";
import { useRouter } from "next/router";
const {Header, Content, Footer, Sider} = Layout;

export default function Layouts() {
    const [collapsed, setCollapsed] = useState(false);

    const [menuKey, setMenuKey] = useState('home');

    const router = useRouter()

    function handleMenu({item, key, keyPath, domEvent}) {
        setMenuKey(key);
    }

    function handleLoginOut() {
        localStorageMessage.clearLocalStorage();
        router.push('/login', '/', {query: true, locale: false});
    }

    function readerMenuItem() {
        return menuConfig.menuList.map((item, index) => <Menu.Item key={item.key} icon={item.icon}>{item.name}</Menu.Item>)
    }

    function userInfo() {
        if (localStorageMessage.getLocalStorage('USER_INFO')){
            return localStorageMessage.getLocalStorage('USER_INFO').username;
        }
    }

    return (
        <Layout className={styles.site_layout}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className={styles.logo}/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[menuKey]} onClick={handleMenu}>
                    {readerMenuItem()}
                </Menu>
            </Sider>
            <Layout>
                <Header className={styles.site_layout_background} style={{padding: 0}}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: `${styles.trigger}`,
                        onClick: () => setCollapsed((value) => !value),
                    })}
                    <div className={styles.login_wrap}>
                        <div className={styles.userInfo}>
                            <i className={styles.userInfoIcon}></i>
                            { userInfo() }
                        </div>
                        <Button onClick={handleLoginOut} type="primary" icon={<LoginOutlined />}>LoginOut</Button>
                    </div>
                </Header>
                <Content className={styles.site_layout_main}>
                    <ReaderRoute menuKey={menuKey}/>
                </Content>
                <Footer className={styles.site_layout_footer}>
                    <HeartOutlined className={styles.heart} />
                    <span className={styles.email}>mrxu1010@outlook.com</span>
                </Footer>
            </Layout>
        </Layout>
    )
}