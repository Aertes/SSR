import { useRouter  } from "next/router";
import style from '../../styles/Login.module.css';
import { Form, Input, Button, message } from 'antd/lib/index';
import { localStorageMessage } from '../../utils/index';
export default function Login() {
    const router = useRouter();
    function onFinish(values){
        message.success('Login Successful');
        const userInfo = {...values}
        localStorageMessage.setLocalStorage('USER_INFO', userInfo);
        router.push('/home');
    }

    function FormLogin(){
        return(
            <Form
                onFinish={onFinish}
            >
                <h1 className={style.login_title}>用户登录</h1>
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input.Password placeholder="请输入密码" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        )
    }

    return(
        <div className={style.login_main}>
            <div className={style.login_container}>
                <FormLogin/>
            </div>
        </div>
    )
}
