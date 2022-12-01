import React from 'react';

function HighScoreTable(props) {
  
    const sortingFunction = (a, b) => {
        // if (a.s < b.s) {
        //     return -1
        // } else if (a.s > b.s) {
        //     return 1
        // } else {
        //     return 0
        // }
        return (a.s < b.s) ? 1 : (a.s > b.s) ? -1 : 0
    }

  return (
    <div className='scoresContainer'>
        <h1>High Scores per Country</h1>
        {props.allCountryScores.map((score) => {
            return (
                <div className='scoreName'>
                        <h2>
                            {`HIGH SCORES: ${score.name}`}
                        </h2>
                {score.scores.sort(sortingFunction).map((x) => {
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
