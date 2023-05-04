/**
 * @typedef {import("@prismicio/client").Content.BlogCarouselSlice} BlogCarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogCarouselSlice>} BlogCarouselProps
 * @param {BlogCarouselProps}
 */
const BlogCarousel = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_carousel (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BlogCarousel;
