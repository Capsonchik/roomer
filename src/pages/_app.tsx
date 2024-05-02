import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Container, CustomProvider} from "rsuite";
import {Provider} from "react-redux";
import {store} from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CustomProvider>
        <Container style={{width: '100%', height: '100vh', padding: '10px' }}>
          <Component {...pageProps} />
        </Container>
      </CustomProvider>
    </Provider>
  )
}
