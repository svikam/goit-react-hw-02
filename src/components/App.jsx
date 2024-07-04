import { useEffect, useState } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

const App = () => {
    const [reviews, setReviews] = useState(() => {
        const saveData = JSON.parse(window.localStorage.getItem('reviews'));
        if (saveData) {
            return saveData;
        }
        return {
            good: 0,
            neutral: 0,
            bad: 0
        };
    });
    const updateFeedback = feedbackType => {
        setReviews(prev => ({
            ...prev,
            [feedbackType]: prev[feedbackType] + 1
        }));
    };
    const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
    const handleReset = () => {
        setReviews({
            good: 0,
            neutral: 0,
            bad: 0
        });
    };
    useEffect(() => {
        window.localStorage.setItem('reviews', JSON.stringify(reviews))
    }, [reviews]);
    return (
        <>
            <Description />
            <Options
                updateFeedback={updateFeedback}
                handleReset={handleReset}
                totalFeedback={totalFeedback}
            />
            {totalFeedback > 0 ? (
                <Feedback
                good={reviews.good}
                neutral={reviews.neutral}
                bad={reviews.bad}
                total={totalFeedback}
                positive={Math.round((reviews.good / totalFeedback) * 100)}
                />
            ) : (
                <Notification />
            )}
        </>
    );
};

export default App;