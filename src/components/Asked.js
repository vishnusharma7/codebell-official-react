import React, { useState } from 'react';

const Asked = () => {
  const [activeQuestions, setActiveQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (activeQuestions.includes(index)) {
      setActiveQuestions(activeQuestions.filter((item) => item !== index));
    } else {
      setActiveQuestions([...activeQuestions, index]);
    }
  };

  return (
    <div>
      <div className="grey-section">
        <section className="asked-question-container" id="Faq">
          <div className="asked-content">
            <div className="section-title">
              <div className="title-1">Asked Questions</div>
              <div className="title-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </div>
            <div className="asked-bottom-element">
              {[0, 1, 2, 3, 4].map((index) => (
                <div className={`question-box ${activeQuestions.includes(index) ? 'active' : ''}`} key={index}>
                  <div className="question-wraper" onClick={() => toggleQuestion(index)}>
                    <div className="question">What Shipping Methods Are Available?</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-plus-lg" viewBox="0 0 16 16">
                      <path fillRule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>
                  </div>
                  <div className="ans">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Asked;
