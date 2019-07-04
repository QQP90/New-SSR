<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
            <div class="main">
                <!-- 传值，在Orderform组件中通过事件传递，来给data中的infoData赋值 -->
                <OrderForm 
                
                @setInfoData="setInfoData"
                @setAllPrice="setAllPrice"/>
            </div>

            <!-- 侧边栏 -->
            <OrderAside
            :data="infoData"
            :allPrice="allPrice"/>
        </el-row>
    </div>
</template>

<script>
import OrderForm from "@/components/air/orderForm.vue";
import OrderAside from "@/components/air/orderAside.vue";
export default {
    // 组件
    components:{
        OrderForm,
        OrderAside
    },
    // data
    data(){
        return {
            // 机票信息
            infoData:{
                // 没有保险初始化，页面已加载就找不到insurances，就会出现报错  
                 insurances: [], // 初始化保险数据
                 seat_infos: {}
            },
            allPrice:0
        }
    },
    // 方法
    methods:{
        setInfoData(data){
            this.infoData=data
            // console.log(this.infoData);
        },
        setAllPrice(price){
            this.allPrice = price;
        }
    },
    // 页面加载
    mounted(){
     
    }
}
</script>

<style lang="less" scoped>
    .container{
        width:1000px;
        margin:20px auto;
    }
    
    /*aside*/
    .aside{
        width: 350px;
        height: fit-content;
        border:1px #ddd solid;
    }
</style>    