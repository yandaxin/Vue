window.onload=function(){
// demo data
var data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}

// define the item component
Vue.component('item', {
  template: '#item-template',
  props: {
    model: Object
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle:function(){
      if( this.isFolder ){
        this.open = !this.open;
      }
    },
    changeType: function () {
      if(!this.isFolder){
        Vue.set(this.model,"children",[]);
        this.addChild();
        this.open = true;
      }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    },
    deleteChild:function(){
      var len = this.model.children.length;
      this.model.children.splice(len-1,1);
    },
    changeValue(index,value){
      this.model.children.splice(index,1,{name:value});
    },
    copy(index){                    //复制函数
        var object = {name:'',children:[]};
        object.name = this.model.children[index].name;
        object.children = this.model.children[index].children;
        this.model.children.push(object);
    },
    exchange(i,j){                        //移动函数
        var object = {name:'',children:[]};
        object.name = this.model.children[i].name;
        object.children = this.model.children[i].children;
        this.model.children.splice(i,1);
        this.model.children.splice(j,0,object);
    }
  }
})

// boot up the demo
var demo = new Vue({
  el: '#demo',
  data: {
    treeData: data
  }
})
}