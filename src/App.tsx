import React, { useEffect, useState } from 'react';
import './App.css';
import Questions from './component/Questions';

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className='h-screen bg-gray-100'>
      <div className='flex flex-col justify-center items-center h-screen'>
        {!start && (
          <>
            <h1 className='font-mono text-4xl'>Welcome to the Test</h1>{' '}
            <ul className='font-mono list-disc mt-5'>
              <li>The test consists of a total of 10 questions.</li>
              <li>Each question is 30 seconds long.</li>
              <li>
                Marking will be done after 20 seconds so that you can mark the
                answer.
              </li>
              <li>When the time is up, the next question will be asked.</li>
              <li>There will be no return to the previous question.</li>
              <li>When the test is over, your answers will be shown.</li>
            </ul>
            <p className='font-mono mt-5'>Success :)</p>
            <div>
              <button
                onClick={() => setStart(true)}
                className='bg-blue-500 mt-10 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
              >
                Start Quiz
              </button>
            </div>
          </>
        )}
        {start && <Questions />}
      </div>
    </div>
  );
}

export default App;
