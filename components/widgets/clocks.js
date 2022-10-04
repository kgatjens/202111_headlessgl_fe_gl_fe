
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

        let ausTime = new Date().toLocaleString("en-US", { timeZone: "Australia/Brisbane" });
        let date = new Date(ausTime);
    
        // this.setState({
        //   'options': {
        //     ...this.state.options,
        //     seconds: date.getSeconds(),
        //     minutes: date.getMinutes(),
        //     hours: date.getHours()
        //   }
        // })
      
        let options = {
            width: "300px",
            border: true,
            borderColor: "#2e2e2e",
            baseColor: "#17a2b8",
            centerColor: "#459cff",
            centerBorderColor: "#ffffff",
            handColors: {
              second: "#d81c7a",
              minute: "#ffffff",
              hour: "#ffffff"
            },
            "seconds": date.getSeconds(),   // set your
            "minutes": date.getMinutes(),  // own
            "hours": date.getHours()   
        };


    return (
        <>
            <AnalogClock {...options} />
        </>
      )
    }
  
  
  
  