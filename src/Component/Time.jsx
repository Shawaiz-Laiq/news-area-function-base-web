
import React, {useEffect, useState} from 'react';
function Time() {
  
  const [today, settoday] = useState(new Date())
  
  useEffect(() => {
    const interval = setInterval(() => {
      settoday( new Date());
    }, 1000);
  
    return () => {
       clearInterval(interval());
    }
  }, [])
  
    const day = today;
    const date = day.getDate();
    const month = day.getMonth() + 1;
    const year = day.getFullYear();
    const hours = day.getHours();
    const minutes = day.getMinutes();
    const seconds = day.getSeconds();

    return (
      <center className="d-flex justify-content-center my-3">
        <h2>{`${date}-${month}-${year}`}</h2>
        <h4 className="mx-3">
          {`${hours}:${minutes}:${seconds}`}
        </h4>
      </center>
    );
  
}

export default Time;
