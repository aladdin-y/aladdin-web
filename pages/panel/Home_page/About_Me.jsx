import React, { useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState('');

  const handleUpdate = (newData) => {
    setData(newData);
  };

  return (
    <div className={"panelcontainer"}>
      <div className={"control"}>
        {/* <ControlForm onUpdate={handleUpdate} /> */}
        testt
      </div>
      <div className={"display"}>
        testtt
        {/* <DisplayData data={data} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
