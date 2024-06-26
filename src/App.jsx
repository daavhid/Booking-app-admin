import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import List from './pages/List'
import Single from './pages/Single'
import New from './pages/New'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='users'>
                        <Route index element={<List/>}/>
                        <Route path=':userId' element={<Single/>}/>
                        <Route path='new' element={<New/>}/>
                    </Route>
                    <Route path='products'>
                        <Route index element={<List/>}/>
                        <Route path=':productId' element={<Single/>}/>
                        <Route path='new' element={<New/>}/>
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App