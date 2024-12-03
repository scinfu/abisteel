import Cta from "@layouts/components/Cta";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import Features from "@layouts/partials/Features";
import HomeBanner from "@layouts/partials/HomeBanner";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getListPage } from "@lib/contentParser";
import ImageGrid from "@layouts/components/ImageGrid";
import React from "react";

const Home = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, features, intro, speciality, testimonial, gallery } =
    frontmatter;
  return (
    <GSAPWrapper>
      <SeoMeta title="ABI STEEL" />
      <HomeBanner banner={banner} brands={brands} />
      <Features features={features} />
      {/* <ShortIntro intro={intro} /> */}
      {/* <SpecialFeatures speciality={speciality} />
      <Testimonial testimonial={testimonial} /> */}
      <ImageGrid images={gallery.list} />
      <Cta />
    </GSAPWrapper>
  );
};

export default Home;

// function GalleryPhoto() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   const openLightbox = useCallback((event, { photo, index }) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

//   return (
//     <div>
//       <Gallery photos={gallery.list} onClick={openLightbox} />
//       <ModalGateway>
//         {viewerIsOpen ? (
//           <Modal onClose={closeLightbox}>
//             <Carousel
//               currentIndex={currentImage}
//               views={gallery.list.map((x) => ({
//                 ...x,
//                 srcset: x.srcSet,
//                 caption: x.title,
//               }))}
//             />
//           </Modal>
//         ) : null}
//       </ModalGateway>
//     </div>
//   );
// }
