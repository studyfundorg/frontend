import { allImages } from "@/public/images/images";
import Image, { StaticImageData } from "next/image";
import React from "react";

const WhyStudy = () => {
  const whyData = [
    {
      title: "Donate & Earn Entries",
      subtitle: `Every donation of 10 USDT or more gives you an entry into a raffle with huge cash prizes.`,
      animation: (
        <AnimatedImages
          images={[
            {
              imgUrl: allImages.why1,
              style: "group-hover:opacity-0",
            },
            {
              imgUrl: allImages.why1b,
              style: "opacity-0  group-hover:opacity-100",
            },
          ]}
          className="top-0 -left-10 h-[177px] w-[257px] group-hover:top-5 group-hover:left-3 group-hover:-rotate-12"
        />
      ),
    },
    {
      title: "Win Rewards",
      subtitle: `A prize pool starting at 5,000 USDT grows as more donors participate, benefiting students and contributors. `,
      animation: (
        <AnimatedImages
          images={[
            {
              imgUrl: allImages.why2,
              style: "group-hover:opacity-0 ",
            },
            {
              imgUrl: allImages.why2b,
              style: "opacity-0  group-hover:opacity-100 ",
            },
          ]}
          className="top-0 right-0 left-0 h-[177px] w-[257px] group-hover:-top-2 group-hover:rotate-20"
        />
      ),
    },
    {
      title: "Fund Scholarships",
      subtitle: `45% of all donations go directly to students, covering tuition fees and essential expenses.`,
      animation: (
        <AnimatedImages
          images={[
            {
              imgUrl: allImages.why3,
              style: "group-hover:opacity-0",
            },
            {
              imgUrl: allImages.why3b,
              style: "opacity-0  group-hover:opacity-100",
            },
          ]}
          className="top-0 right-5 h-[219px] w-[208px] group-hover:-top-4 group-hover:right-10 group-hover:w-[230px] group-hover:rotate-12"
        />
      ),
    },
    {
      title: "Transparent & secure",
      subtitle: `Built on blockchain, ensuring fair raffle distributions, and soulbound NFTs track scholarship recipients' progress.`,
      animation: (
        <AnimatedImages
          images={[
            {
              imgUrl: allImages.why4,
              style: "  group-hover:opacity-0",
            },
            {
              imgUrl: allImages.why4b,
              style: "opacity-0  group-hover:opacity-100",
            },
          ]}
          className="top-0 right-0 h-[240px] w-[211px] group-hover:-top-5 group-hover:right-3 group-hover:w-[240px] group-hover:-rotate-12"
        />
      ),
    },
  ];

  return (
    <section className="container flex flex-col gap-4 py-20">
      <article
        data-aos="fade-down"
        data-aos-duration="1000"
        className="mx-auto flex w-11/12 max-w-[744px] flex-col items-center gap-3 text-center"
      >
        <h3>Why StudyFund?</h3>

        <p className="text-lg text-[#545659]">
          StudyFund is a revolutionary educational funding protocol leveraging{" "}
          <b>blockchain technology</b> and <b>crowdfunding</b> to provide
          transparent, incentive-based <b>student support.</b>
        </p>
      </article>

      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {whyData.map(({ title, subtitle, animation }, idx) => (
          <li
            key={idx}
            className="shadow-3xl group hover:shadow-4xl relative flex h-[382px] flex-col justify-end overflow-hidden rounded-3xl bg-[#ffffff4e] px-4 py-5 text-xl font-semibold text-black transition-all duration-500 ease-in-out hover:bg-white lg:text-2xl"
          >
            {animation}

            <article>
              <span>{title}</span>
              <p className="!mt-3">{subtitle}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyStudy;

export const AnimatedImages = ({
  images,
  imgClasses,
  className,
}: {
  images: { style: string; imgUrl: StaticImageData }[];
  imgClasses?: string;
  className: string;
}) => {
  return (
    <>
      {images.map(({ imgUrl, style }, idx) => (
        <figure
          key={idx}
          className={`${className} ${style} absolute !m-0 !p-0 transition-all duration-500 ease-in-out`}
        >
          <Image
            src={imgUrl}
            alt=""
            className={`${imgClasses} className="!h-full object-contain" !w-full`}
          />
        </figure>
      ))}
    </>
  );
};
