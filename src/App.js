import { Garagem } from "./Componentes/Garagem/Garagem";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { Header } from "./Componentes/Header/Header";
import { Footer } from "./Componentes/Footer/Footer";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Garagem />
      <Footer />
    </div>
  );
}
