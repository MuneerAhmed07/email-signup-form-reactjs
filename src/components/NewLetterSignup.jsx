import { useState } from "react";

const NewLetterSignup = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();

        if(validateEmail(email)) {
            setMessage("Thank you for signing up!");
            setEmail("");
        }else {
            setMessage("Please enter a valid email address!");
        }

    }

    const validateEmail = (email) => {
        const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexp.test(email);
    }

  return (
    <>
      <div className="newsletter-signup">
        <h2>Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder='Enter you email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type='submit'>Subscribe</button>
        </form>
        {message && (<p className='message'>{message}</p>)}
      </div>
    </>
  )
}

export default NewLetterSignup;
