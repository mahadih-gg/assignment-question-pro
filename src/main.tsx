import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.scss'
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './context/AuthContextProvider.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
)
