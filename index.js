const words=["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non magnam distinctio eius debitis quos quia ea porro mollitia deleniti eum, vitae nostrum facere fuga nesciunt molestiae aliquam odit quis in?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non magnam distinctio eius debitis quos quia ea porro mollitia deleniti eum, vitae nostrum facere fuga nesciunt molestiae aliquam odit quis in?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non magnam distinctio eius debitis quos quia ea porro mollitia deleniti eum, vitae nostrum facere fuga nesciunt molestiae aliquam odit quis in?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non magnam distinctio eius debitis quos quia ea porro mollitia deleniti eum, vitae nostrum facere fuga nesciunt molestiae aliquam odit quis in?","mayank rawat","rawat","mayank"];

const msg=document.getElementById("msg");
const myWords=document.getElementById("myWords");
const btn =document.getElementById("btn");
// let startTime,endTime;

const playGame=()=>{
    let randomNumber=Math.floor(Math.random() * words.length);
    msg.innerText=words[randomNumber];
    // let date=new Date();
    // startTime=date.getTime();
    btn.innerText="Done";
}

const endPlay=()=>{
    // let date=new Date();
    // endTime=date.getTime();
    // let totalTime=((endTime - startTime)/1000);
    let totalString=myWords.value;
    let wordCount=wordCounter(totalString);
    // let speed=Math.floor((wordCount/totalTime)*60);
    let finalMsg="";
    finalMsg+=wordsMatching(msg.innerText,totalString);
    msg.innerText=finalMsg;
} 

const wordsMatching=(str1,str2)=> {
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let count=0;
    words1.forEach(function(item,index) {
        if(item==words2[index]){
            count++;
        }
    })
    let errorWords=(words1.length-count);
    return (count +" words are correct out of " + words1.length + " words and the total wrong words are " + errorWords +".");
}

const wordCounter=(str)=> {
    let response=str.split(" ").length;
    return response;
}

btn.addEventListener("click",function(){
    if(this.innerText=='Start'){
        myWords.disabled=false;
        playGame();
    }
    else if(this.innerText=="Done"){
        myWords.disabled=true;
        btn.innerText="Start";
        endPlay();
        myWords.value="";
    }
});