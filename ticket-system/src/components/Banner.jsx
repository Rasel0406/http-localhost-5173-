import React from "react";
import bannerImage1 from "../assets/Group_1.png";
import bannerImage2 from "../assets/Group_2.png";

function Banner({ inProgressCount = 0, resolvedCount = 0 }) {
const purpleBg = {
  backgroundImage: ` url(${bannerImage2}), url(${bannerImage1}), linear-gradient(to bottom right, rgba(168, 85, 247, 0.85), rgba(126, 34, 206, 0.95))`,
  backgroundPosition: 'left top, right top, center',
  backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
  backgroundSize: 'contain, contain, cover',
};

const greenBg = {
  backgroundImage: `url(${bannerImage2}),url(${bannerImage1}), linear-gradient(to bottom right, rgba(74, 222, 128, 0.85), rgba(20, 184, 166, 0.95))`,
  backgroundPosition: 'left top, right top, center',
  backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
  backgroundSize: 'contain, contain, cover',
};

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* In-Progress Card */}
        <div
          className="rounded-2xl p-10 text-white text-center shadow-lg hover:scale-105 transition duration-300" style={purpleBg}
        >
          <h3 className="text-xl font-medium opacity-90">
            In-Progress
          </h3>

          <p className="text-6xl font-bold mt-4">
            {inProgressCount}
          </p>
        </div>

        {/* Resolved Card */}
        <div
          className="rounded-2xl p-10 text-white text-center shadow-lg hover:scale-105 transition duration-300" style={greenBg}
        >
          <h3 className="text-xl font-medium opacity-90">
            Resolved
          </h3>

          <p className="text-6xl font-bold mt-4">
            {resolvedCount}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Banner;