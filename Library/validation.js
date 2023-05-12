let fnameNode=$('#firstName');
let errorNode1=$('#error1');
let mailNode=$('#mailId');
let errorNode2=$('#error2');
let passNode=$('#pass');
let errorNode3=$('#error3');
let cpassNode=$('#cpass');
let errorNode4=$('#error4');
$(function(){
    fnameNode.blur(()=>validate1());
    mailNode.blur(()=>validate2());
    passNode.blur(()=>validate3());
    cpassNode.blur(()=>validate4());

    $('#regForm').submit(()=>validateForm());
});
function validate1(){
    errorNode1.text("");
    let fname=fnameNode.val();
    let fnamePattern= new RegExp("^[A-Za-z]*$");
    fnameNode.css({border:"2px red solid"});
    if(fname==""){
        errorNode1.text(" name is required");
        return false;
    }
    else if(fnamePattern.test(fname)==false){
        errorNode1.text("name must have only alphabets");
        return false;
    }
    else{
        fnameNode.css({border:"2px green solid"});
        return true;
    }
}

function validate2(){
    errorNode2.text("");
    let email=mailNode.val();
    mailNode.css({border:"2px red solid"});
    if(email==""){
        errorNode2.text("Email Id is required");
        return false;
    }
    else if(!email.includes('@')){
        errorNode2.text("Please enter valid EmailId");
        return false;
    }
    else if(email.endsWith('@')){
        errorNode2.text("Please enter valid EmailId");
        return false;
    }
    else{
        mailNode.css({border:"2px green solid"});
        return true;
    }
}

function validate3(){
    errorNode3.text("");
    let password=passNode.val();
    passNode.css({border:"2px red solid"});
    let passPattern= new RegExp("^[A-Za-z0-9]{4,8}$");
    if(password==""){
        errorNode3.text("Please enter correct password");
        return false;
    }
    else if(passPattern.test(password)==false){
        errorNode3.text("Please enter correct password");
        return false;
    }
    else{
        passNode.css({border:"2px green solid"});
        return true;
    }

}

function validate4(){
    errorNode4.text("");
    let confirmPassword=cpassNode.val();
    let password=passNode.val();
    cpassNode.css({border:"2px red solid"});
    if(confirmPassword==""){
        errorNode4.text("Confirm Password is required");
        return false;
    }
    else if(confirmPassword!=password){
        errorNode4.text("Confirm Password must match with password");
        return false;
    }
    else{
        cpassNode.css({border:"2px green solid"});
        return true;
    }
}
let nodeArray=[fnameNode,mailNode,passNode,cpassNode];
function validateForm(){
    let flag1=validate1();
    let flag2=validate2();
    let flag3=validate3();
    let flag4=validate4();
    let flagArray=[flag1,flag2,flag3,flag4];
    for(let i=0;i<flagArray.length;i++){
            if(flagArray[i]==false){
                nodeArray[i].focus();
                break;
            }
        }
    return (flag1 && flag2  && flag3 && flag4 )
}