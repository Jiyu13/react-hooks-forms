import React, { useState } from "react";

function Form({
  firstName, handleFirstNameChange, 
  lastName, handleLastNameChange, 
  newsLetter, handleNewsLetterChange
}) {

  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  // const [newsletter, setNewsLetter] = useState(false);

  // // 1.2 create an onChange event listener 
  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value)
  // }

  // function handleLastNameChange(event) {
  //   setLastName(event.target.value)
  // }


  // // 2.2 create an onChange event listener for checkbox
  // function handleNewsletterChange(event) {
  //   setNewsLetter(event.target.checked)
  // }

  // move all the code above to ParentComponent
  // just renturn the form with props passed down from ParentComponent

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange}/> {/*1.1 pass in a CB fn */}
      <input type="text" value={lastName} onChange={handleLastNameChange} />

      {/* 2. add a checkbox input */}
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsLetterChange}
        // checked instead of value: true/false
        checked={newsLetter}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
