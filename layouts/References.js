"use client";

import { markdownify } from "@lib/utils/textConverter";
import ImageFallback from "./components/ImageFallback";
import Circle from "./components/Circle";
import Cta from "./components/Cta";
import ImageGrid from "./components/ImageGrid";

const References = ({ data }) => {
  const { frontmatter } = data;
  const { top, works } = frontmatter;

  return (
    <>
      <section className="section py-0">
        {/* TOP */}
        <div className="container-xl">
          <div className="section relative px-4 text-center">
            <div className="animate">
              {markdownify(top.title, "h2", "section-title")}
              {markdownify(top.content, "p", "mt-10")}
            </div>
            <div className="bg-theme animated-bg absolute top-0 left-0 w-full after:hidden">
              <ImageFallback
                src="/images/wave.svg"
                fill={true}
                sizes="100vw"
                alt="bg wave"
              />
              <Circle
                className="left-[10%] top-12"
                width={32}
                height={32}
                fill={false}
              />
              <Circle
                className="left-[3%] bottom-[13%]"
                width={85}
                height={85}
              />
              <Circle
                className="left-[15%] bottom-[35%]"
                width={47}
                height={47}
                fill={false}
              />

              <Circle
                className="right-[12%] top-[12%]"
                width={20}
                height={20}
              />
              <Circle
                className="right-[2%] bottom-[30%]"
                width={73}
                height={73}
                fill={false}
              />
              <Circle
                className="right-[19%] bottom-[16%]"
                width={37}
                height={37}
                fill={false}
              />
            </div>
          </div>
        </div>
        {works.list.map((work, index) => (
          <div key={"work-" + index} className="section container py-4 ">
            <div className="row items-center justify-center px-4">
              <div className="animate md:col-6 md:order-1 lg:col-6 ">
                <div className="animate">
                  {markdownify(work.title, "h5", "mt-0")}
                  {markdownify(work.content, "p", "mt-0")}
                </div>
              </div>

              <div className="animate md:col-6 md:order-2 lg:col-6 ">
                <ImageGrid images={work.list}></ImageGrid>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Cta></Cta>
    </>
  );
};

export default References;
