<template>
  <div id="app">
    <child1 
    :p-child1="child1"
    :p-child2="child2"
    v-on:test1="onTest1"
    @click="onTest2"
    ></child1>
  </div>
</template>
<script>
import child1 from './child1'
export default {
  data(){
    return{
      child1:"子组件继承的内容",
      child2:"子组件的子组件继承的内容"
    }
  },
  components:{
    child1
  },
  methods: {
    onTest1:function(){
      console.log("onTest1")
    },
    onTest2(){
      console.log("onTest2")
    }
  },
}
</script>