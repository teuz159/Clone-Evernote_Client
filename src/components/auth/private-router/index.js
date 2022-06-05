import React from 'react'
import {Navigate, Outlet} from 'react-router-dom';

//criar rota pública caso o usuário estiver logado, redirecionar para notas

const PrivateRouter = () => {
    return localStorage.getItem('user') ?  <Outlet/> : <Navigate to={'/login'}/> ;
}    

export default PrivateRouter;


//Um usuário não pode criar notas se não tiver uma conta. Isso porque é necessário uma conta, pois toda nota é vinculada a uma conta
//além disso, seria uma falha de segurança, pois, seria uma falha de infraestrutura já que queremos que só pessoas logadas com token tenha acesso
//a essa área. Logo, sem uma rota protegida, poderiamos muito bem adentrar na parte de notas. Ainda não estabelecemos que ela só é permitida para usuários
//logados.
//Podemos criar uma rota protegida com Hooks ou High Order Function (recebe funções como argumento, e devolve funções)

//No nosso caso, ela recebe componentes como parametros e devolve outros componentes

//estamos criando uma função