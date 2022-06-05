import React from 'react'
//ele está importando BrowserRouter e trocando o nome, mas não precisa fazer isso
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/home'
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesScreen from './screens/notes/index'
import UsersEditScreen from './screens/users/edit'

import PrivateRouter from './components/auth/private-router';

function Rotas (){
    return(
    <Router>
        <Routes>
            <Route path='/' element={<HomeScreen/>} />
            <Route path='/register' element={<RegisterScreen/>} />
            <Route path='/login' element={<LoginScreen/>} />
            <Route element={<PrivateRouter />}>
                <Route exact path='/notes' element={<NotesScreen />} />
            </Route>
            <Route element={<PrivateRouter />}>
                <Route exact path='/users/edit' element={<UsersEditScreen />} />
            </Route>
        </Routes>
    </Router>
    )
}

export default Rotas;