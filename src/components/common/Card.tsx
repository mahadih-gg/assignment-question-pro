import React from 'react';

interface PropsType {
  title: string;
  body: string;
}

const Card: React.FC<PropsType> = ({ title, body }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Card;