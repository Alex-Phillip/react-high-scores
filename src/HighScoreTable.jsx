import React from 'react';

function HighScoreTable(props) {
  
  return (
    <div className='scoresContainer'>
        <h1>High Scores per Country</h1>
        {props.allCountryScores.map((score) => {
            return (
                <div className='scoreName'>
                        <h2>
                            {`HIGH SCORES: ${score.name}`}
                        </h2>
                {score.scores.map((x) => {
                    return (
                        <div className='scoresData'>
                        <p>{`${x.n} ${x.s}`}</p>
                        </div>
                    )
                })}
                </div>
            )
        })}
    </div>
  );
};

export default HighScoreTable;
