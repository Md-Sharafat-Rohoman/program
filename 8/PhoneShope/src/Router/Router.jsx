import { createBrowserRouter,Outlet } from 'react-router-dom'
import Home from '../Pages/Home/Home';
import MainLayout from '../Layout/MainLayout';
import Favourite from '../Pages/Favourite/Favourite';
import Login from '../Pages/Login/Login';


const myCreateRouter = createBrowserRouter([
    {
        path:"/",
        element: <div>
            <MainLayout></MainLayout>
            {/* <Outlet></Outlet> */}
        </div>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch('/Phones.json')
            },
            {
                path:"/favourite",
                element:<Favourite></Favourite>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])

export default myCreateRouter;