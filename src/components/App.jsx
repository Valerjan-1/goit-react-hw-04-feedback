import { useState } from 'react';
import Section from './Section/Section';
import css from './FeedbackWidget/FeedbackWidget.module.css';
import FeedbackOptions from './FeedbackWidget/FeedbackWidget';
import TotalStatistics from './Options/Statistics';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setState(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      {state.good + state.neutral + state.bad > 0 ? (
        <Section title="Statistics">
          <TotalStatistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
          />
        </Section>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};
