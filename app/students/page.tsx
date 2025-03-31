import Image from "next/image";
import { allImages } from "@/public/images/images";
import Button from "@/components/ui/Button";
import React from "react";
import { studentFaqData, whyStudentData } from "@/utils/constant";
import Accordion from "@/components/main/faqElements/Accordion";
import { AnimatedImages } from "@/components/main/WhyStudy";

export default function page() {
  const whyData = [
    {
      title: "No Hidden Criteria",
      subtitle: `All students have an equal chance.`,
      animation: (
        <AnimatedImages
          images={[
            {
              imgUrl: allImages.swhyb,
              style: "group-hover:opacity-0",
            },
            {
              imgUrl: allImages.swhyb2,
              style: "opacity-0  group-hover:opacity-100",
            },
          ]}
          className="top-0 left-3 h-[178px] w-[194px] group-hover:top-5 group-hover:left-14 group-hover:w-[220px]"
        />
      ),
    },
    {
      title: "No Middlemen",
      subtitle: `100% secure and blockchain-verified.`,
      animation: (
        <AnimatedImages
          images={[
            {
              imgUrl: allImages.swhya,
              style: "group-hover:opacity-0 ",
            },
            {
              imgUrl: allImages.swhya1,
              style: "opacity-0  group-hover:opacity-100 ",
            },
          ]}
          className="top-0 right-6 h-[187px] w-[178px] group-hover:top-9 group-hover:right-20 group-hover:w-[200px]"
        />
      ),
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <section className="studentHero flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <article
          data-aos="fade-down"
          data-aos-duration="1000"
          className="container"
        >
          <article className="flex max-w-3xl flex-col gap-3">
            <h1>Apply for a Blockchain Powered Scholarship Today</h1>

            <p className="text-lg text-[#545659]">
              No Stress. No Bias. Just Fair Funding.
            </p>
            <Button className="pry-btn mt-7 w-fit">Apply today</Button>
          </article>
        </article>
      </section>

      <section className="my-10 flex flex-wrap justify-between gap-10 rounded-3xl py-10">
        <figure
          className="w-full lg:w-5/12"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Image src={allImages.whyStudent} alt="" />
        </figure>{" "}
        <article
          className="flex-1 px-3 lg:px-10"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <article>
            <h3>What is StudyFund?</h3>
            <p>
              StudyFund is revolutionizing university scholarships using
              blockchain technology to ensure transparency, fairness, and
              accessibility. No matter your background, you can apply in minutes
              and get the funding you need to succeed in school.
            </p>
          </article>
          <ul className="mt-10 space-y-6 px-5">
            {whyStudentData.map(({ title, subtitle, imgUrl }, idx) => (
              <li
                key={idx}
                className="flex gap-4 rounded-2xl border border-[#F1F2F3] px-4 py-5 text-xl font-semibold text-black lg:text-2xl"
              >
                <figure className="size-14">
                  <Image src={imgUrl} alt="" />
                </figure>
                <article>
                  <span>{title}</span>
                  <p className="!mt-1 !text-base">{subtitle}</p>
                </article>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section
        id="how-it-works"
        className="mt-20 rounded-3xl bg-[#FBFBFB] py-10"
      >
        <article className="text-center">
          <h3>How It Works</h3>
        </article>

        <section className="mt-10 hidden items-center justify-center gap-10 lg:flex">
          <div className="space-y-10">
            <article className="flex items-center justify-end">
              <div className="text-secondary text-end !text-[48px] !font-semibold lg:!text-[120px]">
                01
              </div>
              <div className="ml-10 h-20 w-[1px] bg-[#C0C0C0]"></div>{" "}
            </article>
            <article className="flex items-center justify-end">
              <div className="flex w-full max-w-md flex-col justify-end text-xl font-semibold text-black lg:text-2xl">
                <span>Get Verified</span>
                <p className="!mt-1 !text-base">
                  Our blockchain-powered system ensures fair and tamper-proof
                  selection.
                </p>
              </div>
              <div className="ml-10 h-20 w-[1px] bg-[#C0C0C0]"></div>
            </article>
            <article className="flex items-center justify-end">
              <div className="text-secondary text-end !text-[48px] !font-semibold lg:!text-[120px]">
                03
              </div>
              <div className="ml-10 h-20 w-[1px] bg-[#C0C0C0]"></div>
            </article>
          </div>
          <div className="space-y-14">
            <article className="flex w-full max-w-md flex-col justify-end text-xl font-semibold text-black lg:text-2xl">
              <span>Apply Online</span>
              <p className="!mt-1 !text-base">
                Fill out a simple form in under 5 minutes.
              </p>
            </article>

            <article>
              <div className="text-secondary !text-[48px] !font-semibold lg:!text-[120px]">
                02
              </div>
            </article>

            <article className="flex w-full max-w-md flex-col text-xl font-semibold text-black lg:text-2xl">
              <span>Receive Funds</span>
              <p className="!mt-1 !text-base">
                If selected, your scholarship is disbursed securely with
                guaranteed minimum funding.
              </p>
            </article>
          </div>
        </section>
        <section className="container mt-10 flex flex-col gap-10 lg:hidden">
          <article className="flex items-center justify-center divide-x divide-[#C0C0C0]">
            <div className="text-secondary pr-4 text-end !text-[48px] !font-semibold lg:!text-[120px]">
              01
            </div>
            <article className="flex max-w-md flex-1 flex-col justify-end pl-4 text-xl font-semibold text-black lg:text-2xl">
              <span>Apply Online</span>
              <p className="!mt-1 !text-base">
                Fill out a simple form in under 5 minutes.
              </p>
            </article>
          </article>
          <article className="flex items-center justify-center divide-x divide-[#C0C0C0]">
            <div className="flex w-full max-w-md flex-col justify-end pr-4 text-xl font-semibold text-black lg:text-2xl">
              <span>Get Verified</span>
              <p className="!mt-1 !text-base">
                Our blockchain-powered system ensures fair and tamper-proof
                selection.
              </p>
            </div>
            <div className="text-secondary pl-4 !text-[48px] !font-semibold lg:!text-[120px]">
              02
            </div>
          </article>
          <article className="flex items-center justify-center divide-x divide-[#C0C0C0]">
            <div className="text-secondary pr-4 text-end !text-[48px] !font-semibold lg:!text-[120px]">
              03
            </div>
            <article className="flex w-full max-w-md flex-col pl-4 text-xl font-semibold text-black lg:text-2xl">
              <span>Receive Funds</span>
              <p className="!mt-1 !text-base">
                If selected, your scholarship is disbursed securely with
                guaranteed minimum funding.
              </p>
            </article>
          </article>
        </section>

        <article className="mx-auto mt-10 flex w-11/12 max-w-[400px] flex-col items-center justify-between">
          <p className="!mb-4">
            {" "}
            Early applicants receive priority consideration
          </p>
          <Button className="pry-btn w-fit">Apply today!</Button>
        </article>
      </section>

      <section
        id="faqs"
        className="container my-20 flex flex-wrap justify-between gap-10 gap-y-7 rounded-3xl bg-[#FBFBFB] py-10"
      >
        <article className="flex-1">
          <article data-aos="fade-down" data-aos-duration="1000" className="">
            <h3 className="">Why Choose StudyFund?</h3>
            <p className="">Fair, Transparent, and Hassle-Free</p>
          </article>
          <ul className="mt-5 grid grid-cols-1 gap-4 gap-y-7 lg:grid-cols-2">
            {whyData.map(({ title, subtitle, animation }, idx) => (
              <li
                key={idx}
                className="shadow-3xl group hover:shadow-4xl relative flex h-[333px] flex-col justify-end overflow-hidden rounded-3xl bg-[#ffffff4e] px-4 py-5 text-xl font-semibold text-black transition-all duration-500 ease-in-out hover:bg-white lg:text-2xl"
              >
                {animation}

                <article>
                  <span>{title}</span>
                  <p className="!mt-3 !text-base">{subtitle}</p>
                </article>
              </li>
            ))}
          </ul>
        </article>

        <article className="flex w-full flex-col justify-between rounded-3xl bg-[#E8F2FF] px-5 pt-5 lg:w-4/12">
          <article>
            <h4 className="text-xl lg:text-[32px]">
              “Students everywhere deserve fair access to funding. StudyFund
              ensures that no one is left behind, offering a transparent and
              bias-free scholarship system designed for all.”
            </h4>
            <div className="mt-10">
              <p className="text-end">- Leading Education Advocate</p>
            </div>
          </article>

          <figure className="!mt-8">
            <Image
              src={allImages.studyFund}
              alt=""
              className="mx-auto w-9/12"
            />
          </figure>
        </article>
      </section>

      <section
        id="faqs"
        className="container mt-20 rounded-3xl bg-[#FBFBFB] py-10"
      >
        <article className="text-center">
          <h3>Frequently Asked Questions</h3>
        </article>

        <article className="mx-auto mt-8 w-full lg:w-9/12">
          <Accordion data={studentFaqData} bg="bg-[#FBFBFB]" />
        </article>
      </section>

      <section
        data-aos="fade-down"
        data-aos-duration="1000"
        className="bg-primary container my-20 rounded-3xl py-20"
      >
        <article className="mx-auto flex w-11/12 max-w-[744px] flex-col items-center gap-3 text-center text-white">
          <h3>Ready to Secure Your Scholarship?</h3>

          <p className="text-lg">
            Don&apos;t Wait! Limited spots available for early applicants. Apply
            Now and take control of your education!
          </p>
        </article>

        <article className="mx-auto mt-7 flex w-11/12 max-w-[400px] flex-col items-center justify-between">
          <Button className="pry-btn !text-primary w-fit !bg-white">
            Apply now
          </Button>
        </article>
      </section>
    </main>
  );
}
