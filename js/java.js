window.onload=function(){
	function yidong(xianshi,yincang){
		var item=$(xianshi);
		var list=$(yincang);
		for(var i=0;i<item.length;i++){
			
			item[i].index=i;
			item[i].onmouseover=function(){
			//for(var i=0;i<list.length;i++){
			//}
			list[this.index].style.display="block";
		}
		item[i].onmouseout=function(){
			list[this.index].style.display="none";
		}
	}
}
yidong(".s21",".s22");
yidong(".s24",".s25");
yidong(".s31",".s32");
yidong(".qqq",".q0q");

/*--边框效果--*/


var item0=$(".eee");
var list0=$(".e0e");
var xuan=$(".u331")
xuan[0].style.display="block";
list0[0].style.display="block";
for(var i=0;i<item0.length;i++){
	
	item0[i].index=i;
	item0[i].onmouseover=function(){
		for(var i=0;i<item0.length;i++){
			xuan[i].style.display="none";
			list0[i].style.display="none";
			
		}
		xuan[this.index].style.display="block";
		list0[this.index].style.display="block";
	}
}

var uu=$(".ppp");
var ii=$(".p0p");
var oo=$(".x06")
oo[0].style.display="block";
uu[0].style.display="block";
for(var i=0;i<uu.length;i++){
	
	uu[i].index=i;
	uu[i].onmouseover=function(){
		for(var i=0;i<uu.length;i++){
			oo[i].style.display="none";
			ii[i].style.display="none";
			
		}
		oo[this.index].style.display="block";
		ii[this.index].style.display="block";
	}
}



var w0w=$(".w0w");
for(var i=0;i<w0w.length;i++){
	ytborder(w0w[i])
}
function ytborder(w0w){
	var width=parseInt(getStyle(w0w,"width"))+2;
	var height=parseInt(getStyle(w0w,"height"))+2;
	var wrr=[];
	for(var i=0;i<4;i++){
		var w1w=$("<div>");
		w1w.style.cssText="position:absolute;background:#000;"
		w0w.appendChild(w1w);
		wrr.push(w1w)
	}
	wrr[0].style.cssText+="width:0px;height:1px;left:-1px;top:-1px;"
	wrr[1].style.cssText+="width:1px;height:0px;left:-1px;top:-1px;"
	wrr[2].style.cssText+="width:0px;height:1px;right:-1px;bottom:-1px;"
	wrr[3].style.cssText+="width:1px;height:0px;right:-1px;bottom:-1px;"
	w0w.onmouseover=function(){
		animate(wrr[0],{width:width},600);
		animate(wrr[1],{height:height},600);
		animate(wrr[2],{width:width},600);
		animate(wrr[3],{height:height},600);
	}
	w0w.onmouseout=function(){
		animate(wrr[0],{width:0},600);
		animate(wrr[1],{height:0},600);
		animate(wrr[2],{width:0},600);
		animate(wrr[3],{height:0},600);}
	}


	var luns=$("a",$(".lun")[0]);
	var g=$("a",$(".gol")[0]);
	var zhangs=$("li",$(".zhang")[0]);
	var middle=$(".w")[0];
	var lefts=$(".left")[0];
	var rights=$(".right")[0];
	var flag=true;
	luns[0].style.zIndex=1000;
	g[0].style.zIndex=1000;
                      //初始化
                      for(var i=0;i<luns.length;i++){
                      	
                      	if(i==0){continue;}
                      	luns[i].style.opacity=0;
                      	g[i].style.opacity=0;
                      }
                      zhangs[0].className="hot";
						//轮播
						var next=0;
						var now=0;
						var t=setInterval(mave,2000);
						function mave(){
							next++
							if(next==luns.length){next=0};
								//加600的可以省去初始化话
								animate(luns[now],{opacity:0},500);
								animate(luns[next],{opacity:1},500,function(){flag=true});
								animate(g[now],{opacity:0},500);
								animate(g[next],{opacity:1},500,function(){flag=true});
								zhangs[now].className="";
								zhangs[next].className="hot";
								now=next;
							}
			            //移入移出
			            middle.onmouseover=function(){
			            	clearInterval(t)
			            } 
			            middle.onmouseout=function(){
			            	t=setInterval(mave,2000) } 
			               //左右爪子
			               
			               lefts.onclick=function(){
			               	if(flag)
			               		{ mavel();}
			               	flag=false;
			               }
			               rights.onclick=function(){
			               	if(flag){
			               		mave();
			               	}flag=false;
			               	
			               }
			               function mavel(){
			               	next--;
			               	if(next<0)
			               		{next=luns.length-1};
			               	zhangs[now].className="";
			               	zhangs[next].className="hot";
			               	animate(luns[now],{opacity:0});
			               	animate(luns[next],{opacity:1},500,function(){flag=true});
			               	animate(g[now],{opacity:0});
			               	animate(g[next],{opacity:1},500,function(){flag=true});
			               	now=next;
			               }
                            //按钮
                            for(var i=0;i<zhangs.length;i++){
                            	zhangs[i].index=i;
                            	zhangs[i].onclick=function(){
                            		if(now>this.index){ 
                            			animate(luns[now],{opacity:0},500);
                            			animate(luns[this.index],{opacity:1},500);
                            			animate(g[now],{opacity:0},500);
                            			animate(g[this.index],{opacity:1},500);
                            		}else if(now<this.index)
                            		{
                            			
                            			animate(luns[now],{opacity:0},500);
                            			animate(luns[this.index],{opacity
                            				:1},500);
                            			animate(g[now],{opacity:0},500);
                            			animate(g[this.index],{opacity
                            				:1},500);
                            		}
                            		zhangs[now].className="";
                            		zhangs[this.index].className="hot";	
                            		now=this.index;
                            		next=this.index;
                            	}
                            }
                            
                            
                            /*中间轮播*/
                            var pavr=$(".bqzuo")
                            var next1=$(".bqyou")
                            var dbox=$(".lunbq")
                            var box=$(".bq")
                            var qq1=$(".btonz")    
                            var qq2=$(".btonr")
                            for(var i=0; i<pavr.length; i++){
                            	dhlb(pavr[i],next1[i],dbox[i],box[i],qq1[i],qq2[i])
                            }
                            
                            function dhlb(pavr,next1,dbox,box,qq1,qq2){
                            	
                            	box.onmouseover=function(){
                            		animate(pavr,{left:0},200)
                            		animate(next1,{right:0},200)
                            	}
                            	box.onmouseout=function(){
                            		animate(pavr,{left:-30},200)
                            		animate(next1,{right:-30},200)
                            	}
                            	pavr.onmouseover=function(){
                            		pavr.style.backgroundPosition="0 -60px"
                            	}
                            	next1.onmouseover=function(){
                            		next1.style.backgroundPosition="right -60px"
                            	}
                            	pavr.onmouseout=function(){
                            		pavr.style.backgroundPosition="0 0"
                            	}
                            	next1.onmouseout=function(){
                            		next1.style.backgroundPosition="right 0"
                            	}
                            	pavr.onclick=pavrfun
                            	function pavrfun(){
                            		animate(dbox,{left:-390},600)
                            		qq1.style.background="red"
                            		qq2.style.background="black"
                            	}
                            	next1.onclick=nextfun
                            	function nextfun(){
                            		animate(dbox,{left:0},600)
                            		qq1.style.background="black"
                            		qq2.style.background="red"
                            	}
                            	qq1.onclick=function(){
                            		pavrfun()
                            	}
                            	
                            	qq2.onclick=function(){
                            		
                            		nextfun()
                            	}
                            	
                            }                                 /*最左边轮播 */
                            var xui=$(".b1711");
                            var xi=$(".b171");
                            var xus=$(".b1711");
                            var yelefts=$(".leve");
                            var yerights=$(".reve");
                            for(var i=0;i<xi.length;i++){
                            	xiaolunbo(xui[i],xi[i],xus[i],yelefts[i],yerights[i])  } 
                            	
                            	function xiaolunbo (
                            		xui,xi,xus,yelefts,yerights   
                            		) {
                            		function  move(){
                            			animate(xi,{left:-180},600,function(){
                            				var first=getfistChild(xi);
                            				xi.appendChild(first);
                            				xi.style.left="0";
                            				flag=true;
                            			})
                            		}
                            		var flag=true;
                            		yelefts.onclick=function(){
                            			if(flag){
                            				flag=false;
                            				moveL();}
                            				
                            			}
                            			yerights.onclick=function(){
                            				if(flag){
                            					flag=false;
                            					move();}
                            				} 
                            				function moveL(){
                            					var first=getfistChild(xi);
                            					var last=getlastChild(xi);
                            					xi.insertBefore(last,first);
                            					xi.style.left=-180+"px";
                            					animate(xi,{left:0},600,function(){flag=true});
                            				} 
                            			}


                            			
                            			var head=$(".head")[0];
                            			var bann=$(".bann");
                            			var dibu=$(".dibu");
                            			var bannl=$(".ban_lou");
                            			var zuo=$(".zuo")[0];
                            			var li=$("li",zuo);
                            			var zuolan=$(".zuolan")[0];
                            			var Cheight=document.documentElement.clientHeight;
                            			var height=zuo.offsetHeight;
                            			var heights=zuolan.offsetHeight;
                            			var bannll=bannl[0].offsetTop;
                            			zuo.style.display="none"
                            			zuolan.style.display="none"
                            			var now
                            			var flag=true;
                            			var flag1=true;

                            			
                            			window.onscroll=function(){
                            				var obj=document.documentElement.scrollTop;
                            				if(obj>bannll-300){
                            					zuo.style.display="block";
                            					zuolan.style.display="block";
                            					
                            					zuo.style.color="none";
                            				}
                            				if(obj<bannll-300){
                            					zuo.style.display="none";
                            					zuolan.style.display="none";
                            					li.style.opacity=0;
                            				}
                            				for(var i=0;i<bannl.length;i++){
                            					if(obj>bannl[i].offsetTop-200){
                            						for(var j=0;j<bannl.length;j++){
                            							li[j].style.opacity=0;
                            							li[j].style.background="#fff"
                            						}
                            						li[i].style.background="#E5004F";
                            						li[i].style.opacity=1;
                            						li[i].style.color="#FFF";

                            						now=i;
                            					}
                            				}
                            				if(obj>bannll-300){
                            					if(flag){
                            						flag=false;
                            						animate(head,{height:100},600,function(){flag1=true})}
                            					}else{
                            						if(flag1){
                            							flag1=false;
                            							animate(head,{height:0},600,function(){flag=true})}
                            						}
                            						
                            					}
                            					for(var i=0;i<li.length;i++){
                            						li[i].index=i;
                            						console.log(li[i])
                            						li[i].onclick=function(){

                            							/*animate(document.documentElement,{scrollTop:bannl[this.index].offsetTop},600);*/
                            							var obj=document.documentElement.scrollTop?document.documentElement:document.body;
                            							animate(obj,{scrollTop:bannl[this.index].offsetTop},500);

                            						}
                            						li[i].onmouseover=function(){
                            							li[this.index].style.opacity=1;
                            							li[this.index].style.background="#E5004F";
                            						}
                            						li[i].onmouseout=function(){
                            							
                            							if(this.index==now){
                            								return }
                            								li[this.index].style.opacity=0;
                  	    // li[this.index].style.background="rgba(255,255,255,0)" 	 
                  	}
                  }
                  

              }
							   
	   

	  


						