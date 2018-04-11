import React from 'react';

const Headline = (props) => {
    const headline = props.headline;
    return (
        <div className='headline'>{headline}</div>
    );

}

export default Headline;