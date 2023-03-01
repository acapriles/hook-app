import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  
  const { user } = useContext( UserContext );
  
  return (
    <>
        <h1>HomeApp <small>{ user?.name }</small></h1>
        <hr />

        <pre aria-label="pre">
          { JSON.stringify( user, null, 4 ) }
        </pre>
    </>
  )
}
  