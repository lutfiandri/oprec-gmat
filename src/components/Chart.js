const Chart = () => {
  function rand() {
    return Math.random();
  }

  const time = new Date();

  const data = [
    {
      x: [time],
      y: [rand],
      mode: 'lines',
      line: { color: '#80CAF6' },
    },
  ];

  Plotly.newPlot('myDiv', data);

  const cnt = 0;

  setInterval(() => {
    const time = new Date();

    const update = {
      x: [[time]],
      y: [[rand()]],
    };

    const olderTime = time.setMinutes(time.getMinutes() - 1);
    const futureTime = time.setMinutes(time.getMinutes() + 1);

    const minuteView = {
      xaxis: {
        type: 'date',
        range: [olderTime, futureTime],
      },
    };

    Plotly.relayout('myDiv', minuteView);
    Plotly.extendTraces('myDiv', update, [0]);
  }, 1000);
  return <div className="bg-white rounded-md p-2 col-span-5 h-56">chart</div>;
};

export default Chart;
