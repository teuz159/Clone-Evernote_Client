import React, { Fragment, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'
import { Button, Field, Control, Input, Column, Title, Help, Label } from "rbx";
import UsersService from '../../../services/users';

function UsersEditForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);
  const [redirect, setRedirect] = useState(false)

  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem('user'));
    setName(user['name']);
    setEmail(user['email']);
  }

  useEffect(() =>{
    initializeUser()    
  }, [])

  if(redirect == true){
    return <Navigate to={{pathname: "/notes"}}/>
}

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UsersService.update({ email: email, name: name });
      setStatus("success")
      setRedirect(true)
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Field>
          <Control>
            <Label className="has-text-grey">Nome</Label>
            <Input
              type="name"
              value={name || ""}
              onChange={e => setName(e.target.value)}
              required
              name="name"
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label className="has-text-grey">Email</Label>
            <Input
              type="email"
              value={email || ""}
              onChange={e => setEmail(e.target.value)}
              required
              name="email"
            />
          </Control>
        </Field>

        <Field>
          <Control>
            <Column.Group>
              <Column className="has-text-right">
                <Button color="custom-purple" outlined>Atualizar</Button>
              </Column>
            </Column.Group>
          </Control>
        </Field>
        {status == "error" &&
          <Help color="danger">Tente novamente</Help>
        }
        {status == "success" &&
          <Help color="primary">Atualizado com sucesso</Help>
        }
      </form>
    </Fragment>
  )
}

export default UsersEditForm;