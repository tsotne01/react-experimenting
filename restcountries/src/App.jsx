import React from 'react'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import RestCountriesComponent from './RestCountriesComponent';

export const queryClient = new QueryClient();


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RestCountriesComponent/>
    </QueryClientProvider>
  )
}

export default App