import React from 'react';
import Breadcrumbs from "/components/Breadcrumbs";
const MainWidg = ({info,breadcrumbsPaths}) => {
  
  return (        <div>
    <div className="flex w-full justify-center py-20">
      

  </div>
  <h1 className="py-7 animateHeader text-4xl font-extrabold text-left text-white">
                <i className={`${info.icon} text-amber-400 mr-2`} />
                {info.name}
            </h1>
            <div className="mx-5">

            <Breadcrumbs  paths={breadcrumbsPaths} />
            </div>

            </div>

  );
};

export default MainWidg;
