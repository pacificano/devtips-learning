$(function(){$("body").hasClass("home")&&!Cookies.get("seen")&&(Cookies.set("seen","step1",{expires:120,path:"/"}),console.log(Cookies.get("seen"))),"step1"!==Cookies.get("seen")||$("body").hasClass("home")||(Cookies.set("seen","step2",{expires:120,path:"/"}),console.log(Cookies.get("seen"))),"step2"===Cookies.get("seen")&&$("body").hasClass("home")&&(alert("you should sign up!"),Cookies.set("seen","complete",{expires:120,path:"/"}))});