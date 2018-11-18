function calculate(str){
    console.log("calculate()");
    document.getElementById("history").innerHTML+=str+" ";  
    if(str.length == 0){
        document.getElementById("RES").innerHTML="";
        console.log("empty string");
        return;
    }
    //else
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){
        console.log("entered response function");
        if(this.readyState == 4 && this.status == 200){
            console.log("response success, trying to write to RES");
            document.getElementById("RES").innerHTML=this.responseText;
            console.log("RES written with value: ");
            console.log(this.responseText);
        }
    };
    var root="/MyCalculator-Class/service_calculator/main.php";
    ajaxRequest.open("POST", root + "?par=" + str, true);
    ajaxRequest.send(null);
    //
    // debug print
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("myDebug").innerHTML=this.responseText;
        }
    };
    var root="/MyCalculator-Class/service_calculator/debug.php";
    ajaxRequest.open("GET", root + "?par=" + str, true);
    ajaxRequest.send(null);
}
//              //
//              //
//  OPTION 1    //
//              //
//              //
function restart(){
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("myDebug").innerHTML=this.responseText;
        }
    };
    var root="/MyCalculator-Class/service_calculator/restart.php";
    ajaxRequest.open("PUT", root + "?par=Y", true);
    ajaxRequest.send(null); 
    document.getElementById("history").innerHTML=""; 
    document.getElementById("RES").innerHTML="try me"; 
}
//              //
//              //
//  OPTION 2    //
//              //
//              //
// function initSess(){
//     var ajaxRequest = new XMLHttpRequest();
//     ajaxRequest.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             document.getElementById("myDebug").innerHTML=this.responseText;
//         }
//     };
//     var root="/MyCalculator-Class/service_calculator/initSess.php";
//     ajaxRequest.open("GET", root + "?par=Y", true);
//     ajaxRequest.send(null);
// }
// function endSess(){
//     var ajaxRequest = new XMLHttpRequest();
//     ajaxRequest.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             document.getElementById("myDebug").innerHTML=this.responseText;
//         }
//     };
//     var root="/MyCalculator-Class/service_calculator/endSess.php";
//     ajaxRequest.open("GET", root + "?par=Y", true);
//     ajaxRequest.send(null);
// }
// function restart(){
//     endSess();
//     initSess();
//     document.getElementById("history").innerHTML="";  
// }
// windows.onload = function(){
//     restart();
// }