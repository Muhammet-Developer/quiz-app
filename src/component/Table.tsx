import React from 'react';
import { IAnswer } from '../types/type';

const Table = ({ checkedValuesData }: { checkedValuesData: IAnswer[] }) => {
  return (
    <div className='flex flex-col'>
      <div className='-m-1.5 overflow-x-auto'>
        <div className='p-1.5 min-w-full inline-block align-middle'>
          <div className='overflow-hidden'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                  >
                    QUESTION NUMBER
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                  >
                    Your answer
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                {checkedValuesData.map((item, key) => (
                  <tr key={key}>
                    {item.id === 0 ? (
                      ''
                    ) : (
                      <td className='px-6  py-4 whitespace-nowrap text-sm font-medium text-gray-800 '>
                        {item?.userId}
                      </td>
                    )}
                    {item.id === 0 ? (
                      ''
                    ) : (
                      <td className='px-6  py-4 whitespace-nowrap text-sm font-medium text-gray-800 '>
                        {item.title}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
