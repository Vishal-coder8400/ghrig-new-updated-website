import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// const companyCategories = [
//   {
//     title: "MNCs",
//     hiringCount: "2.1K+ are actively hiring",
//     images: ["/assets/images/mnc1.png", "/assets/images/mnc2.png", "/assets/images/mnc3.png"],
//   },
//   {
//     title: "Edtech",
//     hiringCount: "2.1K+ are actively hiring",
//     images: ["/assets/images/edTech1.png", "/assets/images/edTech2.png", "/assets/images/edTech3.png"],
//   },
//   {
//     title: "Healthcare",
//     hiringCount: "2.1K+ are actively hiring",
//     images: ["/assets/images/Healthcare1.png", "/assets/images/Healthcare2.png", "/assets/images/Healthcare3.png"],
//   },
//   {
//     title: "Edtech",
//     hiringCount: "2.1K+ are actively hiring",
//     images: ["/assets/images/edTech1.png", "/assets/images/edTech2.png", "/assets/images/edTech3.png"],
//   },
//   {
//     title: "MNCs",
//     hiringCount: "2.1K+ are actively hiring",
//     images: ["/assets/images/mnc1.png", "/assets/images/mnc2.png", "/assets/images/mnc3.png"],
//   },
// ];

export const HiringCompaniesWrapperSection = () => {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16 px-4 sm:px-8 md:px-16 py-12 sm:py-16 lg:py-15 w-full bg-white">
      <header className="flex flex-col items-center gap-4 sm:gap-6 md:gap-9 mb-2 sm:mb-2">
 <h2
  className="
    [font-family:'Plus_Jakarta_Sans',Helvetica]
    font-semibold
    text-2xl sm:text-3xl md:text-4xl
    text-center
    tracking-[-1.80px]
    leading-tight sm:leading-snug md:leading-[1.2]
    py-1
    bg-gradient-to-r
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
    bg-clip-text
    text-transparent
  "
>
  We are currently hiring for below sectors
</h2>



        {/* <p className="max-w-3xl [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#141414b2] text-sm sm:text-base md:text-base text-center tracking-[-0.48px] leading-5 sm:leading-6">
         
        </p> */}
      </header>

      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-[35px] w-full max-w-7xl justify-items-center">
        {companyCategories.map((category, index) => (
          <Card
            key={`category-${index}`}
            className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-[27px] p-4 sm:p-6 lg:p-[18px] bg-white rounded-2xl border border-[#dddddd] w-full max-w-sm lg:max-w-none"
          >
            <CardContent className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-[18px] p-0 w-full">
              <div className="flex flex-col items-start gap-2 sm:gap-2.5 w-full">
                <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#141414b2] text-lg sm:text-xl tracking-[-0.60px] leading-5">
                  {category.title}
                </h3>

                <div className="flex items-center gap-2 sm:gap-[18px] w-full bg-white">
                  <div className="w-2 h-2 sm:w-[9px] sm:h-[9px] bg-[#6eeb26] rounded sm:rounded-[4.5px]" />

                  <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#141414b2] text-xs sm:text-sm tracking-[-0.42px] leading-4 sm:leading-[16.1px] whitespace-nowrap">
                    {category.hiringCount}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 lg:gap-[18px] w-full">
                {category.images.map((image, imgIndex) => (
                  <img
                    key={`image-${index}-${imgIndex}`}
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px] rounded-lg border border-[#dddddd] object-cover flex-shrink-0"
                    alt="Company logo"
                    src={image}
                  />
                ))}
              </div>
              <Button className="h-auto justify-center gap-2.5 px-4 sm:px-5 py-2.5 bg-[#6945ed] rounded-full border-none cursor-pointer hover:bg-[#5736d7] mt-2 w-full sm:w-auto">
                <span className="[font-family:'SF_Pro-Semibold',Helvetica] font-normal text-white text-xs sm:text-sm tracking-[-0.56px]">
                  View All
                </span>
                <ChevronRightIcon className="w-1.5 h-2.5 sm:w-[5.5px] sm:h-[9.5px] text-white" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </section>
  );
};