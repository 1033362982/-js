function $(selector){
			this.dom=document.querySelectorAll(selector);
		}
		$.prototype.click=function(fun){
			for(i=0;i<this.dom.length;i++){
				this.dom[i].addEventListener("click",fun,false);}
		}
		/*addEventListener只能绑定一个事件，所以加for循环*/