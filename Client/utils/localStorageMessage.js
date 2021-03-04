class LocalStorageMessage{
    /** 获取localstorage数据 **/
    getLocalStorage = key => {
        try {
            return localStorage && JSON.parse(localStorage.getItem(key));
        }catch (error){
            console.log('error',error)
        }
    }

    /** 设置localstorage数据 **/
    setLocalStorage = (key, params) => {
        try {
            localStorage && localStorage.setItem(key, JSON.stringify(params));
        }catch (error){
            console.log('error',error)
        }
    }

    /** 删除localstorage **/
    removeLocalStorage = key => {
        try {
            localStorage && localStorage.removeItem(key);
        }catch (error){
            console.log('error',error)
        }
    }

    /** 清除localstorage **/
    clearLocalStorage = () => {
        try {
            localStorage && localStorage.clear();
        }catch (error){
            console.log('error',error)
        }
    }

}

export default new LocalStorageMessage()