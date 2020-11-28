import React, { useReducer } from "react";
//import { uuid } from "uuid";
import { v4 as uuidv4 } from "uuid";
//import uuid from "uuid/v4";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../types";
const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: " john black",
        email: "oc.clack@gmail.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: " sam smith",
        email: "s.smith@gmail.com",
        phone: "222-222-2222",
        type: "professional",
      },
      {
        id: 3,
        name: " sara watson",
        email: "wt.sara@gmail.com",
        phone: "333-333-3333",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // ADD Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delette Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
