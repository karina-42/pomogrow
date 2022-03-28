
let workDuration = 25;
let breakDuration = 5;
let seconds = 59;
let workMinutes = workDuration - 1;
let breakMinutes = breakDuration - 1;
let alarm = new Audio('alarms/mixkit-guitar-notification-alert-2320.wav')

document.querySelector('#timer-button').addEventListener('click', startCountdown);

function startCountdown() {
  document.querySelector('.tomato').classList.add('t1')
  const interval = setInterval(() => {
    document.querySelector('#time').textContent = `${String(workMinutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`
    seconds--;

    if (seconds === -1) {
      workMinutes--
      seconds = 59;
     }

    if(workMinutes === -1) {
      clearInterval(interval);
      alarm.play();
      document.querySelector('#time').textContent = `00 : 00`;
    }
    growTomato()
  }, 1000);
}

function growTomato() {
  let tomatoGrowth = document.querySelector('.tomato').classList;
  const secondsAre60 = seconds === 00;
  if(secondsAre60 && workMinutes === 20){
    setTimeout(() => {
    tomatoGrowth.remove('t1');
    tomatoGrowth.add('t2');}, 1000);
    } else if (secondsAre60 && workMinutes === 15) {
      setTimeout(() => {
        tomatoGrowth.remove('t2');
        tomatoGrowth.add('t3');}, 1000);
    } else if (secondsAre60 && workMinutes === 10) {
      setTimeout(() => {
        tomatoGrowth.remove('t3');
        tomatoGrowth.add('t4');}, 1000);
    } else if (secondsAre60 && workMinutes === 5) {
      setTimeout(() => {
        tomatoGrowth.remove('t4');
        tomatoGrowth.add('t5');}, 1000);
    } else if (secondsAre60 && workMinutes === 0) {
      setTimeout(() => {
        tomatoGrowth.remove('t5');
        tomatoGrowth.add('t6');}, 1000);
    }
    
}

function breakTime() {
//put a video to play during the break <img> tag and class list? add remove, display, etc
  const breakInterval = setInterval(() => {
    document.querySelector('#time').textContent = `${String(breakMinutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`
    seconds--;

    if (seconds === 0) {
      breakMinutes--;
      seconds = 60;
    }
  }, 1000)
}









// seconds--;
//   if (seconds === 0) {
//     workMinutes--
//     if ( workMinutes === 0) {
//       clearInterval(startTimer)
//     }
//     seconds = 60
//   }




    // function startTimer() {
    //   const p = document.querySelector('#time');
    //   let min = 25;
    //   let sec = min * 60;
     
    //   let leftoverMin = sec / 60;
    //   let leftoverSec = sec /1000
      
    //   let interval = setInterval(() => {
    //     leftoverSec--;

    //     if (leftoverMin === '00') {
    //       clearInterval(interval);
    //     }
     
    //   p.textContent = `${String(leftoverMin).padStart(2, '0')} : ${String(leftoverSec * 1000).padStart(2, '0')}`;
    // }, 1000)
    //   document.querySelector('.tomato').classList.add('t1')
      
      // count--
      // console.log(count)
      // setInterval(startTimer, 1000)
    // }

    // set interval, -1

//     timer = new Array;
// count = 0;
// document.getElementById("timer-button").onclick = ()=>{
//     let output = document.getElementById("timer_input");
//     let sec = output.value;
//     var message = document.getElementById("warning");
//     if(sec === ""){
//         message.classList.add("is-active");
//         output.value="";
//         return false;
//     }
//     if(sec <= 0){
//         message.classList.add("is-active");
//         output.value="";
//         return false;
//     }
//     message.classList.remove("is-active");
//     nowDate = new Date();
//     endDate = new Date(nowDate.getTime() + sec * 1000);
//     count = sec;
//     document.getElementById("time").textContent = "あと" + sec + "秒です";
//     if(timer.length >= 1){
//         stopTimer();
//     }
//     timer.push(setInterval(setTimer,1000));
//     output.value="";
// };
 
// const setTimer = ()=>{
//     count--;
//     document.getElementById("time").textContent = "あと" + count + "秒です";
//     nowDate = new Date();
//     if(nowDate.getTime() >= endDate.getTime()){
//         document.getElementById("time").textContent = "時間になりました";
//         stopTimer();
//         document.getElementById("sound").play();
//     }
// };
// const stopTimer = ()=>{
//     clearInterval(timer.shift());
// }
