import { useEffect, useState } from 'react';
import Button from '../components/common/Button';

const MyComponentPage = () => {

  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const firstButton = document.querySelector('button');
    if (firstButton) {
      firstButton.addEventListener('click', handleClick);
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      if (index !== 0) {
        button.classList.add('btn-disabled');
      }
    });

    return () => {
      if (firstButton) {
        firstButton.removeEventListener('click', handleClick);
      }
    };
  }, []);

  const handleClick = () => {
    setCount((prevState) => prevState + 1)
  };

  return (
    <div className='grid gap-5 py-section'>
      <p className='flex-center gap-5'>Button Click: <span className='text-xl text-primary'>{count}</span></p>

      {
        [1, 2, 3, 4, 5].map((item: number, i: number) => {
          return (
            <Button key={i}><span>Button {item}</span></Button>
          )
        })
      }
    </div>
  );
};

export default MyComponentPage;