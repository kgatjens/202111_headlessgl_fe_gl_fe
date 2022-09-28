<div class="clock-content">
        <div class="widget clock" id="denver" data-timezone="-7"><!-- MDT, CDT -->
            <div class="hand seconds" style="transform: rotate(168deg); transition: all 0.05s cubic-bezier(0, 0, 0.52, 2.51) 0s;"></div>
            <div class="hand minutes" style="transform: rotate(192deg);"></div>
            <div class="hand hours" style="transform: rotate(960deg);"></div>
            <div class="hand-cap"></div>
            <label>Denver</label>
        </div>
        <div class="widget clock" id="mx" data-timezone="-7">
            <div class="hand seconds" style="transform: rotate(168deg); transition: all 0.05s cubic-bezier(0, 0, 0.52, 2.51) 0s;"></div>
            <div class="hand minutes" style="transform: rotate(192deg);"></div>
            <div class="hand hours" style="transform: rotate(450deg);"></div>
            <div class="hand-cap"></div>
            <label>Mexico</label>
        </div>
        <div class="widget clock" id="crc" data-timezone="-6">
            <div class="hand seconds" style="transform: rotate(168deg); transition: all 0.05s cubic-bezier(0, 0, 0.52, 2.51) 0s;"></div>
            <div class="hand minutes" style="transform: rotate(192deg);"></div>
            <div class="hand hours" style="transform: rotate(450deg);"></div>
            <div class="hand-cap"></div>
            <label>Costa Rica</label>
        </div>
        <div class="widget clock" id="col" data-timezone="-5">
            <div class="hand seconds" style="transform: rotate(168deg); transition: all 0.05s cubic-bezier(0, 0, 0.52, 2.51) 0s;"></div>
            <div class="hand minutes" style="transform: rotate(192deg);"></div>
            <div class="hand hours" style="transform: rotate(720deg);"></div>
            <div class="hand-cap"></div>
            <label>Colombia</label>
        </div>
        <div class="widget clock" id="ind" data-timezone="+17">
            <div class="hand seconds" style="transform: rotate(168deg); transition: all 0.05s cubic-bezier(0, 0, 0.52, 2.51) 0s;"></div>
            <div class="hand minutes" style="transform: rotate(192deg);"></div>
            <div class="hand hours" style="transform: rotate(720deg);"></div>
            <div class="hand-cap"></div>
            <label>India</label>
        </div> 
        <div class="widget clock" id="poland" data-timezone="+14" >
            <div class="hand seconds" style="transform: rotate(168deg); transition: all 0.05s cubic-bezier(0, 0, 0.52, 2.51) 0s;"></div>
            <div class="hand minutes" style="transform: rotate(192deg);"></div>
            <div class="hand hours" style="transform: rotate(720deg);"></div>
            <div class="hand-cap"></div>
            <label>Poland</label>
        </div>
    </div>

// class Clock {
//     constructor(id) {
//       this.timezone = parseInt(document.getElementById(id).dataset.timezone);
      
//       if (this.isDST(new Date())) {
//         this.timezone += 0;      
//       }
  
//       //this.handSeconds = document.querySelector(`#${id} .hand.seconds`);
//       this.handMinutes = document.querySelector(`#${id} .hand.minutes`);
  
//       this.handHours = document.querySelector(`#${id} .hand.hours`);
  
//       this.id = id;
  
//       this.getTime();
//       this.cycle();
//     }
  
//     isDST(now) {
//       const jan = new Date(now.getFullYear(), 0, 1);
//       const jul = new Date(now.getFullYear(), 6, 1);
//       const dst = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  
//       return now.getTimezoneOffset() < dst;
//     }
  
//     draw(hours, minutes, seconds,country) {
//       var temp=90;
//       if(country=='poland' ){
//         temp = 60;
//       }
//       if(country=='ind'  ){
//         temp = 90;
//       }
//       const drawSeconds = seconds / 60 * 360 + 90;
//       const drawMinutes = minutes / 60 * 360 + 90;
//       const drawHours = hours / 12 * 360 + temp;
  
//       this.handMinutes.style.transform = `rotate(${drawMinutes}deg)`;
//       this.handHours.style.transform = `rotate(${drawHours}deg)`;
//     }
  
//     getTime() {
//       const now = new Date();
      
//       const hours = now.getUTCHours() + this.timezone;
//       const minutes = now.getUTCMinutes();
//       const seconds = now.getUTCSeconds();
  
//       var extraMin = 0; 
//       var minutesTotal = minutes;
  
//       if(this.id=='ind'){
//             extraMin = 30; 
//             minutesTotal = minutes+extraMin;
//           if(minutesTotal>60){
//               minutesTotal = minutesTotal-60;
//           }
//       }
  
  
//       var paragraph = document.getElementById(this.id);
//       var element = paragraph.getElementsByTagName("span"),index;
  
//       for (index = element.length - 1; index >= 0; index--) {
//           element[index].parentNode.removeChild(element[index]);
//       }
  
//       var closeSpan = document.createElement("span");
      
  
//       paragraph.appendChild(closeSpan);
//       closeSpan.textContent = this.zones(this.id, now);
//       this.draw(hours, minutes+extraMin, seconds,this.id );
//     }
  
//     zones(id,now){
      
//       var zone,time = "";
//       switch(id){
//           case "crc":zone = "America/Costa_Rica";break;
//           case "ind":zone = "Asia/Kolkata";break;
//           case "mx":zone = "America/Chihuahua";break;
//           case "poland":zone = "Europe/Warsaw";break;
//           case "col":zone = "America/Bogota";break;
//           default:zone = "America/Denver";break;
//       }
      
//       time += now.toLocaleString("en-IN", {
//           hour: "2-digit",
//           minute: "2-digit",
//           timeZone: zone
//       });
//       return time;
//     }
  
//     cycle() {
//       setInterval(this.getTime.bind(this), 1000);
//     }}
  
  
//   new Clock('denver');
//   new Clock('mx');
//   new Clock('crc');
//   new Clock('col');
//   new Clock('ind');
//   new Clock('poland');
  
  
  
  
  
  