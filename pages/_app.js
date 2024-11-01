import "../styles/globals.css";
import toast, { Toaster } from "react-hot-toast";

//INTERNAL IMPORT
import { CONTEXT_Provider } from "../context/index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CONTEXT_Provider>
        <Component {...pageProps} />
      </CONTEXT_Provider>
      <Toaster />
      <script src="assets/libs/preline/preline.js"></script>
      <script src="assets/libs/swiper/swiper-bundle.min.js"></script>
      <script src="assets/libs/gumshoejs/gumshoe.polyfills.min.js"></script>
      <script src="assets/libs/lucide/umd/lucide.min.js"></script>
      <script src="assets/libs/aos/aos.js"></script>
      <script src="assets/js/swiper.js"></script>
      <script src="assets/js/theme.js"></script>
    </>
  );
}
