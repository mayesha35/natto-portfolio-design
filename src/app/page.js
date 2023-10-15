import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
      <Banner/>
      <Clients/>
      <Team/>
      <Blog/>
      </Layout>
    </>
  )
}
