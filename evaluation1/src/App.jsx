import{useState} from "react";


function App() {
  const totalscore=70;
  const wicket=2;
  const ball=50/6;
  const [scores,setcount]=useState(totalscore);
 let k;
  const addone=(value)=>{
   
      setcount(scores+value)
      if(scores+value>100){
        alert("india won");
        return scores+"india won"
        let k="india won"
      }
      if(setcount+value>100){
           return 0;
      }
    
  }

  const [wickets,setcount1]=useState(wicket);
  const addone2=(value)=>{
  
    setcount1(wickets+value)
  }
  const [overs,setcount2]=useState(4.4);
  const addone3=(value)=>{
  
    setcount2(overs+value)
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
             scores
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
             wickets
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              overs
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1"onClick={() =>{addone(1)}}>Add 1</button>
        <button className="addScore4"onClick={() =>{addone(4)}}>Add 4</button>
        <button className="addScore6"onClick={() =>{addone(6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() =>{addone2(1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() =>{addone3(1)}}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */
      k}
    </div>
  );
}

export default App;