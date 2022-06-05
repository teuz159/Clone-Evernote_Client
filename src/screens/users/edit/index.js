import React, { Fragment, useState } from 'react';
import { Column, Section, Title, Container, Card, Button } from "rbx";
import "../../../styles/users.scss";
import HeaderLogged from "../../../components/header_logged";
import UsersEditForm from "../../../components/users/user_edit_form";
import UsersEditPasswordForm from "../../../components/users/user_edit_password_form";
import UsersDelete from "../../../components/users/user_delete";
import UsersNotesReturn from "../../../components/users/user_notes_return";

function UsersEditScreen () {
  const [redirectToNote, setRedirectToNote] = useState(false);
  
    return(
  <Fragment>
    <HeaderLogged/>
    <Section size="medium" className="users">
      <Container>
      <Column.Group >
        <Column id='buttomsBottom'>
        <UsersNotesReturn/>
        </Column>
        <Column id='buttomsBottom'>
        <UsersDelete/>
        </Column>
        </Column.Group>
        <Column.Group centered className="users-edit">
          <Column size={4}>
            <Title size={5} className="has-text-grey has-text-left">
              Informações Pessoais
            </Title>
            <Card>
              <Card.Content>
                <UsersEditForm/>
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>

        <Column.Group centered className="users-edit">
          <Column size={4}>
            <Title size={5} className="has-text-grey has-text-left">
              Alterar senha
            </Title>
            <Card>
              <Card.Content>
               <UsersEditPasswordForm/>
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
    )
}

export default UsersEditScreen