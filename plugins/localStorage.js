
// 导入插件
import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
    window.onNuxtReady(() => {
        createPersistedState({
            // 读取本地存储的数据到store
            // key保存到本地store仓库
            key: "store", 
        })(store)
    })
}