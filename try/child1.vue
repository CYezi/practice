<template>
    <div class="child1">
        <p>子组件</p>
        <p>子组件内容:{{pChild1}}</p>
        <p>没被继承的内容$attrs:{{$attrs}}</p>
        <child2 :="$attrs"  v-on="$listeners"></child2>
    </div>
</template>
<script>
import child2 from './child2'
export default {
    props:["pChild1"],
    data(){
        return{}
    },
    inheritAttrs:false,
    components:{child2},
    mounted() {
        this.$emit('test1')
    },
}
</script>