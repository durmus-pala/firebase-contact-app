import React, { useState } from "react";
import FormComp from "./components/form/Form";
import Contacts from "./components/contacts/Contacts";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "NO INFO!",
};

function App() {
  const [info, setInfo] = useState(initialValues);
  const handleFormSubmit = () => {
    console.log({ info });
  };
  return (
    <div className="App">
      <FormComp
        className="form"
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts className="contacts" />
    </div>
  );
}

export default App;
