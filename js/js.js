
/*
getClass(classname)获取制定类名的元素
classname 指定要获取元素的classname


思路
1判断浏览器是否支持
2获取所有的元素
3元素的类名是否等于指定的类名
4符合条件的存贮与数组
返回数组*/




      function getClass(classname,range){
                  
                   range=range||document;
                   // range=range？range:document;
                   // range=range===undefined?document:range;

                  if(document.getElementsByClassName){
                     return range.getElementsByClassName(classname);
                           }else{
                            
                            var arr=range.getElementsByTagName("*");
                            var are=[];
                            for(var i=0;i<arr.length;i++){


                              
                                     
                            	// if(arr[i].className==classname){
                            	// 	are.push(arr[i]);
                              // 当前元素的className是否包含指定的classname
                              if(checkClass(arr[i].className,classname)){
                                are.push(arr[i]);
                            	}
                            }
                                 return are;

                           }

                             }


 // 当前元素的className是否包含指定的classname
      function checkClass(classstr,classname){
          
        var arr=classstr.split(" ");

           for(var i=0;i<arr.length;i++){
            if(arr[i]===classname){
              return true;
            }

          

      }
      return false;
      }









            //8.23号




            function $(selecter,range){
                   
                   if(typeof selecter=="function"){
                    window.onload=function(){
                      selecter();
                    }
                   }
                   else if(typeof selecter=="string"){ range=range||document;
                 //selecter=selecter.trim();

                 if(selecter.charAt(0)=="."){


                  return getClass(selecter.substring(1),range);
                 }

                  else if(selecter.charAt(0)=="#"){

                   return range.getElementById(selecter.substring(1));

                  }

                 else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){

                    return range.getElementsByTagName(selecter);
                  }else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(selecter)){

                    return document.createElement(selecter.slice(1,-1));
                  }

                   }
                


            }


                   /*getContent(obj,value)
                   获取或设置obj的文本
                   obj指定对象
                   value颜色设置的文本
                   1判断获取。设置
                   2获取
                   3设置*/


                   function getContent(obj,value)
                   {
                   if(obj){

                   //设置
                   if(innerText){
                        obj.innerText=value;
                   }else{
                    obj.textcontent=value;
                   }

                   }else{
                       //获取
                     if(innerText){
                      return obj.innerText;
                      } else{
                      return obj.textcontent;
                     }
                    }
                   }




            function getStyle(obj,attr){

                 if(window.getComputedStyle){
                    return getComputedStyle(obj,null)[attr];
                 }else{
                  return obj.currentStyle[attr];
                }



            }
            /*
             getChilds(obj,type)


            获取制定对象的子元素集合
             obj 指定对象
             type 指定获取子元素节点的类型
                  true  元素节点
                  false 元素节点和有意义文本
             1获取所有子元素
             2节点类型
             */

               function getChilds(obj,type){
                  type=type==undefined?true:type;
                  var arr=[];
                  var childs=obj.childNodes;
                  if(type){
                  for(var i=0;i<childs.length;i++)
                  if(childs[i].nodeType==1){
                  arr.push(childs[i]);
                     }
                  }else{
                  for(var i=0;i<childs.length;i++){
                  if(!(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,"")))){
                   arr.push(childs[i]);
                  }
                    }
                  }
                    return arr;
                  }

                
                         //获取第一个节点
                     function getfistChild(obj){

                     return getChilds(obj)[0];

                    }
                        
                         //获取最后一个节点
                    function getlastChild(obj){
                            var childs=getChilds(obj)
                     return  childs[childs.length-1];

                    }
                         
                    //获取任意一个节点
                    function getsuiyi(parent,i){
                    var childs=getchilds(parent)
                    if (i>=childs.length) {
                    return false
                         };
                    return childs[i]
                                     }


                  /*获取下一元素
                    getNext(obj)获取obj的元素节点

                  1  先获取兄弟节点

                     没有  false

                  2 有
                       判断兄弟节点  nodeType !=1
                       next=next.Sibling

                         next==null   false

                         重复 步骤2

                         nodeType==1

                          返回next*/
          
          function getNext(obj,type){

                type=type===undefined?true:type;
                  if(type){var next=obj.nextSibling;

                 if(next==null){

                  return false;
                 }
                  while(next.nodeType==3||next.nodeType==8){

                      next=next.nextSibling;
                      if(next==null){

                        return false;
                      }
                    }
                    return next;}
                    else {

                      var next=obj.nextSibling;

                      if(next==null){

                       return false;
                         }
                    while(!(next.nodeType==1||(next.nodeType==3&&next.nodeValue.replace(/^\s*|\s*$/g,"")))){

                      next=next.nextSibling;
                      if(next==null){

                        return false;
                      }
                  }
                    return next;
                    }
               }



                  //获取上一个元素
               function getpre(obj,type){

                type=type===undefined?true:type;
                  if(type){var next=obj.previousSibling;

                 if(next==null){

                  return false;
                 }
                  while(next.nodeType==3||next.nodeType==8){

                      next=next.previousSibling;
                      if(next==null){

                        return false;
                      }


                  }
                    return next;}
                    else if(false){

                      var next=obj.previousSibling;

                 if(next==null){

                  return false;
                 }
                  while(!(previous.nodeType==1||(previous.nodeType==3&&previous.nodeValue.replace(/^\s*|\s*$/g,"")))){

                      next=next.previousSibling;
                      if(next==null){

                        return false;
                      }


                  }
                    return next;


                    }
               
                  }





    /*

      inserAfter(newobj,obj,type)

      将newobj插入obj之后
      newobj要插入的元素
      obj要插入的位置
      type 类型
           true 元素节点
           false 元素节点和有意义的文本
      1获取obj的下一兄弟元素next
      2获取obj的父元素parent
      3next false
        parent.appendChild(newobj)
      4 parent.inserBefore(newobj,next)*/


      function insertAfter(newobj,obj,type){

          var next=getNext(obj,type)

          var parent=obj.parentNode;
          if(next){
            parent.insertBefore(newobj,next)
            }else{

              parent.appendChild(newobj);
            }

         }  



