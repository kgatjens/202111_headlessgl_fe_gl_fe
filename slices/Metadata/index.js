/**
 * @typedef {import("@prismicio/client").Content.MetadataSlice} MetadataSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MetadataSlice>} MetadataProps
 * @param {MetadataProps}
 */
const Metadata = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for metadata (variation: {slice.variation}) Slices
    </section>
  );
};

export default Metadata;
