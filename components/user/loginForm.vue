<template>
        <el-form 
        ref="form"
        :rules="rules"
        :model="form"
        class="form"
        >
        <!-- 用户名 -->
            <el-form-item class="form-item"
            prop="username">
                <el-input
                 placeholder="用户名/手机"
                v-model="form.username"
                >
                </el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item class="form-item" 
            prop="password">
                <el-input 
                type="password"
                placeholder="密码"
                v-model="form.password"
                ></el-input>
            </el-form-item>

            <p class="form-text">
                <nuxt-link to="#" >忘记密码</nuxt-link>
            </p>
            <el-button
            type="primary"
            @click="handleLoginSubmit"
            class="submit"
            >登录</el-button>
        </el-form>   
</template>

<script>
export default {
    data(){
        return{
          // 表单数据
              // 表单数据
            form:{
                username: "",   // 登录用户名/手机
                password: ""    // 登录密码
            },
            // 表单规则
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
             }
        }
    },
    // 提交登录
    methods:{
       
          // 按下回车就可以添加
        // handleEnterKey(e){
        //     if(e.nativeEvent.keyCode === 13){ //e.nativeEvent获取原生的事件对像
        //         this.login()
        //     }
        // },
        handleLoginSubmit(){
             this.$refs["form"].validate(valid => {
                // 为ture表示没有错
                if(valid){ 
                    //  掉用$store中的dispatch
                    this.$store.dispatch("user/login",this.form).then(v=>{
                        this.$message.success("登陆成功...")
                        setTimeout(() => {
                            this.$router.push("/")
                        }, 1000);
                    })
                }
            })
        }
    },
    mounted(){
        // this.$store.dispatch("user/login")   
    }
}
</script>

<style scoped lang="less">
    .form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>

