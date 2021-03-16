import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
// import './public-path';


let vm;
export async function bootstrap() {
    console.log('vue app bootstraped');
}

export async function mount(props) {
    vm = createApp(App).use(router).mount('#app');
}

export async function unmount(props) {
    vm.unmounted()
}