import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, MyRoutes, Sidebar, useThemeStore, AuthContextProvider, Login } from "./index";
import { Device } from "./styles/breakpoints";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { themeStyle } = useThemeStore()
  const { pathname } = useLocation()
  return (
    <ThemeProvider theme={themeStyle}>
      <AuthContextProvider>
        <GlobalStyles />
        {
          pathname != "/login" ? (
            <Container className={sidebarOpen ? "active" : ""}>

              <section className="contentSidear">
                <Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)} />
              </section>

              <section className="contentMenuhambur">
                Menu Hamburguesa
              </section>

              <section className="contentRouters">
                <MyRoutes />
              </section>

            </Container>
          ) : (<Login />)
        }
      </AuthContextProvider>
    </ThemeProvider>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.2s ease-in-out;
  color: ${({ theme }) => theme.text};
  .contentSidear{
    display: none;
  }
  .contentMenuhambur{
    position: absolute;
  }
  .contentRouters{
    /* grid-column: 1; */
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
