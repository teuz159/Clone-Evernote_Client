import React, { useState } from 'react';
import { Button } from "rbx";
import { Navigate } from "react-router-dom";

function UsersNotesReturn() {
  const [redirectToNotes, setRedirectToNotes] = useState(false);

  const redirectUserNotes = async () => {
      setRedirectToNotes(true)
  }

  if(redirectToNotes)
    return <Navigate to={{pathname: "/notes"}}/>

  return(
    <Button outlined color="custom-purple" onClick={() => redirectUserNotes()}>
      Retornar as notas
    </Button>
  )
}

export default UsersNotesReturn;