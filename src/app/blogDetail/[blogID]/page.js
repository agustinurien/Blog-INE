import BlogDetail from "@/app/components/BlogDetail";
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { montserrat, rubik } from "@/app/fonts"
const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://api-sa-east-1.hygraph.com/v2/cltriyokw028307wgu1os1c8j/master",
        // Additional options if needed
    }),
    cache: new InMemoryCache()
});

async function loadData() {
    const { data } = await client.query({
        query: gql`
                query Content {
            content {
                description
                id
                title
                date
                image {
                url
                }
                richText {
                markdown
                }
            }
            }
    `
    })
    return data.content
}
export default async function BlogDetails({ params }) {
    const blogs = await loadData()
    const singleBlog = blogs.find(blog => blog.id === params.blogID)
    console.log(singleBlog)

    return (
        <section className={`${montserrat.className} page `}>
            <BlogDetail singleBlog={singleBlog} />
        </section>
    )
}