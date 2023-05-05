import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "../slicemachine.config.json";
import { SliceZone } from "@prismicio/react";
import {components} from "../slices"

export default function Blogs({ page  }) {
    return (
        <>
          <SliceZone slices={page.data.slices} components={components} />
        </>
      )
}
export async function getStaticProps() {
    const client = prismic.createClient(config.repositoryName)
    const page = await client.getByUID("page","about")
    
    return {
      props: { page },
    }
  }