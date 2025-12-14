import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Country from './Pages/Country'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import AppLayout from './Components/Layout/AppLayout'
import ErrorPage from './Components/Layout/UI/ErrorPage'
import CountryDetails from './Components/Layout/CountryDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,  
    // errorElement.. hame error page dikhayega agr koi galti se url me kush galat likh de ya fir koi or error aajaye to ye error message so kre
    // ye hamne isliye kiya hai taki main page pr ye sab parmanently rahe scroll krne pr ya kisi or page pr jaane pr bhi ye sab rahe
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/country',
        element: <Country />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path:'/country/:id',
        element:<CountryDetails/>
      }

    ]

  },


])
function App() {


  return <RouterProvider router={router}></RouterProvider>

};

export default App
