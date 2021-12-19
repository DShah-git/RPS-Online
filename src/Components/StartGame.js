import React, { useState } from 'react'

const StartGame = ({displayName}) => {
   
    const [playerScore,setPlayerScore] = useState(0); 
    const [compScore,setCompScore] = useState(0); 
    const [playerAction,setPlayerAction] = useState('');
    const [compAction,setCompAction] = useState('');
    const [newRound,setNewRound] = useState(false);
    const [text,setText] = useState('');
    const [outputText,setOutputText] = useState('');
    const [gameCounter,setGameCounter] = useState(1); 
    
    const [win,setWin] = useState(false);
    
    const [gameOver,setGameOver] = useState(); 



    const optionSelected = (selected)=>{
        console.log(gameCounter);
        var computerAction =  '';

        if(newRound === false){

            setPlayerAction(selected);
            var random = Math.random();
            console.log(random);
            
            if(random<=0.33)
            {
                setCompAction('Rock')
                computerAction = 'Rock'
            }else if(random<=0.66){
                setCompAction('Paper')
                computerAction = 'Paper'
            }else if(random<=1){
                setCompAction('Scissor')
                computerAction = 'Scissor'
            }

            console.log(selected);
            console.log(computerAction);
            
            if(selected==='Rock'){
                if(computerAction==='Rock'){
                    setText('ROCK loves ROCK')
                    setOutputText('Tie')
                    setGameCounter(gameCounter-1)
                    setWin();
                    checkScore();
                }
                else if(computerAction==='Paper'){
                    setText('PAPER beats ROCK')
                    setOutputText('You Lose')
                    setCompScore(compScore+1);
                    checkScore();
                    setWin(false);
                    
                }
                else if(computerAction==='Scissor'){
                    setText('ROCK beats SCISSOR')
                    setOutputText('You Win')
                    setPlayerScore(playerScore+1);
                    checkScore();
                    setWin(true);
                }
            }
            else if(selected==='Paper'){
                if(computerAction==='Rock'){
                    setText('PAPER beats ROCK')
                    setOutputText('You Win')
                    setPlayerScore(playerScore+1);
                    checkScore();
                    setWin(true);
                }
                else if(computerAction==='Paper'){
                    setText('PAPER loves Paper')
                    setOutputText('Tie')
                    setGameCounter(gameCounter-1)
                    checkScore();
                    setWin();
                }
                else if(computerAction==='Scissor'){
                    setText('SCISSOR beats PAPER')
                    setOutputText('You Lose')
                    setCompScore(compScore+1)
                    checkScore();
                    setWin(false);
                }
            }
            else if(selected==='Scissor'){
                if(computerAction==='Rock'){
                    setText('ROCK beats SCISSOR')
                    setOutputText('You Lose')
                    setCompScore(compScore+1)
                    checkScore();
                    setWin(false);
                }
                else if(computerAction==='Paper'){
                    setText('SCISSOR beats Paper')
                    setOutputText('You Win')
                    setPlayerScore(playerScore+1);
                    checkScore();
                    setWin(true);
                }
                else if(computerAction==='Scissor'){
                    setText('SCISSOR loves SCISSOR')
                    setOutputText('Tie')
                    setGameCounter(gameCounter-1)
                    checkScore();
                    setWin();
                }
            }

            checkScore();
            setNewRound(true);

        }
        else{
           console.log("Start the next round");
        }

      
    }

    const checkScore = () => {
        console.log(playerScore + "||||"  + compScore)
       if(playerScore===3||compScore===3){
            console.log("over");
            setGameOver(true)
       }
    }

    const startNewRound = ()=>{
        checkScore();
        if(gameCounter<=4){
            setGameCounter(gameCounter+1);
            console.log(gameCounter);
            setNewRound(false)
            setPlayerAction('')
            setCompAction('')
            setText('')
            setOutputText('')
        }
    }

    const restart=()=>{
        window.location.href = "/";
    }

    return (
        <div className="gameContainer flex-center">
            {
                gameOver===true?
                <div className="gameOver">
                    <span className="gameOverFront">
                        <span className="gameOverFront2">
                        {playerScore ===3 ? <p> You WON!! </p> : <p> You LOST!!</p>}
                        <p> {compScore} - {playerScore} </p>
                            <button className='replay' onClick={()=>restart()}>   
                                    Replay
                                
                            </button>
                        </span>
                    </span>
                </div>
                :
                ''

            }
            
           <div className="opponent">
                <div className='opponent-header'>
                    <div class="imageContainers">
                        <img className="comImage" src={`https://avatars.dicebear.com/api/pixel-art-neutral/${displayName}'s Archnemesis.svg`} alt="" />
                    </div>
                    <div>
                        <p> {displayName}'s Archnemesis </p>
                    </div>
                   
                </div>
                <div className="oppPlay">
                        {compAction!==''? <p><span className="displayName">{displayName}'s Archnemesis </span> threw a {compAction}</p> : ''}
                    </div>
                </div>
            <div className={`score ${win ? 'score-win':'score-lose' }`}>
                <div className='opponentScore'>
                      {compScore}/3
                </div>
                <div className="Text">
                    {text}
                    <br></br>
                    {outputText}
                </div>
                <div className='playerScore'>
                    {playerScore}/3
                </div>
            
            </div>
            <div className="player ">
                <div className='player-header'>
                <div class="imageContainers">
                        <img className="comImage" src={`https://avatars.dicebear.com/api/pixel-art-neutral/${displayName}.svg`} alt="" />
                    </div>
                    <div>
                        <p> {displayName} </p>
                    </div>
                </div>
                <div className='next phone'>
                    {
                        newRound===true? 
                        <button onClick={()=>startNewRound()} className="btnStart recolor">
                            <span className="front resize" >next round</span>    
                        </button> :
                        ''
                    }    
                </div>
                

                      
                <div className='options'>
                   
                    <div className="option">
                        <span onClick={()=>optionSelected('Rock')} className='optionFront'>Rock</span>
                    </div>
                    <div className="option">
                        <span onClick={()=>optionSelected('Paper')} className='optionFront'>Paper</span>
                    </div>
                    <div className="option">
                        <span onClick={()=>optionSelected('Scissor')} className='optionFront'>Scissor</span>
                    </div>
                </div>
                 
                <div class="top-player">
                    <div className="oppPlay">
                        {
                            playerAction!==''?
                            <p><span className="displayNamePlayer">You </span>threw a {playerAction}</p>
                            : ''
                        } 

                    </div>
                    <div className='next desktop'>
                        {
                            newRound===true? 
                            <button onClick={()=>startNewRound()} className="btnStart recolor">
                                <span className="front resize" >next round</span>    
                            </button> :
                            ''
                        }    
                    </div>
                </div>
                

            </div> 
        </div>
    )
}

export default StartGame
