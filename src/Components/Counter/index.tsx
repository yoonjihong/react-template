import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div>
      <button onClick={increment}>빼기</button>
      {count}
      <button onClick={decrement}>더하기</button>
    </div>
  );
};

export default Counter;
