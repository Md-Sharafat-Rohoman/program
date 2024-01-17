import { useState } from "react";


const StateForm = () => {
    const [name, setName] = useState('sharafat');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');


    const handleSubmit = e => {
        if (password.length < 6) {
            setError('password must be 6 character')
        }
        else {
            setError('')
        }
        e.preventDefault();
        console.log(name,
            email,
            password,
            error);


    }
    const handleNameChange = e => {
        // console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmailChaing = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChang = e => {
        e.preventDefault();

        // console.log(e.target.value);
        setPassword(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name}
                    onChange={handleNameChange}
                    type="text" name="name" />
                <br />
                <input
                    onChange={handleEmailChaing}
                    type="email" name="email" id="" />
                <br />
                <input
                    onChange={handlePasswordChang}
                    type="password" name="password" required />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateForm;