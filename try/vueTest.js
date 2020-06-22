Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
    // 聚焦元素
    el.focus()
    }
})

var app1=new Vue({
    el:"#app-1",
    data:{
        message:'',
        message1:""
    }
})
new Vue({
    el:"#app-2",
    data:{
        checked:[]
    }
})
new Vue({
    el:"#app-3",
    data:{
        checkedNames: []
    }
})
new Vue({
    el: '#example-4',
    data: {
      picked: ''
    }
})
new Vue({
    el:"#app-5",
    data:{
        selected:''
    }
})
new Vue({
    el: '#example-6',
    data: {
      selected: []
    }
  })


new Vue({
    el:"#app-7",
    data:
        function(){
            return {  
                items:[
                    'A1',
                    'B1'
                ]
            }
        }
})  
new Vue({
    el:"#app-8",
    data:function(){
            return{
                items:
                [
                    {message:"E"},
                    {message:"F"}
                ]
            }
        }
})  

Vue.component("vuebotton", {
    props:["add"],
    template:"<button v-on:click=\"add\"> VueBotton </button>"
})
new Vue({
    el:"#app-9",
    data:function(){
        return {
            count:0
        }
    },
    methods:{
        add:function(){
            return this.count++
        }
    }
})

Vue.component("mulselect", {
    // props:{
    //     item:Object,
    //     selected:String
    // },
    props:["item","selected"],
    template:`<div>
                <span>
                    <input type="checkbox" :id= "item.message" :value="item.message" v-model="selected"></input>
                    <label :for="item.message">{{item.message}}</label>
                </span>    
                <button v-on:click="$emit('change')">change</button>    
                <p>{{selected}}</p>
            </div> `
})
var app10= new Vue({
    el:"#app-10",
    data:{
        selected:[],
        items:[
            {message:"A2"},
            {message:"B2"}
        ]
    },
    methods:{
        change:function(){
            this.selected!="A2"? this.selected=["A2"]: this.selected=["B2"];
        }
    }
})

var mulSelect={
    props:["item","selected"],
    template:`<div>
                <span>
                    <input type="checkbox" :id= "item.message" :value="item.message" v-model="selected"></input>
                    <label :for="item.message">{{item.message}}</label>
                </span>    
            </div> `
}
new Vue({
    el:"#app-11",
    data:{
        selected:[],
        items:[
            {message:"A2"},
            {message:"B2"}
        ]
    },
    methods:{
        change:function(){
            this.selected!="A2"? this.selected=["A2"]: this.selected=["B2"];
        }
    },
    components:{
        "mul-select":mulSelect
    }  
})

// Vue.component('blog-post', {
//     props: ['post'],
//     template: `
//       <div class="blog-post">
//         <h3>{{ post }}</h3>
//         <button v-on:click="$emit('enlarge-text')">
//           Enlarge text
//         </button>
//         <div v-html="post.content"></div>
//       </div>
//     `
//   })

var blogPost={
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.text }}</h3>
        <button v-on:click="$emit('enlarge-text')">
          Enlarge text
        </button>
        <div v-html="post.content"></div>
      </div>
    `
}

new Vue({
    el: '#blog-posts-events-demo',
    data: {
      posts: [
            {text:'titleONe',content:"contentOne"},
            {text:'titleTwo',content:"contentTwo"}],
      postFontSize: 1
    },
    methods:{
        enlarge:function(){
            this.postFontSize += 0.1
        }
    },
    components:{
        "blog-post":blogPost
    }
  })

var child={
    template:"<button @click='add2'>我是局部组件:{{m2}}</button>",
    data:function(){
        return {m2:1}
    },
    methods:{
        add2:function(){
            this.m2++
        }
    }
};
new Vue({
    el: "#app1",
    components:{
        "child-component":child
    }
})
Vue.component('blog-post', {
    // 在 JavaScript 中是 camelCase 的
    props: ['postTitle'],
    template: '<h3>{{ postTitle }}</h3>'
  })
new Vue({
    el:"#app-12"
})

Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    template: `
      <label>
        {{ label }}{{$attrs}}
        <input
          v-bind="$attrs"
          v-bind:value="value"
          v-on:input="$emit('input', $event.target.value)"
        >
      </label>
    `
  })

new Vue({
    el:"#app-13",
    data:{
        //username:"test",
        label:"label",
        value:"value"
    }
})

let vm = new Vue({
    inheritAttrs:true,
    el: '#app',
    data: {
      msg: '100',
      other:"other"
    },
    components: {
      'ComponentB': {
        props:['msg'],
        template: `<div>B{{$attrs}}{{msg}}</div>`,
      },
      
    }
  })

Vue.component("my-component", {
    template:` <div>
                <button v-on:click="$emit('fun')">button</button>
                <button >button</button>
                <p>button</p>
            </div> 
    `
})
new Vue({
    el:"#app-14",
    methods:{
        outClick(){
            console.log("click")
        }
    }
})

Vue.component("tab-one",{
    template:`
    <div>
        <input value="tab-one"></input>
    </div>
    `
})
Vue.component("tab-two",{
    template:`
    <div>
        <input value="tab-two"></input>
    </div>
    `
})
Vue.component("tab-three",{
    template:`
    <div>
        <input value="tab-three"></input>
    </div>
    `
})
new Vue({
    el:"#dynamic",
    data:{
        currentTab:"one",
        tabs:["one","two","three"]
    },
    computed: {
        currentTabComponent:function(){
            return "tab-"+this.currentTab
        }
    },
})
Vue.component("tab-home", {
    template: "<div>Home component</div>"
  });
  Vue.component("tab-posts", {
    template: "<div>Posts component</div>"
  });
  Vue.component("tab-archive", {
    template: "<div>Archive component</div>"
  });

new Vue({
    el: "#dynamic-component-demo",
    data: {
    currentTab: "Home",
    tabs: ["Home", "Posts", "Archive"]
    },
    computed: {
    currentTabComponent: function() {
        return "tab-" + this.currentTab.toLowerCase();
    }
    }
});
new Vue({
    el: '#example-1',
    data: {
    show: true
    },
    methods:{
        display:function(){
            this.show=!this.show;
            setTimeout(()=>this.show=!this.show,750);
        }
    }
})
new Vue({
    el: '#transition-components-demo',
    data: {
      view: 'v-a'
    },
    components: {
      'v-a': {
        template: '<div>Component A</div>'
      },
      'v-b': {
        template: '<div>Component B</div>'
      }
    }
  })

var getChildrenTextContent = function (children) {
    return children.map(function (node) {
    return node.children
        ? getChildrenTextContent(node.children)
        : node.text
    }).join('')
}

Vue.component('anchored-heading', {
    render: function (createElement) {
    // 创建 kebab-case 风格的 ID
    var headingId = getChildrenTextContent(this.$slots.default)
        .toLowerCase()
        .replace(/\W+/g, '-')
        .replace(/(^-|-$)/g, '')

    return createElement(
        'h' + this.level,
        [
        createElement('a', {
            attrs: {
            name: headingId,
            href: '#' + headingId
            }
        }, this.$slots.default)
        ]
    )
    },
    props: {
    level: {
        type: Number,
        required: true
    }
    }
})
new Vue({
    el:"#app-15",
    data:{
        level:1
    }
})

let app = new Vue({
　　el: "#app-16",
　　data: {
　　　　message: "<span>通过双括号绑定</span>",
　　　　html: "<span>html标签在渲染的时候被解析</span>",
　　　　text: "<span>html标签在渲染的时候被源码输出</span>",
　　}
});

new Vue({
    el:"#app-17",
    data:{
        input:"test"
    },
    computed:{
        result:function(){
            console.log("computed",this.input)
            return this.input
        }
    },
    watch: {
        output:function(){
            console.log("watch",this.input)
        }
    },
})