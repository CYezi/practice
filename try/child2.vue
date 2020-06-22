<template>
    <div class="child2">
        <p>子组件的子组件：</p>    
        <p>子组件的子组件内容:{{pChild2}}</p>
        <p @click="test">没被子组件继承的内容$attrs:{{$attrs}}</p>
    </div> 
</template>
<script>
export default {
    props:["pChild2"],
    data(){
        return{};
    },
    inheritAttrs:false ,
    methods: {
        test(){
            this.$emit('click')
        }
    },
}
</script>