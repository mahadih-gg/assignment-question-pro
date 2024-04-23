import React from 'react';

interface PropsType {
  data: { [key: string]: string | number }[];
  setId: (value: string | number) => void;
  valueKey: string;
  optionKey: string;
}

const Select: React.FC<PropsType> = ({ data, setId, valueKey, optionKey }) => {

  return (
    <>
      <input list="brow" />
      <select onChange={(e) => setId(e.target.value)} className='w-56 outline-none border border-secondary p-2 rounded-md truncate ...'>
        <option value="">Select...</option>
        {
          data?.map((item, i: number) => {
            return (
              <option
                key={i}
                value={item[valueKey]}
              >
                {item[optionKey]}
              </option>
            )
          })
        }
      </select>
    </>
  );
};

export default Select;