
function quizSubmit() {
    var btn = document.getElementById("sbmitBtn");
    btn.style.cursor = "none";
    var inputs = document.getElementsByTagName("input");
    for(var i=0; i<inputs.length; i++){
        inputs[i].disabled = "true";
    }
    var ele = document.getElementsByName("question1");
    var ans = [];
    var uncheckBtn1 = false; 
    for(let i =0; i < ele.length; i++){
        if(ele[i].type="radio") {
            if(ele[i].checked){
                ans.push(ele[i].value);
                uncheckBtn1 = true;
            }
        }
    }
    if(!uncheckBtn1){
        ans.push("null");
    }
    var ele = document.getElementsByName("question2");
    var uncheckBtn2 = false; 
    for(let i =0; i < ele.length; i++){
        if(ele[i].type="radio") {
            if(ele[i].checked){
                ans.push(ele[i].value);
                uncheckBtn2 = true;
            }
        }
    }
    if(!uncheckBtn2){
        ans.push("null");
    }
    var ele = document.getElementsByName("question3");
    var uncheckBtn3 = false; 
    for(let i =0; i < ele.length; i++){
        if(ele[i].type="radio") {
            if(ele[i].checked){
                ans.push(ele[i].value);
                uncheckBtn3 = true;
            }
        }
    }
    if(!uncheckBtn3){
        ans.push("null");
    }

    var tellyAns = ["Brendan Eich","npm","ESLint"];

    var count = 0;
    for(let i = 0; i < tellyAns.length; i++){
        if(ans[i] === null){
            count += 0;
        }
        else if(ans[i] === tellyAns[i]){
            count += 4;
        }
        else if(ans[i] !== null && ans[i] !== tellyAns[i]){
            count -= 0.25;
        }
    }
    return count;
}

function totalScore(){
    var btn = document.getElementById("resultBtn");
    btn.style.cursor = "none";
    var score = quizSubmit();
    if(score === 0){
        alert("It looks like you didn\'t give test, So that your score is : "+score);
    }else {
        alert("Your total score : " + score);
    }
    
    var ele = document.getElementsByTagName("input");
    for(let i =0; i < ele.length; i++){
        if(ele[i].type="radio") {
            if(ele[i].checked){
                ele[i].checked = false;
            }
        }
    }
}
