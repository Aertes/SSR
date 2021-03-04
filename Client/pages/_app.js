import '../styles/globals.css';
import 'antd/dist/antd.css';
import '../styles/common.css';
import {SWRConfig} from 'swr';
import { message } from 'antd/lib/index';
function MyApp({Component, pageProps}) {
    return (
        <SWRConfig
            value={{
                refreshInterval: 3000,
                fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
                onError: (error, key) => {
                    if (error.status !== 403 && error.status !== 404) {
                        // We can send the error to Sentry,
                        // or show a notification UI.
                        message.error(error.message);
                    }
                }
            }}
        >
            <Component {...pageProps} />
        </SWRConfig>
    )
}

export default MyApp
