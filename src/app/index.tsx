import { StrictMode } from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

render(
  <StrictMode>
    <Header />
    <Main />
  </StrictMode>,
  document.getElementById("root")
);
