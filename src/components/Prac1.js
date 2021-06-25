import React from 'react';



function Prac1(){
    var currdate = new Date();
currdate=currdate.getHours();
let greetingmsg ="";
const cssStyle = {};
if(currdate >= 1 && currdate < 12)
{
  greetingmsg = "Good Morning";
  cssStyle.color = "Green"
}else if(currdate>=12 && currdate < 19)
{
  greetingmsg = "Good Evening";
  cssStyle.color = "Pink"
}else{
  greetingmsg= "Good night";
}
return(
    <>
     <div>
        <h1>Hello Sir, <span style={cssStyle}>{greetingmsg}</span></h1>
    </div>
    </>
);
}
export default Prac1;