const SidebarAltitude = ({ altitude, row }) => {
  return (
    <div
      className={`bg-white flex flex-col items-center rounded-md p-2 h-full w-full ${
        row === '2' ? 'row-span-2' : 'row-span-1'
      }`}
    >
      <div className="text-center">{altitude} m</div>
      <div className="bg-gray-800 w-1 h-full my-4" />
    </div>
  );
};

export default SidebarAltitude;
