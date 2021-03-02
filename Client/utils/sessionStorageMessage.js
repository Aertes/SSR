class SessionStorageMessage{
    /** 获取sessionStorage数据 **/
    getSessionStorage = key => {
        try {
            return JSON.parse(sessionStorage.getItem(key));
        }catch (error){
            console.log('error',error)
        }
    }

    /** 设置sessionStorage **/
    setSessionStorage = (key, params) => {
        try {
            JSON.stringify(sessionStorage.setItem(key, params));
        }catch (error){
            console.log('error',error)
        }
    }

    /** 删除sessionStorage **/
    removeSessionStorage = key => {
        try {
            sessionStorage.removeItem(key);
        }catch (error){
            console.log('error',error)
        }
    }

    /** 清除sessionStorage **/
    clearSessionStorage = () => {
        try {
            sessionStorage.clear();
        }catch (error){
            console.log('error', error)
        }
    }
}

export default new SessionStorageMessage()