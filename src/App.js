import React, { useState, useEffect } from "react";
import Dialog from "./components/Dialog.component"
import Greetings from "./components/Greetings.component"
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  useEffect(() => {}, [values.password]);

  return (
    <div>
      <>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <Dialog>
          <Greetings greeting="hellooooooooo"></Greetings>   
        </Dialog>
      </>
    </div>
  );
};

export default App;
