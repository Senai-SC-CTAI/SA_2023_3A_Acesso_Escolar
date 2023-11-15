import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './screens/Login/index.tsx'
import HomeALU from './screens/HomeALU/index.tsx'
import HomeADM from './screens/HomeADM/index.tsx'
import CadastraALU from './screens/CadastraALU/index.tsx'
import EntradaTARDIA from './screens/EntradaTARDIA/index.tsx'
import SaidaANTECIPADA from './screens/SaidaANTECIPADA/index.tsx'



import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Page } from './screens/Page/index.tsx'

const router = createBrowserRouter(
  [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/homeAlu",
        element: <HomeALU />
      },
      {
        path: "/homeAdm",
        element: <HomeADM />
      },
      {
        path: "/cadastraAlu",
        element: <CadastraALU />
      },
      {
        path: "/entradaTardia",
        element: <EntradaTARDIA />
      },
      {
        path: "/saidaAntecipada",
        element: <SaidaANTECIPADA />
      },
      {
        path: "/",
        element: <Page />
      },
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)