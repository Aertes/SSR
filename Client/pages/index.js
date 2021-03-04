import Head from 'next/head';
import { useEffect } from 'react';
import { Layouts } from '../components/index';
import {localStorageMessage} from "../utils";
import { useRouter } from "next/router";

export default function Index(context) {
    const route = useRouter();
    useEffect(() => {
        if (localStorageMessage.getLocalStorage('USER_INFO')){
            route.push('/');
        }else {
            route.push('/login');
        }
    }, [])
    return (
        <>
            <Head>
                <title>Ares</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            { localStorageMessage.getLocalStorage('USER_INFO')? <Layouts/> : null }
        </>
    )
}