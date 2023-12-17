import React from 'react';
import css from './FeedbackWidget.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  return (
    <div className={css.statistics_section}>
      <div className={css.btn_container}>
        {options.map(option => (
          <button
            className={css.btn}
            key={option}
            onClick={() => {
              setSelectedOption(option);
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default FeedbackOptions;
