<template>
    <div>
        <div v-for="(item,index) in data"
        :key="index" class="item">
        {{item.type}}
            <!-- <digui v-for="(item2,index2) in item.children"
            :key="index2">
            {{item2}}
            </digui> -->
            <digui :data="item.children" v-if="item.children"></digui>
        </div>
    </div>
</template>

<script>
export default {
    name:"digui",
    props:["data"]
}
</script>

<style>
.item{
    padding-left: 20px;
}
</style>
