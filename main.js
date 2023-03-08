$('.explain_login').hide(0);
$('.explain_password').hide(0);
let testButt1 = 0;
let testButt2 = 0;
let testButt3 = 0;
let testButt4 = 0;
let testButt5 = 0;
let testButt6 = 0;
let testButt7 = 0;
let testButt8 = 0;
let testButt9 = 0;
let testButt10 = 0;

$('#loginInfo').click(function(){
    $('.explain_login').slideDown(500);
    $('.explain_password').hide(400);
    let box = loginInfo.value;
    let regexrd = /\d/g;
    let regexrw = /\w/g;
    let regexrW = /\W/g;
    let regexrLittle = /[aqwszxcderfvbgtyhnmjuiklop]/;
    let regexrBig = /[ZAQWSXCDERFVBGTYHNMJUIKLOP]/;
    let sizeBox = (box.match(regexrw)).length

    if(regexrd.test(box) == true){
        log4.style.backgroundColor = '#fff';
        log4.style.border = 'none';
        testButt1 = 1;
    }else{
        log4.style.backgroundColor = '#333';
        log4.style.border = 2 +'px solid #999';
        testButt1 = 0;
    }
    
    if(sizeBox > 6 && sizeBox < 20){
        log2.style.backgroundColor = '#fff';
        log2.style.border = 'none';
        testButt2 = 1;

        
    }else{
        log2.style.backgroundColor = '#333';
        log2.style.border = 2 +'px solid #999';
        testButt2 = 0;
    }

    if(regexrW.test(box) == true){
        log5.style.backgroundColor = '#333';log
        log5.style.border = 2 +'px solid #999';
        testButt3= 1;

        
    }else{
        log5.style.backgroundColor = '#fff';
        log5.style.border = 'none';
        testButt3 = 0;
    }

    if(regexrLittle.test(box) == true){
        log1.style.backgroundColor = '#fff';
        log1.style.border = 'none';
        testButt4 = 1;

        
    }else{
        log1.style.backgroundColor = '#333';
        log1.style.border = 2 +'px solid #999';
        testButt4 = 0;
    }

    if(regexrBig.test(box) == false){
        log3.style.backgroundColor = '#fff';
        log3.style.border = 'none';
        testButt5 = 1;

        
    }else{
        log3.style.backgroundColor = '#333';
        log3.style.border = 2 +'px solid #999';
        testButt5 = 0;
    }
})

$('#passwordInfo').click(function(){
    $('.explain_password').slideDown(500);
    $('.explain_login').hide(400);
    let box = passwordInfo.value;
    let regexrd = /\d/g;
    let regexrw = /\w/g;
    let regexrW = /\W/g;
    let regexrLittle = /[aqwszxcderfvbgtyhnmjuiklop]/;
    let regexrBig = /[ZAQWSXCDERFVBGTYHNMJUIKLOP]/;
    let sizeBox = (box.match(regexrw)).length

    if(regexrd.test(box) == true){
        pas4.style.backgroundColor = '#fff';
        pas4.style.border = 'none';
        testButt6 = 1;
    }else{
        pas4.style.backgroundColor = '#333';
        pas4.style.border = 2 +'px solid #999';
        testButt6 = 0;
    }
    
    if(sizeBox > 6 && sizeBox < 20){
        pas2.style.backgroundColor = '#fff';
        pas2.style.border = 'none';
        testButt7 = 1;

        
    }else{
        pas2.style.backgroundColor = '#333';
        pas2.style.border = 2 +'px solid #999';
        testButt7 = 0;
    }

    if(regexrW.test(box) == true){
        pas5.style.backgroundColor = '#333';
        pas5.style.border = 2 +'px solid #999';
        testButt8 = 1;

        
    }else{
        pas5.style.backgroundColor = '#fff';
        pas5.style.border = 'none';
        testButt8 = 0;
    }

    if(regexrLittle.test(box) == true){
        pas1.style.backgroundColor = '#fff';
        pas1.style.border = 'none';
        testButt9 = 1;

        
    }else{
        pas1.style.backgroundColor = '#333';
        pas1.style.border = 2 +'px solid #999';
        testButt9 = 0;
    }

    if(regexrBig.test(box) == true){
        pas3.style.backgroundColor = '#fff';
        pas3.style.border = 'none';
        testButt10 = 1;

        
    }else{
        pas3.style.backgroundColor = '#333';
        pas3.style.border = 2 +'px solid #999';
        testButt10 = 0;
    }

});

