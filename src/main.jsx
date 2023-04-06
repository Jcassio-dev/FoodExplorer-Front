import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme"
import GlobalStyle from './styles/globalStyle'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
    </ThemeProvider>
  </AuthProvider>,
)
