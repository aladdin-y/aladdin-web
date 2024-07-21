import React from 'react';

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 p-4 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="relative">
        <img src="profile_image_url" alt="Profile" className="w-32 h-32 rounded-full border-4 border-gray-800" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white text-lg font-semibold p-2">
          <p>ولا مزيت في بالك سحاب يُهمر من فوق<br/>يَرتجع محمل الغمر القديم و يَعيش أهدابك</p>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <a href="https://discord.com" className="text-white">
          <img src="discord_icon_url" alt="Discord" className="w-10 h-10" />
        </a>
        <a href="https://steam.com" className="text-white">
          <img src="steam_icon_url" alt="Steam" className="w-10 h-10" />
        </a>
        <a href="https://paypal.com" className="text-white">
          <img src="paypal_icon_url" alt="PayPal" className="w-10 h-10" />
        </a>
        <a href="https://github.com" className="text-white">
          <img src="github_icon_url" alt="GitHub" className="w-10 h-10" />
        </a>
        <a href="https://spotify.com" className="text-white">
          <img src="spotify_icon_url" alt="Spotify" className="w-10 h-10" />
        </a>
        <a href="https://valorant.com" className="text-white">
          <img src="valorant_icon_url" alt="Valorant" className="w-10 h-10" />
        </a>
      </div>
      <div className="mt-4 text-white text-sm font-mono">
        <pre>
{`
           ____  ____  ___ ____ 
          / ___||  _ \\|_ _|  _ \\ 
          \\___ \\| | | || || | | |
           ___) | |_| || || |_| |
          |____/|____/|___|____/ 
`}
        </pre>
      </div>
    </div>
  );
};

export default ProfileCard;
