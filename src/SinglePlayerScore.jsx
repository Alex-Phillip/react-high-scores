import React from 'react';

const SinglePlayerScore = (props) =>
    <div>
        {`${props.allCountryScores[0].scores[0].n} ${props.allCountryScores[0].scores[0].s}`}
    </div>

export default SinglePlayerScore;