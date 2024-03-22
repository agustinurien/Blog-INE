import { Suspense } from "react"




const BlogDetail = ({ singleBlog }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <section className="blogDetailContainer">
                <section className="titlePlusImage">
                    <div className="imageDetailContainer">
                        <img src={singleBlog.image.url} alt="imageCover" />
                    </div>
                    <div className="containerTextDetail">
                        <h3 className="titleDetail">{singleBlog.title}</h3>
                        <p>{singleBlog.description}</p>
                    </div>
                </section>

                <section className="richTextContainer">
                    {singleBlog.richText.markdown.split('\n').map((paragraph, index) => (
                        <>
                            <p className="richText" key={index}>{paragraph}</p>

                        </>
                    ))}
                </section>
            </section>

        </Suspense>
    )
}

export default BlogDetail
