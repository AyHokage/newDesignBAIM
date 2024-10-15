import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthContext"; // Убедитесь, что путь к файлу правильный
import { Nunito } from "next/font/google";
import Head from "next/head";

const nunito = Nunito({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
 
  return (
  <> 
    <Head children={undefined}>
    </Head>
    <div className={nunito.className}>
      <AuthProvider>   
          <Component {...pageProps} />
      </AuthProvider>
    </div>   
  </>
  );
}
 