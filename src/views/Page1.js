import Chart from '../components/Chart';
import SidebarAltitude from '../components/SidebarAltitude';

const Page1 = () => {
  return (
    <div className="px-10 py-8 grid grid-cols-11 w-full text-gray-800 gap-5">
      <SidebarAltitude />
      <Chart />
      <Chart />
      <Chart />
      <Chart />
    </div>
  );
};

export default Page1;
