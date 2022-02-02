
// import React from "react";
// import { useState } from 'react';
// import { AppShell, Burger, Button, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';
// import Products from "../components/Product";
// import Home from "../components/Home";
// import Contact from "../components/Contact";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from 'react-router-dom';

// // import {
// //   StaticRouter as SRouter
// // } from 'react-router-dom/server';

// function Main() {
//   const [opened, setOpened] = useState(false);
//   const theme = useMantineTheme();

//   return (
//     <AppShell
//       // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
//       navbarOffsetBreakpoint="sm"
//       // fixed prop on AppShell will be automatically added to Header and Navbar
//       fixed
//       navbar={
//         <Navbar
//           padding="md"
//           // Breakpoint at which navbar will be hidden if hidden prop is true
//           hiddenBreakpoint="sm"
//           // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
//           hidden={!opened}
//           // when viewport size is less than theme.breakpoints.sm navbar width is 100%
//           // viewport size > theme.breakpoints.sm – width is 300px
//           // viewport size > theme.breakpoints.lg – width is 400px
//           width={{ sm: 300, lg: 400 }}
//         >
//           <Router>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/product">product</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact Us</Link>
//               </li>
//             </ul>
//           </Router>
//         </Navbar>
//       }
//       header={
//         <Header height={70} padding="md">
//           {/* Handle other responsive styles with MediaQuery component or createStyles function */}
//           <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
//             <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
//               <Burger
//                 opened={opened}
//                 onClick={() => setOpened((o) => !o)}
//                 size="sm"
//                 color={theme.colors.gray[6]}
//                 mr="xl"
//               />
//             </MediaQuery>

//             <Text>Application header</Text>
//           </div>
//         </Header>
//       }
//     >
//       <Routes></Routes>
//       {/* <Routes>
//         <Route path='/' element={< Home />}></Route>
//         <Route path='/product' element={< Products />}></Route>
//         <Route path='/contact' element={< Contact />}></Route>
//       </Routes> */}
//     </AppShell>
//   );
// }

// export default Main;