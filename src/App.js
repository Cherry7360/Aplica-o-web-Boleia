
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './routes/Welcome';
import Errorpage from './routes/Errorpage';
import Registrar from './routes/Registrar';
import About from'./routes/About'
import Rotas from'./routes/Rotas';
import Home from './routes/Home';

import Principal from './routes/Principal';
import {AuthContextProvider} from './components/context/AuthContext'


const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Principal/>,
   errorElement: <Errorpage />,
    children: [
      { path: '/welcome', element:<Welcome /> },
      { path: '/home', element: <Home /> },
      { path: '/rotas', element: <Rotas /> },
      { path: '/about', element: <About />  },
      { path: '/registrar', element: <Registrar /> }
      
      
    ],
  },
]);





function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <RouterProvider router={rotas} />
      </AuthContextProvider>
    </div>
  );
}

export default App;

