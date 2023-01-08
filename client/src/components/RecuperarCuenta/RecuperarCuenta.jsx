import React from "react";
import styles from "./RecuperarCuenta.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const RecuperarCuenta = () => {
  const { user,loginWithRedirect} =  useAuth0()

  return (
    <div className={styles.div}>
      <h2>recupear cuenta</h2>
      {/* <button onClick={loginWithRedirect("")}>x</button> */}
    </div>
  );
};

export default RecuperarCuenta;
