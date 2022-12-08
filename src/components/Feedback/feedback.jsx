import {Component} from 'react';
import Section from './Section/Section'
import FeedbackOptions from '../Feedback/FeedbackOption/FeedbackOptions'
import Notification from '../Feedback/Notification/Notification';
import Statistics from '../Feedback/Statistics/Statistics';

class Feedback extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0
        }
     clickOnBtn = feedback=>{
        this.setState(prevState=>{
            return{
                [feedback]:prevState[feedback]+1,
            };
        });
     };
      
     countTotalFeedback=() =>{
      return Object.values(this.state).reduce((total,feedback)=>{
        return total+feedback;
    },0);
    };

    countPositiveFeedbackPercentage = () => {
        return `${
          Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0
        }%`;
      };
     

    render(){
        return(
            <div>
                <Section title='Please leave feedback'>
                <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.clickOnBtn}
              /> 
             </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback()?(
                        <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}   
                        bad={this.state.bad}  
                        totalFeedbacks={this.countTotalFeedback()} 
                        positiveFeedback={this.countPositiveFeedbackPercentage()}
                        />
                    ):(
                        <Notification text="There is no feedback"/>
                    )}
            
                </Section>
            </div>
        )
    }
}

export default Feedback;