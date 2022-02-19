import React, { CSSProperties } from "react";
import { useState } from 'react';

import {
  AppShell,
  Burger,
  Button,
  Group,
  Header,
  MantineProvider,
  MediaQuery,
  Navbar, Paper,
  Text,
} from '@mantine/core';

import Link from 'next/link';
import { EZDiv } from "./EZDiv";


function Layout(props) {
  const [opened, setOpened] = useState(false);



  return (
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      navbar={
        <Navbar
          padding="md"
          // Breakpoint at which navbar will be hidden if hidden prop is true
          hiddenBreakpoint="sm"
          // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
          hidden={!opened}
          // when viewport size is less than theme.breakpoints.sm navbar width is 100%
          // viewport size > theme.breakpoints.sm – width is 300px
          // viewport size > theme.breakpoints.lg – width is 400px
          width={{ sm: 300, lg: 400 }}
        >
          <Paper>
            <Group position="center">
              <EZDiv display={"flex"} flexDirection="column" rowGap={"15px"}>
                <Link href="/">
                  <Button component="a" variant="outline">Home</Button>
                </Link>
                <Link href="/products">
                  <Button component="a" variant="outline">Products</Button>
                </Link>
                <Link href="/contactus">
                  <Button component="a" variant="outline">Contact Us</Button>
                </Link>
                <Link href="/aboutus">
                  <Button component="a" variant="outline">About Us</Button>
                </Link>
              </EZDiv>
            </Group>
          </Paper>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          {/* Handle other responsive styles with MediaQuery component or createStyles function */}
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                // color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Amazed Kids</Text>
          </div>
        </Header>
      }
    >
      <Paper>
        {props.children}
      </Paper>
    </AppShell>
  );
}

export default Layout;
// import React, { ReactNode } from "react";
// import Header from "./Header";

// type Props = {
//   children: ReactNode;
// };

// const Layout: React.FC<Props> = (props) => (
//   <div>
//     <Header />
//     <div className="layout">{props.children}</div>
//     <style jsx global>{`
//       html {
//         box-sizing: border-box;
//       }

//       *,
//       *:before,
//       *:after {
//         box-sizing: inherit;
//       }

//       body {
//         margin: 0;
//         padding: 0;
//         font-size: 16px;
//         font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//           Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
//           "Segoe UI Symbol";
//         background: rgba(0, 0, 0, 0.05);
//       }

//       input,
//       textarea {
//         font-size: 16px;
//       }

//       button {
//         cursor: pointer;
//       }
//     `}</style>
//     <style jsx>{`
//       .layout {
//         padding: 0 2rem;
//       }
//     `}</style>
//   </div>
// );

// export default Layout;
