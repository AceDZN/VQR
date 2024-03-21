import React, { useState } from 'react';

const QuestionInput = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() === '') {
      setErrorMessage('Please enter a question.');
      return;
    }
    onSubmit(question);
    setQuestion('');
    setErrorMessage('');
  };

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="question" className="mb-2 font-bold">
            Ask a question about the image:
          </label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionInput;