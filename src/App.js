import React, { useState } from "react";
import FormComp from "./components/form/Form";
import Contacts from "./components/contacts/Contacts";
import { addInfo, updateHandler } from "./utils/Functions";
import { ToastContainer } from "react-toastify";
const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "NO INFO!",
};

function App() {
  const [info, setInfo] = useState(initialValues);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (info.id) {
      updateHandler(info);
    } else {
      addInfo(info);
    }
    setInfo(initialValues);
  };

  const updateFormHandler = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };
  return (
    <div className="App">
      <FormComp
        className="form"
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts className="contacts" updateFormHandler={updateFormHandler} />
      <ToastContainer />
    </div>
  );
}

export default App;
