// 只是axios的插件，用来做拦截
import {Message} from "element-ui";

// axios是nuxt环境的大对象
export default function({$axios, redirect}){
    // onError拦截都有错误的请求
    $axios.onError(err => {
        const {statusCode, message} = err.response.data;
        
        // 还未使用
        // if(statusCode === 401 || statusCode === 403){
        //     Message.warning({message: "请先登录"});
        //     redirect("/user/login");
        // }
        // 参数错误时会触发400的错误
        if(statusCode === 400){
            Message.warning({message});
        }
    })
}