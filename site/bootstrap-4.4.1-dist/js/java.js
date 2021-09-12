/*alert("hello ");
function test(x){
    var y=x+5;
    alert(y);

}
test(10);
function sum(x,y){
alert(x*y);
}
sum(55,0)
var x=function(){
    alert("12")
}
x()*/
//self function يعني اول ا لوقع يشتغل هي بتشتغل مع نفسها    
/*
(function(){
    alert("yy")
})();*/
var productName=document.getElementById("productName");

var catgery1=document.getElementById("productCatgery");
var price=document.getElementById("productprice");
var des=document.getElementById("productdescripion");

if (localStorage.getItem("data")==null) {
var list=[];
}else{
    var list=JSON.parse(localStorage.getItem("data"));
}
function test(){
   
    var project={
        name:productName.value,
        name2:catgery1.value,

        name3:price.value,

        name4:des.value,


    }
    list.push(project);
    display();

   localStorage.setItem("data",JSON.stringify(list));
console.log(list)
}
function display() {
    var trs="";
   
    for(var i=0;i<list.length;i++){
    
        trs+='<tr> <td>'+list[i].name+'</td> <td>'+list[i].name2+'</td><td>'+list[i].name3+'</td><td>'+list[i].name4+'</td> <td> <button class="btn btn-primery "  onclick="edite('+i+')" style="margin-right:9px">Edite</button><button  class="btn btn-danger" onclick="deletee('+i+')"> delete</button></td>  </tr>';
    }
    document.getElementById("tbody").innerHTML=trs;
}
//Delete item
function Delete(i) {
    
    list.splice(i,1);
    localStorage.setItem("data",JSON.stringify(list));
}
display();
function deletee(i){

    list.splice(i,1);
    localStorage.setItem("data",JSON.stringify(list));
    display();
}
//////sreach////////////
var s=document.getElementById("sreach");
function sreach() {

    var da='';
    for(var i=0;i<list.length;i++){
    if(list[i].name.toLowerCase().includes(s.value.toLowerCase())){

        da+='<tr> <td>'+list[i].name+'</td> <td>'+list[i].name2+'</td><td>'+list[i].name3+'</td><td>'+list[i].name4+'</td> <td> <button class="btn btn-primery "   style="margin-right:9px">Edite</button><button  class="btn btn-danger" onclick="deletee('+i+')"> delete</button></td>  </tr>';
    }else{

    }
        
    }

     document.getElementById("tbody").innerHTML=da;
}
//edite
var dt=document.getElementById("btnadd");
function edite(i) {
    productName.value=list[i].name;
    catgery1.value=list[i].name2;
    price.value=list[i].name3;
    des.value=list[i].name4;
    dt.innerText="UpdataProduct"
    dt.onclick=function(){
      
   list[i].name=productName.value;
   list[i].name2= catgery1.value;
    list[i].name3=price.value;
   list[i].name4= des.value;
   productName.value='';
   price.value='';
   catgery1.value='';
   des.value='';
   display();
   dt.innerText="add product"
    }
}