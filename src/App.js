import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchVideo from './components/SearchVideo';

const App = () =>{
  return(
    <Provider store={store}>
      <div>
          <Header />
          <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children:[
  {
    path: "/",
    element: <MainContainer />
  },
  {
    path: "watch",
    element: <WatchPage />
  },
  {
    path:"results",
    element:<SearchVideo />
  }
  ]
}])

export default App;
