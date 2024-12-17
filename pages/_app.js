import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { Kodchasan } from "next/font/google";

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: ["400"], // Specify the desired weight(s), e.g., "400"
});

export default function App({ Component, pageProps }) {
  return (
    <Layout className={kodchasan.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
