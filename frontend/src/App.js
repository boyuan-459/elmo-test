import React from 'react'
import { Grid } from 'react-styled-flexboxgrid'
import { Provider } from 'react-redux'

import store from 'redux/store'
import AppRouter from './AppRouter'

function App() {
  return (
    <Provider store={store}>
        <Grid>
            <AppRouter />
        </Grid>
    </Provider>
  );
}

export default App
