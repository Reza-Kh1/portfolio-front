import { Route, Routes } from 'react-router-dom'

import DashboardComponent from './Components/PanelAdmins/Dashboard/Dashboard';
import Comments from './Components/PanelAdmins/Comments/Comments';
import Offs from './Components/PanelAdmins/Offs/Offs';
import Posts from './Components/PanelAdmins/Posts/Posts';
import Products from './Components/PanelAdmins/Products/Products';
import Users from './Components/PanelAdmins/Users/Users';
import Setting from './Components/PanelAdmins/Setting/Setting'
import { lazy, Suspense } from 'react';

//panelUsers
import Pishkhan from './Components/PanelUsers/Pishkhan/Pishkhan'
import Orders from './Components/PanelUsers/Orders/Orders'
import Tickets from './Components/PanelUsers/Tickets/Tickets'
import EditAccount from './Components/PanelUsers/EditAccount/EditAccount'
import Carts from './Components/PanelUsers/Carts/Carts'

const SingleShop =lazy(()=>import('./Components/SingleShop/SingleShop'))
const BuyProduct = lazy(() => import('./Components/BuyProduct/BuyProduct'))
const Blog = lazy(() => import('./Pages/Blog/Blog'))
const Estate = lazy(() => import('./Pages/Estate/Estate'))
const HomeUs = lazy(() => import('./Pages/Home/HomeUs'))
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'))
const Shopping = lazy(() => import('./Pages/Shopping/Shopping'))
const Dashboard = lazy(() => import('./Pages/Dashboard/Dashboard'))
const PanelAdmin = lazy(() => import('./Pages/PanelAdmin/PanelAdmin'))
const AboutMe = lazy(() => import('./Pages/AboutMe/AboutMe'))
const FirstPage = lazy(() => import('./Components/NotFound/FirstPage/FirstPage'))
const SecondPage = lazy(() => import('./Components/NotFound/SeconPage/SeconPage'))
const SingleEstate = lazy(() => import('./Components/SingleEstate/SingleEstate'))
import Loader from './Components/Loader/Loader';
export default function Routers() {
    return (
        <>
            <Suspense fallback={<div className='w-100 d-flex align-items-center' style={{ height: '100vh' }}><Loader /></div>}>
                <Routes>
                    <Route path='/' element={<HomeUs />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/estate' element={<Estate />} />
                    <Route path='/estate/id/:estate' element={<SingleEstate />} />
                    <Route path='/notFound' element={<NotFound />} />
                    <Route path='notFound/first-404' element={<FirstPage />} />
                    <Route path='notFound/second-404' element={<SecondPage />} />
                    <Route path='/shopping' element={<Shopping />} />
                    <Route path='/shopping/:singleShop' element={<SingleShop />} />
                    <Route path='/dashboard/*' element={<Dashboard />} >
                        <Route path='my-account' element={<Pishkhan />} />
                        <Route path='orders' element={<Orders />} />
                        <Route path='edit-account' element={<EditAccount />} />
                        <Route path='tikets' element={<Tickets />} />
                        <Route path='cart' element={<Carts />}></Route>
                    </Route>
                    <Route path='/buy-product/:buyShop' element={<BuyProduct />}></Route>
                    <Route path='/panel-admin/*' element={<PanelAdmin />}>
                        <Route path='comments' element={<Comments />} />
                        <Route path='dashboard' element={<DashboardComponent />} />
                        <Route path='offs' element={<Offs />} />
                        <Route path='posts' element={<Posts />} />
                        <Route path='products' element={<Products />} />
                        <Route path='users' element={<Users />} />
                        <Route path='setting' element={<Setting />} />
                    </Route>
                    <Route path='/about-me' element={<AboutMe />} />
                </Routes>
            </Suspense>
        </>
    )
}