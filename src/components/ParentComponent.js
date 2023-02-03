import React, {useState} from "react"
import Form from "./Form"

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [newsLetter, setNewsLetter] = useState(false);

    // 1.2 create an onChange event listener 
    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }


    // 2.2 create an onChange event listener for checkbox
    function handleNewsLetterChange(event) {
        setNewsLetter(event.target.checked)
    }

    return (
        // <form>
        // <input type="text" value={firstName} onChange={handleFirstNameChange}/> {/*1.1 pass in a CB fn */}
        // <input type="text" value={lastName} onChange={handleLastNameChange} />

        // {/* 2. add a checkbox input */}
        // <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
        // <input
        //     type="checkbox"
        //     id="newsletter"
        //     onChange={handleNewsletterChange}
        //     // checked instead of value: true/false
        //     checked={newsletter}
        // />

        // <button type="submit">Submit</button>
        // </form>

        // import Form element and pass in props
        <Form 
            firstName={firstName}
            lastName={lastName}
            newsLetter={newsLetter}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            handleNewsLetterChange={handleNewsLetterChange}
        />
    );
}


export default ParentComponent