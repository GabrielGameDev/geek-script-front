import { ThemeProvider } from "styled-components";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { theme } from "../../Components/Theme/Theme";
import { GlobalStyle } from "../../Components/GlobalStyleGuide";
import { UpdateProduct } from "../../Components/Update";
import { UpdateUser } from "../../Components/Update User";

export function UpdateUserPage() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <UpdateUser />
      <Footer />
    </ThemeProvider>
  );
}
