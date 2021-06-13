import firebase from "./Firebase";
import { useState, useEffect } from "react";

export const addInfo = (info) => {
  const contactRef = firebase.database().ref("contact");
  contactRef.push(info);
};

export const useFetch = () => {
  const [contactList, setContactList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const contactRef = firebase.database().ref("contact");
    contactRef.on("value", (snapshot) => {
      const contacts = snapshot.val();
      const contactArray = [];
      for (let id in contacts) {
        contactArray.push({ id, ...contacts[id] });
      }
      setContactList(contactArray);
      setIsLoading(false);
    });
  }, []);

  return { contactList, isLoading };
};

export const deleteHandler = (id) => {
  const contactRef = firebase.database().ref("contact").child(id);
  contactRef.remove();
};

export const updateHandler = (info) => {
  const contactRef = firebase.database().ref("contact").child(info.id);
  contactRef.update(info);
};
