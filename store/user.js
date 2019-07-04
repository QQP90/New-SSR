// 在nuxt不需要创建store的实例，每一个js模块nuxt会自动创建实例
// 只需要关注state，mutations，actions
// export在nuxt的固定写法
//localstorage本地存储要调用第三方库，会自动判断是浏览器还是服务器
export const state =()=> {
    return {
        userInfo:{
            token:"",
            user:{}
        }
      
    }
}
// 同步修改mutations方法
export const mutations = {
    // 设置用户的数据
    setUserInfo(state,data){
        state.userInfo=data
    },
    // 退出，清空本地数据
    clearUserInfo(state){
        state.userInfo={
            token:"",
            user:{}
        }
    }   
}
// actions是异步发送请求数据
// {commit}在store中解构commit
export const actions = {
    login({commit},data){
        // 发送请求
       return this.$axios({
            url:"/accounts/login",
            method:"POST",
            data
        }).then(res=>{
            console.log(res.data);
            commit("setUserInfo", res.data);
            Promise.resolve()
        })
    },
    // 用户注册
    register({commit},data){
        return this.$axios({
            url:"/accounts/register",
            method:"POST",
            data
        }).then(res=>{
            return res
        })
    }
}



// export const actions = {
//     login({commit},data){
//         console.log(data);
//         // 发送请求
//         return this.$axios({
//                 url:"/accounts/login",
//                 method:"POST",
//                 data
//         }).then(res=>{
//             // console.log(res);
//             commit("setUserInfo",res.data)
//             Promise.resolve()
//         })
       
//     }
// }
