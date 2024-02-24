import React, { useEffect, useState } from "react";

function NumberCounter() {
  const [start, setStart] = useState(0);
  const [end] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const number = document.querySelector('.number');
      const numberTop = number.getBoundingClientRect().top;
      
      if (window.pageYOffset > numberTop - window.innerHeight / 2) {
        window.removeEventListener('scroll', onScroll);
        const interval = setInterval(() => {
          setStart(prevStart => prevStart + 1);
          if (start === end) {
            clearInterval(interval);
          }
        }, 5);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [start, end]);

  return (
    <div className="section_3">
      <div className="wrapper-count flex-row">
        <div className="item">
          <div className="number" data-max="150">
            <h4>150 <span>+</span></h4>
          </div>
          <p>VISITORS DAILY</p>
        </div>
        <div className="item">
          <div className="number" data-max="100">
            <h4>100 <span>%</span></h4>
          </div>
          <p>POSITIVE FEEDBACK</p>
        </div>
      </div>
      <div className="number">{start}</div>
    </div>
  );
}

export default NumberCounter;

  
