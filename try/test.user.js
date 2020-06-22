
    //var html = document.documentElement; //取得对<html>的引用
    //console.log(html);
    //console.log(document.childNodes[1]);
    //console.log(html===document.firstChild.nextSibling)
    //alert(html === document.childNodes[0]); //true
    //alert(html === document.firstChild); //true 
    //var deepList = myList.cloneNode(true); 
    //console(deepList.childNodes.length);
    var str=document.getElementsByClassName("file_item")[0].innerHTML;
    var beginIndex=str.indexOf("soundFile:");
    var lastIndex=str.indexOf(",titles");
    var id=document.getElementById("audioplayer_1").innerHTML;
    str=str.substring(beginIndex+12,lastIndex-1);
    var str1=document.getElementsByClassName("file_item")[0];
    console.log(str);
    console.log(id);
    window.onload=function(){
        var audioFile=document.createElement("audio");
        audioFile.id="audioFile";
        audioFile.src=str;
        
        var btn=document.createElement("input");
        btn.setAttribute("type","button");
        btn.setAttribute("value","play");
        btn.setAttribute("onclick","playAudio()");
        btn.setAttribute("id","playButton");
        var preNode=document.getElementsByClassName("file_item")[0];
        preNode.appendChild(audioFile);
        console.log(btn);
        preNode.appendChild(btn);
    }
    var playState=false;
    function playAudio(){
        if(playState==false){
            document.getElementById("audioFile").play();
            var btnValue=document.getElementById("playButton")
            btnValue.setAttribute("value","pause");
            playState=true;
        }
        else{
            document.getElementById("audioFile").pause();
            var btnValue=document.getElementById("playButton")
            btnValue.setAttribute("value","play");
            playState=false;
        }
    }
