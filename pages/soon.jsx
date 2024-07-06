import img from '/public/img/worksoon.json';
import Lottie from 'lottie-react';
import { useRouter } from "next/router";
import { useState } from "react";
const UnkownPage = () => {
    let messages = [
        'Have you lost your way, kiddo?',
        'Damn it! This dead-end road.',
        'The Aurors blocked this road, Harry!'
    ];
    const [clicked, setClicked] = useState(false);
    const router = useRouter();
    return (
        <>
            <div className="max-w-7xl text-center py-20 mx-auto">
        <div className="flex w-full justify-center">
      {/* <img width="400" src="/img/bck3.png" /> */}
      <div className="w-96">

      <Lottie  animationData={img} loop={true} />
      </div>

      </div>
            <h1 className="text-4xl font-extrabold text-white">coming soon. </h1>
            <p className="text-xl font-thin text-white text-opacity-75">This page is currently under construction</p>
            <button
                className="w-42 shadow-lg mt-2 shadow-amber-600/20 rounded-xl py-2 font-medium px-7 text-zinc-900 bg-amber-400 hover:bg-opacity-50 transition duration-200"
                onClick={() => {
                    setClicked(true);
                    router.back();
                }}
            >
                {clicked ? <i className="fad fa-spinner-third fa-spin text-white" /> : <><i className='fa fa-arrow-left mr-2' />Go Back</>}
            </button>
        </div></>
    )
}

export default UnkownPage;

