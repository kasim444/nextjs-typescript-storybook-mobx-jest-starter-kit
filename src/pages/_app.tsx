import React from 'react';
import App, { AppContext } from 'next/app';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/global-styles/global-styles';
import { fetchInitialStoreState, DataStore } from '../../stores/DataStore';

const theme = {
  colors: {
    white: '#FFFFFF',
    softWhite: '##F8F7F6',
    grey: '#959595',
    softGrey: '#D8D8D8',
    orange: '#FF9312',
    softOrange: '#FAF3EB',
  },
  fonts: ['Palanquin', 'sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

export default class CustomApp extends App {
  state = {
    dataStore: new DataStore(),
  };

  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const initialStoreState = await fetchInitialStoreState();

    return { pageProps, initialStoreState };
  }

  // Hydrate serialized state to store
  static getDerivedStateFromProps(
    props: { initialStoreState: any },
    state: { dataStore: { hydrate: (arg0: any) => void } }
  ) {
    state.dataStore.hydrate(props.initialStoreState);
    return state;
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider dataStore={this.state.dataStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}
