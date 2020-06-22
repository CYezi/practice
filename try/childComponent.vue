<template>
    <div class="container">
        <ul>
            <li v-for="(item, index) in childitems" :key="index">
                {{item}}
            </li>    
        </ul>      
    </div>
</template>
<script>
export default {
    name: "childComponent",
    props:["items"],
    data() {
        return{
            childitems:this.items
        }
    },
    mounted() {
        if(this.childitems==false){
            console.log(Boolean(this.childitems));
            this.childitems=['childOne','childTwo','childThree'];
        }
    },
};
// <header>
//             <slot name="header" v-bind:child1="child1"> <p>child header</p></slot>
//         </header>
//         <main>
//             <slot v-bind:child="child">child main</slot>
//         </main>
//         <footer>
//             <slot name="footer"> <p>child footer</p></slot>
//         </footer>
</script>