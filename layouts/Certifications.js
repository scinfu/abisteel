"use client";

import { markdownify } from "@lib/utils/textConverter";
import config from "@config/config.json";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";
import Circle from "./components/Circle";
import Post from "@partials/Post";
import Cta from "./components/Cta";

const Certifications = ({ data }) => {
  const { frontmatter } = data;
  const {
    title,
    about_us,
    works,
    mission,
    video,
    clients,
    our_member,
    our_office,
  } = frontmatter;

  return (
    <>
      <section className="section py-0">
        {/* <Banner title={title} /> */}

        {/* About */}
        <div className="section container py-4">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 md:order-2 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={about_us.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="left-4 top-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="right-10 top-20 z-[-1]"
                />
                <Circle
                  className="right-12 top-1/2 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="left-12 top-1/2 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 md:order-1 lg:col-4">
              <p>{about_us.subtitle}</p>
              {markdownify(about_us.title, "h2", "section-title bar-left mt-4")}
              {markdownify(about_us.content, "p", "mt-10")}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="section container py-4">
          <div className="animate text-center">
            {/* <p>{works.subtitle}</p> */}
            {/* {markdownify(works.title, "h2", "section-title mt-4")}
            {markdownify(works.content, "p", "mt-10")} */}
          </div>
          <div className="row mt-0 justify-center">
            {works.list.map((work, index) => (
              <div key={"work-" + index} className="mt-10 md:col-6 lg:col-5">
                <div className="animate text-center md:px-6 xl:px-12">
                  {markdownify(work.title, "h3", "h4")}
                  <ImageFallback
                    className="animate relative w-full rounded-2xl px-16"
                    src={work.thumb}
                    width={256}
                    height={200}
                    alt={work.thumb}
                  />
                  {markdownify(work.content, "p", "mt-2")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta></Cta>
    </>
  );
};

export default Certifications;
