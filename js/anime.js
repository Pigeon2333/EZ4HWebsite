var str="一个第三方Minecraft服务端代理，</br>允许通过Java版客户端进入基岩版服务器。</br></br>",
tags=["FunnyArenaPixel 旗下项目。","咕咕咕？咕咕咕！"],
element=document.getElementById("SUBTITLE"),
stat={count:0,tag:0,stage:0};
setInterval(function(){
    switch(stat.stage){
        case 0:{
            element.innerHTML=str+tags[stat.tag].substring(0,stat.count)+"_";
            break;
        }
        case 1:{
            if(stat.count%2==0){
                element.innerHTML=str+tags[stat.tag]+"\x20";
            }else{
                element.innerHTML=str+tags[stat.tag]+"_";
            }
            break;
        }
        case 2:{
            element.innerHTML=str+tags[stat.tag].substring(0,tags[stat.tag].length-stat.count)+"_";
            break;
        }
    }stat.count++;
    if(stat.count==tags[stat.tag].length&&stat.stage==0){
        stat.stage=1;
        stat.count=0;
    }
    if(stat.count>=10&&stat.stage==1){
        stat.stage=2;
        stat.count=0;
    }
    if(stat.count==tags[stat.tag].length&&stat.stage==2){
        stat.stage=0;
        stat.count=0;
        if(tags[stat.tag+1]==null){
            stat.tag=0
        }else{
            stat.tag++;
        }
    }
},150)
