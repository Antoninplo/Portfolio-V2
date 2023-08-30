import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <MyApp Component={Component} pageProps={pageProps} />    
    </ThemeProvider>
  );
}

export default MyApp;
