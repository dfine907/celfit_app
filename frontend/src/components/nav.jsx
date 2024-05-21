


import React, { useState, useEffect } from 'react';

function Delay() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setMessage('Message Appears in 5 sec');
    }, 5000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div id="message">
      {message}
    </div>
  );
}

export default Delay;