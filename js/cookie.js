function setCookie(key,val,time){
	if(time){
		let date=new Date();
		date.setTime(date.getTime()+time);
		let ex=date.toGMTString();
		document.cookie=key+"="+val+"; expires="+ex;
	}
	else{
		document.cookie=key+"="+val;
	}
}
function getCookie(name){
	let str=document.cookie;
	let arr=str.split("; ");
	arr.forEach(function(ele,index){
		let arr1=ele.split("=");
		if(arr1[0]==name){
			name=arr1[1];
		}
	});
	return name;
	
}
function delectCookie(key){
	let date=new Date();
	date.setTime(date.getTime()-100);
	let ex=date.toGMTString();
	document.cookie=key+"="+null+"; expires="+ex;
}
console.log(getCookie("a"));
setCookie("name","zhangsan",100000000);
console.log(getCookie("name"));