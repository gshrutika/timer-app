import React,{Component} from "react";
class TimeApp extends Component{
     constructor(props){
        super(props);
        this.state={
            Timer:25*60 //initial time in sec(25 minutes)
        };

        this.timerInterval=null;
        
     }

     startTime=()=>
    {
        if(!this.setState.isRunning)
        {
            this.timerInterval=setInterval(this.tick,1000);
            this.setState(
                {
                    isRunning:true
                }
                );

                pauseTime=()=>
               {
                clearInterval(this.timerInterval);
                this.setState(
                    {
                        isRunning:false
                    }
                );
               };

               resetTimer=()=>{
                 clearInterval(this.timerInterval);
                 this.setState(
                    {
                      time:25*60, isRunning:false
                 });
               };

               tick=()=>{
                if(this.state.time>0)
                {
                    this.setState((prevState)=>
                    ({time:prevState.time-1})
                    );
                 }
                  else {
                    clearInterval(this.timerInterval);
                 this.setState({isRunning:false});

                 }
               };

               formateTime=(second)=>{
                const minutes = Math.floor(seconds/60);
                const remainingSeconds = seconds % 60;
                return `$(minutes);${remainingSeconds<10?'0':''}
                ${remainingSeconds}`;
               };
               
               render()
               {
                return(
                    <div className="App">
                    <h1>Timer App</h1>
                    <p>
                        {
                            this.formateTime(this.start.time)
                        }
                    </p>

                    <button onClick={this.startTime}> Start</button>
                    <button onClick={this.pauseTime}> Pause</button>
                    <button onClick={this.resetTime}> Reset</button>
                    </div>
                     );
               }
        
        }
    }
}
export default TimeApp;