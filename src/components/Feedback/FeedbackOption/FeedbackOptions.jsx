import React from 'react';
import Proptypes from 'prop-types';
import Button from './FeedbackOptions.styled';

const FeedbackOptions = ({options,onLeaveFeedback})=>
    Object.keys(options).map(item=>(
        <Button
        type="button"
        name= {item}
        OnClick={()=>onLeaveFeedback(item)}
        key={item}>
            {item}
        </Button>
    ));

 export default  FeedbackOptions;
 
 FeedbackOptions.prototype={
    options:Proptypes.objectOf(Proptypes.number),
    onLeaveFeedback:Proptypes.func.isRequired,
 };