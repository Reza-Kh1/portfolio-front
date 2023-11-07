import Blog from './Pages/Blog/Blog';
import Estate from './Pages/Estate/Estate';
// import Home from './pages/Home/Home';
import HomeUs from './Pages/Home/HomeUs';
// import Food from './Pages/Food/Food';
import NotFound from './Pages/NotFound/NotFound';
import Shopping from './Pages/Shopping/Shopping';
import SingleShop from './Components/SingleShop/SingleShop';
import Dashboard from './Pages/Dashboard/Dashboard'
import PanelAdmin from './Pages/PanelAdmin/PanelAdmin'
import AboutMe from './Pages/AboutMe/AboutMe'
import FirstPage from './Components/NotFound/FirstPage/FirstPage'
import SecondPage from './Components/NotFound/SeconPage/SeconPage'
import SingleEstate from './Components/SingleEstate/SingleEstate';
import BuyProduct from './Components/BuyProduct/BuyProduct';
import AboutSite from "./Pages/AboutSite/AboutSite"


//panelUsers
import Pishkhan from './Components/PanelUsers/Pishkhan/Pishkhan'
import Orders from './Components/PanelUsers/Orders/Orders'
import Tickets from './Components/PanelUsers/Tickets/Tickets'
import EditAccount from './Components/PanelUsers/EditAccount/EditAccount'
import Carts from './Components/PanelUsers/Carts/Carts'

// const SingleEstate = lazy(() => import('./Components/SingleEstate/SingleEstate'))

// panel admin sub
import DashboardComponent from './Components/PanelAdmins/Dashboard/Dashboard';
import Comments from './Components/PanelAdmins/Comments/Comments';
import Offs from './Components/PanelAdmins/Offs/Offs';
import Products from './Components/PanelAdmins/Products/Products';
import Users from './Components/PanelAdmins/Users/Users';
import Setting from './Components/PanelAdmins/Setting/Setting'
// import { lazy, Suspense } from 'react';

export default [
    { path: '/', element: <HomeUs /> },
    { path: '/blog', element: <Blog /> },
    { path: '/estate/page/:pagination', element: <Estate /> },
    { path: '/estate/single-page/id/:estate', element: <SingleEstate /> },
    { path: '/landing', element: <NotFound /> },
    { path: 'notFound/first-404', element: <FirstPage /> },
    { path: 'notFound/second-404', element: <SecondPage /> },
    { path: '/shopping', element: <Shopping /> },
    { path: '/shopping/:singleShop', element: <SingleShop /> },
    {
        path: '/dashboard/*', element: <Dashboard />, children: [
            { path: 'my-account', element: <Pishkhan /> },
            { path: 'orders', element: <Orders /> },
            { path: 'edit-account', element: <EditAccount /> },
            { path: 'tikets', element: <Tickets /> },
            { path: 'cart', element: <Carts /> }]
    },
    {
        path: '/buy-product/page-puy', element: <BuyProduct />
    },
    {
        path: '/panel-admin/*', element: <PanelAdmin />, children: [
            { path: 'comments', element: <Comments /> },
            { path: 'dashboard', element: <DashboardComponent /> },
            { path: 'offs', element: <Offs /> },
            { path: 'products', element: <Products /> },
            { path: 'users', element: <Users /> },
            { path: 'setting', element: <Setting /> }]
    },
    { path: '/about-site', element: <AboutSite /> },
    { path: '/about-me', element: <AboutMe /> }
];