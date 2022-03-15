import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ActionIcon } from '@mantine/core';
import { useLocalStorageValue } from '@mantine/hooks';
import {MdDarkMode, MdOutlineDarkMode} from "react-icons/md"
import { CSSProperties, useState } from 'react';

const buttonStyle : CSSProperties = {position : "absolute", right : "0px", top : "0px", zIndex : 100}

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  // const [theme, setTheme] = useLocalStorageValue<"light" | "dark">({ key: 'color-scheme', defaultValue: 'light' });
  const [theme, setTheme] = useState<"light" | "dark">('dark');

  return (
    <>
      <Head>
        <title>Amazed Kids</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: theme,
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
      <div>
        <ActionIcon
          style={buttonStyle}
          onClick={()=>{setTheme(theme == "dark" ? "light" : "dark")}}
        >
          {theme == "dark" && <MdDarkMode />}
          {theme == "light" && <MdOutlineDarkMode />}
        </ActionIcon>
      </div>
    </>
  );
}