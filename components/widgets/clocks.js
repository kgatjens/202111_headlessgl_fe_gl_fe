
import AnalogClock from 'analog-clock-react';

export default function Clocks() {
    
    // let options = {
    //     width: "300px",
    //     border: true,
    //     borderColor: "#2e2e2e",
    //     baseColor: "#17a2b8",
    //     centerColor: "#459cff",
    //     centerBorderColor: "#ffffff",
    //     handColors: {
    //       second: "#d81c7a",
    //       minute: "#ffffff",
    //       hour: "#ffffff"
    //     }
    // };

        let currentdate = new Date();
        let indianTime  = new Date().toLocaleString("en-Us", {timeZone: 'Asia/Kolkata'});


        let ausTime = new Date().toLocaleString("en-US", { timeZone: "Australia/Brisbane" });
        let australia = new Date(ausTime);
        let india = new Date(indianTime);
    
        
        // this.setState({
        //   'options': {
        //     ...this.state.options,
        //     seconds: date.getSeconds(),
        //     minutes: date.getMinutes(),
        //     hours: date.getHours()
        //   }
        // })
      
        let options1 = {
            width: "300px",
            
            border: true,
            borderColor: "#2e2e2e",
            baseColor: "#17a2b8",
            centerColor: "#459cff",
            centerBorderColor: "#ffffff",
            handColors: {
              second: "black",
              minute: "#ffffff",
              hour: "#ffffff"
            },
            seconds: australia.getSeconds(),   // set your
            minutes: australia.getMinutes(),  // own
            hours: australia.getHours(), 
             
        };

        console.log("Autralia:");
        console.log(australia.getHours());
        console.log(options1);
    return (
        <>
            <AnalogClock {...options1} />
        </>
      )
    }
  
  
  
  