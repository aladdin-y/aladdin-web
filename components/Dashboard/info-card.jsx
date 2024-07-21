import React from 'react';

export default function InfoCard({ info }) {
  return (
    <>
      <div>
        <div className="text-white text-center rounded-xl">
          <p className="text-2xl font-semibold mt-6">
            <i className={`${info.icon} text-2xl text-amber-500`}></i> {info.name}
          </p>
          <p className="text-amber-500 font-semibold line-clamp-4 text-4xl mb-5">
            {info.text}
          </p>
        </div>
      </div>
    </>
  );
}
