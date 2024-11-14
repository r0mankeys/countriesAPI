import Layout from "../components/Layout.tsx";
import Footer from "../components/Footer.tsx";

function NotFound() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <h1 className="text-4xl font-bold">404 | Not Found</h1>
      </div>
      <Footer />
    </Layout>
  );
}

export default NotFound;
