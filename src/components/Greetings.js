import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingsSlice';

function Greetings() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);
  const greetMe = greetingsData[Math.floor(Math.random() * greetingsData.length)];

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div className="center">
      {greetMe && <h2>{greetMe.content}</h2>}
    </div>
  );
}

export default Greetings;
