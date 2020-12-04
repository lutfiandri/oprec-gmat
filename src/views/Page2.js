import Chart from '../components/Chart';
import SidebarAltitude from '../components/SidebarAltitude';
import Dummy from '../components/Dummy';

const Page2 = ({ altitude, setAltitude }) => {
  return (
    <div className="px-10 py-8 grid grid-cols-11 w-full text-gray-800 gap-4">
      <SidebarAltitude altitude={altitude} setAltitude={setAltitude} row="2" />
      <Chart id="altitude" times={10} plus={34} row="2" />
      <Chart id="pressure" times={11} plus={112} row="1" />
      <Chart id="temperature" times={3} plus={32} row="1" />
    </div>
  );
};

export default Page2;
