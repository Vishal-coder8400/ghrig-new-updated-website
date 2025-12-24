"use client";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

export default function VisionMission() {
  const cards = [
    {
      title: "Our Vision",
      icon: (
        <FaRegLightbulb
          className="
            text-[28px]
            text-transparent
            bg-clip-text
            bg-[linear-gradient(90deg,#8A2E55_0%,#6F3B6D_45%,#4B3E6D_100%)]
          "
        />
      ),
      text: "To be the Technology oriented HR Recruitment Marketplace.",
    },
    {
      title: "Our Mission",
      icon: (
        <FaRocket
          className="
            text-[28px]
            text-transparent
            bg-clip-text
            bg-[linear-gradient(90deg,#8A2E55_0%,#6F3B6D_45%,#4B3E6D_100%)]
          "
        />
      ),
      text: "To create and provide a platform for the new age Gig HR (gHRig) workforce which is Respectable, Flexible with High Earning potential and provide HR Solutions to the Corporate World.",
    },
  ];

  return (
    <div className="w-full bg-[#F5F2FF] py-20 flex flex-col items-center px-4 -mt-16">
      {/* ABOUT US CARD */}
      <div className="w-full max-w-6xl mx-auto mb-12 relative transition-all duration-300 hover:-translate-y-2">
        {/* GRADIENT BOTTOM BAR */}
        <div
          className="
            absolute bottom-0 left-0 w-full 
            h-[70px]
            rounded-b-[30px]
            translate-y-3
            bg-[linear-gradient(90deg,#8A2E55_0%,#6F3B6D_45%,#4B3E6D_100%)]
          "
        />

        {/* WHITE CARD */}
        <div
          className="
            relative bg-white  
            rounded-[30px]
            p-8
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
            transition-all duration-300
          "
        >
          {/* GRADIENT BORDER */}
          <div
            className="
              absolute inset-0 rounded-[30px] p-[1.5px]
              bg-[linear-gradient(90deg,#8A2E55_0%,#6F3B6D_45%,#4B3E6D_100%)]
              -z-10
            "
          />

          <h2 className="text-[40px] font-bold text-black text-center py-2">
            About Us.
          </h2>

          <p className="text-[16px] text-gray-700 leading-[24px]">
            About Us Incepted in 2025 and based out from Noida, gHRig.com is
            formed by a group of like minded HR professionals with experience in
            Corporate world in Telecom, Banking, Financial Services and
            Insurance sectors.gHRig.com has a clear cut vision, capability and
            expertise to provide entire bouquet of HR Services before its
            clients by understanding the practical needs of the Corporate
            world.gHRig.com brings before you all a platform where the skilled
            talent from the country can meet up with their dream jobs from large
            Corporates who are scouting for the talented manpower pool from the
            market.Parallelly we assist our Clients by matching the right
            individuals with right skill sets for their open positions. We act
            as a catalyst before our Clients where our expert team works closely
            with them thereby understanding their requirement minutely to
            provide the best solutions from the market.Through us our Clients
            can bring in more efficiency towards meeting their HR related
            challenges.
          </p>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {cards.map((item, i) => (
            <div
              key={i}
              className="relative w-full transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02]"
            >
              {/* GRADIENT BOTTOM BAR */}
              <div
                className="
                  absolute bottom-0 left-0 w-full 
                  h-[70px]
                  rounded-b-[30px]
                  translate-y-3
                  bg-[linear-gradient(90deg,#8A2E55_0%,#6F3B6D_45%,#4B3E6D_100%)]
                "
              />

              {/* WHITE CARD */}
              <div
                className="
                  relative bg-white  
                  rounded-[30px]
                  p-8
                  flex flex-col justify-between
                  h-full w-full
                  shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
                  transition-all duration-300
                "
              >
                {/* GRADIENT BORDER */}
                <div
                  className="
                    absolute inset-0 rounded-[30px] p-[1.5px]
                    bg-[linear-gradient(90deg,#8A2E55_0%,#6F3B6D_45%,#4B3E6D_100%)]
                    -z-10
                  "
                />

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {item.icon}
                    <h3 className="text-[22px] font-bold text-black">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[16px] text-gray-700 leading-[24px]">
                    {item.text}
                  </p>
                </div>

                <div className="mt-4 text-sm text-transparent">.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
