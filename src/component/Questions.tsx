import React, { useEffect, useState, useMemo } from 'react';
import { quizQuenstion } from '../service/questions.service';
import { IAnswer, Iprops } from '../types/type';
import Table from './Table';
const Questions = () => {
  const [allData, setAllData] = useState<Iprops[]>([]);
  const [time, setTime] = useState(5);
  const [index, setIndex] = useState(0);
  const [tenData, setTenData] = useState(10);
  const [disableds, setDisableds] = useState(false);
  const [checkedValuesData, setCheckedValuesData] = useState<IAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState('');
  const defaultSliceData = allData?.slice(index, tenData);
  const questionTitle = defaultSliceData?.find(
    (index) => index?.id === index.id
  );

  const [checkedValues, setCheckedValues] = useState<IAnswer>({
    id: 0,
    title: '',
  });

  const fetchQuizData = async () => {
    const data = await quizQuenstion.fetchQuiz();
    setAllData(data);
  };

  useEffect(() => {
    fetchQuizData();
    let timer: any;
    if (time > 0) {
      timer = setInterval(() => {
        setTime((seconds) => seconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  useEffect(() => {
    if (time === 3) {
      setDisableds(true);
    }
    if (time === 0) {
      setIndex(index + 10);
      setTenData(tenData + 10);
      setCheckedValuesData((prevArray) => [...prevArray, checkedValues]);
      setSelectedOption('');
      setTime(5);
      setCheckedValues({
        id: 0,
        title: '',
        userId: questionTitle?.userId,
      });
      setDisableds(false);
    }
    if (tenData === 110) {
      setTime(0);
    }
  }, [time]);

  const handleChange = (e: any, id: number, userId: number) => {
    const { value } = e.target;
    setSelectedOption(value);
    setCheckedValues({
      ...checkedValues,
      id: id,
      title: value,
      userId: questionTitle?.userId || userId,
    });
  };

  return (
    <>
      {tenData < 110 && (
        <>
          <div className='w-[50%]'>
            <p className='text-center mb-5 font-bold font-mono text-8xl text-red-950'>
              {time}
            </p>
            <div className=' text-white mi-h-[80px] flex bg-[#9c9b9b] px-5 py-2 rounded-tl-3xl rounded-br-3xl'>
              <p>{questionTitle?.userId}.</p>
              <p className='ml-2 text-lg'>{questionTitle?.body}</p>
            </div>
            {defaultSliceData?.slice(1, 5).map((item, key) => (
              <div
                key={key}
                className={
                  !disableds
                    ? 'cursor-not-allowed ml-5 max-w-96 border border-blue-300  rounded-bl-3xl rounded-tr-3xl mt-5 flex hover:bg-slate-200'
                    : 'max-w-96 border border-blue-300  rounded-bl-3xl rounded-tr-3xl mt-5 flex hover:bg-slate-200'
                }
              >
                <div className=' flex justify-center items-center min-h-[50px]'>
                  <input
                    type='radio'
                    onChange={(e) => handleChange(e, item.id, item.userId)}
                    id={item?.title}
                    value={item?.title}
                    className={!disableds ? 'cursor-not-allowed ml-5' : 'ml-5'}
                    disabled={!disableds}
                    checked={selectedOption === item?.title}
                    name='form'
                  />
                  <label
                    className={
                      !disableds
                        ? 'cursor-not-allowed ml-5 text-lg'
                        : 'ml-5 text-lg'
                    }
                    htmlFor={item?.title}
                  >
                    {item.title}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {tenData === 120 && <Table checkedValuesData={checkedValuesData} />}
    </>
  );
};

export default Questions;
