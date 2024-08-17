import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Test from './views/Test'
import IndexPost from './views/posts/IndexPost'
import AppRouter from './router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter /  >
  </StrictMode>
)
