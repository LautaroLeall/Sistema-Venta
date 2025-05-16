import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, Login, MyRoutes, Sidebar, useThemeStore } from "./index";
import { Device } from "./styles/breakpoints";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { themeStyle } = useThemeStore()
  return (
    <ThemeProvider theme={themeStyle}>
      <Container className={sidebarOpen ? "active" : ""}>

        <GlobalStyles />

        <section className="contentSidear">
          <Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)} />
        </section>

        <section className="contentMenuhambur">
          Menu Hamburguesa
        </section>

        <section className="contentRouters">
          <MyRoutes />
          <Login />
        </section>

      </Container>
    </ThemeProvider>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.2s ease-in-out;
  color: ${({theme}) => theme.text};
  .contentSidear{
    display: none;
  }
  .contentMenuhambur{
    position: absolute;
  }
  .contentRouters{
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    &.active{
      grid-template-columns: 260px 1fr;
    }
    .contentSidear{
      display: initial;
    }
    .contentMenuhambur{
      display: none;
    }
    .contentRouters{
      grid-column: 2;
    }
  }
`;

export default App;
