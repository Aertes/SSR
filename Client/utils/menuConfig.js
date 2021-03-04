import {
    HomeOutlined,
    AreaChartOutlined,
    UserOutlined,
} from '@ant-design/icons';

class MenuConfig {
    constructor() {
        this.menuList = [
            {pathname: '/home', active: true, key: 'home', name: 'Home', icon: <HomeOutlined />, disabled: false},
            {pathname: '/dashboard', active: true, key: 'dashboard', name: 'Dashboard', icon: <AreaChartOutlined/>, disabled: false},
            {pathname: '/user', active: true, key: 'user', name: 'User', icon: <UserOutlined />, disabled: false},
        ]
    }
}
export default new MenuConfig()