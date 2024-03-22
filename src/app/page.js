
import Blog from "./components/Blog";

import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import MainBlog from "./components/MainBlog";
import Title from "./components/Title";
import Search from "./ui/Search";


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
      image {
        url
      }
      date
    }
  }
      `
  })
  return data.content
}
export default async function Home({ searchParams }) {

  const query = searchParams?.query || ''
  const blogs = await loadData()



  return (
    <main className="page">
      <Title />

      <Blog blogs={blogs} query={query} />
    </main>
  );
}
