import React from 'react';

export const Dashboard = (props) =>{
    // state={
    //     ball: 0,
    //     strike: 0,
    //     foul: 0,
    //     hit: 0
    // }

    const ball=()=>{
        if (props.ball < 3){
            props.addBall()          
        }
        if (props.ball === 3){
            props.reset()          
        }
    }

    const hit=()=>{
        props.reset()
    }

    const strike=()=>{
        if (props.strike <2){
            props.addStrike()
        }
        if (props.strike === 2){
            props.reset()
        }
    }

    const foul=()=>{
       if (props.strike < 2){
           props.addStrike()
       }
    }


    return(
        <div className="dash">
            <h2>Welcome to Zim Field</h2>
            <button onClick={ball}>Balls: </button>
            <button onClick={hit}>Hits: </button>
            <button onClick={strike}>Strikes: </button>
            <button onClick={foul}>Fouls: </button>                
        </div>
    )
    
}

export default Dashboard