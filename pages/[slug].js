export default function DynamicPage() {
    return (
      <div>
        <p>dynamic page</p>
      </div>
    );
  }
  export async function getStaticProps(context) {
    return {
      props: { message: "dynamic page part 2" }, // will be passed to the page component as props
    };
  }
  export async function getStaticPaths() {
    const posts = ["a", "b"];
    const paths = posts.map((post) => ({
      params: { slug: post },
    }));
  
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  }