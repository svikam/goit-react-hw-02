// import s from './Feedback.module.css';
const Feedback = ({ good, neutral, bad }) => {
    return (
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
        </ul>
    );
};

export default Feedback