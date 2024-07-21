import Lottie from 'lottie-react';
import animationData from '/public/img/deal.json';
import Link from 'next/link'
export default function Partners() {
    const servers = [
        { name: "Black Hole", description: "testtt",img: "https://cdn.discordapp.com/icons/1080952839934844950/a_a9b7b9b0633df9384ae0c2075d6eaca3.png",link: "" },
        { name: "WH | COMMUNITY", description: "testtt", img: "https://cdn.discordapp.com/icons/981887391470059560/0a28910351ed73e7a0dfe75f29628133.png"  , link: ""  },
        { name: "Nata Hosting",   description: "testtt", img: "https://cdn.discordapp.com/avatars/1195063445859614831/aa62b5078b4ff00c111ac9e74b086216.webp", link: ""  },
        { name: "Black Hole", description: "testtt",img: "https://cdn.discordapp.com/icons/1080952839934844950/a_a9b7b9b0633df9384ae0c2075d6eaca3.png",link: "" },
        { name: "WH | COMMUNITY", description: "testtt", img: "https://cdn.discordapp.com/icons/981887391470059560/0a28910351ed73e7a0dfe75f29628133.png"  , link: ""  },
        { name: "Nata Hosting",   description: "testtt", img: "https://cdn.discordapp.com/avatars/1195063445859614831/aa62b5078b4ff00c111ac9e74b086216.webp", link: ""  },
      
      ];


    return (
 <>       <main data-aos="fade-down">
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      {/* <img width="400" src="/img/undraw_agreement_re_d4dv.svg" /> */}
      <div className="w-96"><Lottie  animationData={animationData} loop={true} /></div>

      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
  {servers.map((server, idx) => (
    <div className="flex flex-col justify-center text-white rounded" key={idx}>
      <a href={server.link} className="flex-1">
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-amber-400/80 to-amber-900/10 p-3 rounded-xl">
          <img className="rounded-xl h-32 w-32 md:h-auto md:w-auto md:rounded-l-xl mb-4 md:mb-0 md:mr-4" src={server.img} alt={server.name} />
          <div className="flex-1">
            <h1 className="leading-none text-3xl font-bold text-white mb-2">{server.name}</h1>
            <p className="font-normal text-sm text-justify">
{server.description}
            </p>
          </div>
        </div>
      </a>
    </div>
  ))}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 mx-auto">
           <Link href="/soon">
            <a  className="mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white">
             Become a Partner <i class="fa-solid  fa-handshake text-2xl"></i> 
            </a></Link>
        </div>
</div>


                <div className="py-10"></div>
        </main>
        </>
    );
};
