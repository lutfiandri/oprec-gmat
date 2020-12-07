import { useState, useEffect } from 'react';
import Plotly from 'plotly.js-dist';

const Chart = ({ id, times, plus, row, setAltitude }) => {
  const [last, setLast] = useState(0);
  const [counter, setCounter] = useState(0);

  const rand = () => {
    return Math.random() * times + plus;
  };

  const goInterval = () => {
    setInterval(() => {
      setCounter(rand());
    }, 200);
  };

  useEffect(() => {
    const initTime = new Date();

    const data = [
      {
        x: [initTime],
        y: [last],
        mode: 'lines',
        line: { color: '#4B5563' },
      },
    ];

    const layout = {
      autosize: true,
      margin: {
        l: 40,
        r: 10,
        b: 40,
        t: 20,
        pad: 0,
      },
      // paper_bgcolor: '#7f7f7f',
      // plot_bgcolor: '#c7c7c7',
    };

    Plotly.newPlot(id, data, layout);
    goInterval();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const time = new Date();

    const temp = rand().toFixed(2);
    setLast(temp);
    if (id === 'altitude') {
      setAltitude(temp);
    }

    const update = {
      x: [[time]],
      y: [[temp]],
    };

    const olderTime = time.setSeconds(time.getSeconds() - 60);
    const futureTime = time.setSeconds(time.getSeconds() + 60);

    const minuteView = {
      xaxis: {
        // type: 'date',
        range: [olderTime, futureTime],
      },
      // yaxis: {
      //   range: [-180, 180],
      // },
    };

    Plotly.relayout(id, minuteView);
    Plotly.extendTraces(id, update, [0]);
    // eslint-disable-next-line
  }, [counter]);

  // const rows = () => {
  //   return
  // }

  return (
    <div
      className={`bg-white rounded-md p-2 w-full h-full col-span-5 ${
        row === '2' ? 'row-span-2' : 'row-span-1'
      }`}
    >
      <div className="h-6 text-center">
        {id} : {last}
      </div>
      <div className={`${row === '2' ? 'h-134' : 'h-60'}`}>
        <div className="w-full h-full" id={id} />
      </div>
    </div>
  );
};

export default Chart;
