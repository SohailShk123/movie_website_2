import React from 'react'
import { Layout } from './pages'
import axios from 'axios'

axios.defaults.baseURL = `https://api.themoviedb.org/3`
function App() {
  return (
  <Layout/>
    )
}

export default App
