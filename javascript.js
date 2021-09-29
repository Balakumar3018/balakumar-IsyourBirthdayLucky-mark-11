const DOB=document.querySelector("#birthday-input");
const LuckyNumber=document.querySelector("#luckyNumber-input");
const btnCheck=document.querySelector("#birthday-check");
const OutputDisplay=document.querySelector("#output-text");

btnCheck.addEventListener("click",BirthdayLuckyhandler);
function BirthdayLuckyhandler(){
    let dob=DOB.value;
    const lucky=LuckyNumber.value
    if(dob=="" ||lucky ==""){
        OutputDisplay.innerText="Please enter both input"
    }
    else{
    const sum=FindSumofDob(dob);
    if(sum% lucky=== 0){
        OutputDisplay.innerText="Bingo! Your birthday date is lucky"
    }else{
        OutputDisplay.innerText="Sad !Your birthday date is not lucky"
    }
}
}
function FindSumofDob(dob){
    dob=dob.replaceAll("-","");
    let sumDate=0;
    for(let i=0;i<dob.length;i++){
        sumDate=sumDate+Number(dob.charAt(i));
    }
    return sumDate;
}