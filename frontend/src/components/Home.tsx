'use client';

import React, { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Charts from './Charts';

export default function Home() {
  const placeHolderText = 'Lay it out!';
  const MIN_DELAY = 50;
  const MAX_DELAY = 90;
  const [placeholder, setPlaceholder] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    let isCancelled = false;
    function getRandomDelay() {
      return Math.floor(
        Math.random() * (MAX_DELAY - MIN_DELAY + 1) + MIN_DELAY,
      );
    }
    function animate(index: number) {
      if (isCancelled) return;
      if (index > placeHolderText.length) {
        setTimeout(() => {
          if (!isCancelled) animate(0);
        }, 1000);
        return;
      }
      setPlaceholder(placeHolderText.slice(0, index));
      setTimeout(() => animate(index + 1), getRandomDelay());
    }
    animate(0);
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="relative z-10">
      {/* Chart */}
      <Charts />
      {/* Journal  */}
      <section className="flex flex-col items-center mt-20">
        <h2 className="text-black text-3xl font-semibold ">How's it going?</h2>
        <TextareaAutosize
          className="text-center border outline-1 rounded p-4 mt-4"
          minRows={1}
          maxRows={10}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ width: '100%', resize: 'none' }}
        />
      </section>
      <section className="flex flex-col items-center mt-20">
        <h2 className="text-black text-3xl font-semibold ">Entries</h2>
      </section>
    </div>
  );
}
