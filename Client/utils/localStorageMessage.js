class LocalStorageMessage{
    /** 获取localstorage数据 **/
    getLocalStorage = key => {
        try {
            return JSON.parse(localStorage.getItem(key));
        }catch (error){
            console.log('error',error)
        }
    }

    /** 设置localstorage数据 **/
    setLocalStorage = (key, params) => {
        try {
            localStorage.setItem(key, JSON.stringify(params));
        }catch (error){
            console.log('error',error)
        }
    }

    /** 删除localstorage **/
    removeLocalStorage = key => {
        try {
            localStorage.removeItem(key);
        }catch (error){
            console.log('error',error)
        }
    }

    /** 清除localstorage **/
    clearLocalStorage = () => {
        try {
            localStorage.clear();
        }catch (error){
            console.log('error',error)
        }
    }

}

export default new LocalStorageMessage()