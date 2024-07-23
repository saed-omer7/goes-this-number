const btn=document.querySelector('.btn1');
const getbtn=document.querySelector('.btn2');
let header=document.querySelector('.fhead');
let sheader=document.querySelector('.shead');
let input=document.querySelector('.input');
let body=document.querySelector('.container');
let image=document.querySelector('.img1');
let images=document.querySelector('.img2');
let rand ='';
let outputscore=document.querySelector('.score');
let score=20;
let hscore=document.querySelector('.hscore');
let range=document.querySelector('.range');
let span=document.querySelector('span');

range.addEventListener('input',()=>{
    span.textContent=range.value;
})
   




function randomNum(){
    let num=Math.floor(Math.random()*range.value);
    
    rand=num;
    
    outputscore.textContent=20;
    body.style.backgroundColor="rgb(17, 25, 35)";
    image.style.visibility="hidden";
    images.style.visibility="hidden";
   input.value=" ";
    sheader.textContent='garo numberkan';
    
score=20;
    
}


function tryNum(){

    rand!=input.value;
    
   if(rand==input.value){
        
        sheader.textContent='waad garatay';
        body.style.backgroundColor="rgba(15, 94, 15, 0.862)";

        hscore.textContent=score;
        image.style.visibility="visible";
        images.style.visibility="visible";
       
        
      
       
    }
    
    else if(rand>input.value){
        
        sheader.textContent='wuu ka wayn yahy';
        
        
        outputscore.textContent=score-=1;
       
    }
    else if(rand<input.value){
        sheader.textContent='wuu ka yaryahey';
        
        outputscore.textContent=score-=1;
        
    }

}



btn.addEventListener('click',tryNum);
getbtn.addEventListener('click',randomNum);