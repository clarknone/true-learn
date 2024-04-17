import "@/styles/globals.css";
import "@/services/api/_config";

import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";
import LayoutContext from "@/context/layout";

export default function App({ Component, pageProps }: AppProps) {
  const PageComponent = Component as any;
  return (
    <LayoutContext>
      <ThemeProvider theme={theme}>
        <PageComponent {...pageProps} />
      </ThemeProvider>
    </LayoutContext>
  );
}
