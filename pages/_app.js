import Layout from "@/components/layout/layout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Kodchasan } from "next/font/google";
import { Provider } from "react-redux";

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: ["400"], // Specify the desired weight(s), e.g., "400"
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout className={kodchasan.className}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
