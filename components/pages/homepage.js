import Link from 'next/link';

export default function Homepage(allHomepage) {
    console.log("**Homepage**");
    const data = allHomepage.homepage.edges[0];
    console.log(data);
    console.log("**");
    return(
        <div>
            <h1>{data.node.homepageFields.homepageTitle}</h1>
            <div>
                <p>{data.node.homepageFields.initialDescriptionText}</p>
                <p>{data.node.homepageFields.sectionBackgroundImage.altText}</p>
                <p>{data.node.homepageFields.sectionBackgroundImage.mediaItemUrl}</p>
                <p>{data.node.homepageFields.sectionColor}</p>

            </div>
        </div>
        
    )
}