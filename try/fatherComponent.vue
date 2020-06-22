<template>
    <child-component  v-bind:items="items">
    </child-component>
</template>
<script>
import childComponent from './childComponent'
export default{
    name: "fatherComponent",
    components:{
        childComponent
    },
    data(){
        return{
            items:[]
        }
    },
};
// <template #footer><p>father footer</p></template>
//         <template v-slot:default="child">{{child.child}}</template>
//         <template v-slot:header="child1">{{child1}}</template>
</script>