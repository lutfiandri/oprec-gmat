import Chart from '../components/Chart';
import SidebarAltitude from '../components/SidebarAltitude';
import Dummy from '../components/Dummy';

const Page1 = ({ altitude, setAltitude }) => {
  return (
    <div className="px-10 py-8 grid grid-cols-11 w-full text-gray-800 gap-4">
      {/* <div className="row-span-2 col-span-1">
        <SidebarAltitude altitude={altitude} setAltitude={setAltitude} />
      </div>
      <div className="row-span-1 col-span-5">
        <Chart id="yaw" times={1} plus={-0.5} />
      </div>
      <div className="row-span-1 col-span-5">
        <Chart id="pitch" times={1} plus={-0.5} />
      </div>
      <div className="row-span-1 col-span-5">
        <Chart id="roll" times={1} plus={-0.5} />
      </div>
      <Dummy text="3D Model | (Coming Soon)" /> */}
      <SidebarAltitude altitude={altitude} setAltitude={setAltitude} row="2" />
      <Chart id="yaw" times={1} plus={-0.5} />
      <Chart id="pitch" times={1} plus={-0.5} />
      <Chart id="roll" times={1} plus={-0.5} />
      <Dummy text="3D Model | (Coming Soon)" />
    </div>
  );
};

export default Page1;
