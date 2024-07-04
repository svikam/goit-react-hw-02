import { useState } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';

const App = () => {
    const [reviews, setReviews] = useState(
        {
            good: 0,
            neutral: 0,
            bad: 0
        }
    );
    const updateFeedback = feedbackType => {
        setReviews(prev => ({
            ...prev,
            [feedbackType]: prev[feedbackType] + 1
        }));
    }
    
    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback}
                
            />
            <Feedback
                good={reviews.good}
                neutral={reviews.neutral}
                bad={reviews.bad}
            />
        </>
    );
};

export default App;