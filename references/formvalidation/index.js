window.onload=function(){

Vue.component('item', {
  template:'#item-template',

  props:{
    show1:Boolean,
    show2:Boolean,
    show3:Boolean
  },

  methods:{
    isNum(num){
        // this.show1 = !show;
        var reg = new RegExp("^[0-9]*$");
        if(!reg.test(num)){
          this.show1 = true;
        }else{
          this.show1 = false;
        }
    },
    isTel(tel){
      if(tel){
        if(!(/^1[34578]\d{9}$/.test(tel))){
            this.show2 = true;
        }else{
            this.show2 = false;
        }     
      }else{
        this.show2 = false;
      }
    },
    isEmail(email){
      if(email){
        var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/ ;
        if(re.test(email)){
            this.show3 = false;
        }else{
            this.show3 = true;
        }        
      }else{
        this.show3 = false;
      }

    }

  }
})

var demo = new Vue({
  el: '#demo',
  data: {
    showN:false,
    showT:false,
    showE:false
  }
})
}