import { createRoot } from 'react-dom/client'
import './assets/style/index.css'
import '../src/assets/style/index.css'
import store from "./store";
import {Provider} from "react-redux";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
