window.onload=function(){

	var dom=null;

	var demo=new Vue({
		el: '#content',

		methods:{

			handleDrop: function(event) {

	        event.preventDefault();
	        //alert(dom.id);
	        event.target.appendChild(document.getElementById(dom.id));
	        dom=null;

	      },

	      handleDrag: function(event) {

	      	 dom = event.currentTarget;
	      },
	       allowDrop:function(event){
	       	
      		event.preventDefault();
      	}

		}
	})

}