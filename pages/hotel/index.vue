<template>
    <div>
        酒店首页
        <input type="button" value="登录" @click="handleLogin">
    </div>
</template>

<script>
export default {
methods:{
    handleLogin(){
        var id=2
        this.$router.push("/hotel/detail/?id="+id)
    }
}
}
</script>

<style>

</style>
