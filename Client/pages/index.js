import Head from 'next/head';
import { useEffect } from 'react'
import { useRouter  } from "next/router";
import { localStorageMessage } from '../utils/index';
export default function Index(context) {
    const router = useRouter();
    useEffect(() => {
        if (localStorageMessage.getLocalStorage('USER_INFO')){
            router.push('/home');
        }else {
            router.push('/login');
        }
    }, [])
    return (
        <div>
            <Head>
                <title>Ares</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
        </div>
    )
}