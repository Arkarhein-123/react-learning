import { useState } from "react";

export default function SimpleForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState<number>(0);

    const emailOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    
    const phoneNumberOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };
    
    const ageOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(parseInt(e.target.value) || 0);
    };

    // Fixed: Added correct TypeScript type for form submission
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, email, phoneNumber, age);
    };

    return (
        <div>
            {/* Fixed: Moved the submit handler to the form element */}
            <form className="p-5 border border-success" onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="form-control"
                        value={email}
                        onChange={emailOnChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="text" 
                        placeholder="Enter your phone number"
                        className="form-control"
                        value={phoneNumber}
                        onChange={phoneNumberOnChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="number" 
                        placeholder="Enter your age"
                        className="form-control"
                        value={age === 0 ? '' : age} // Prevents a stuck '0' when typing
                        onChange={ageOnChangeHandler}
                    />
                </div>
                {/* Fixed: Added type="submit" and button text */}
                <button type="submit" className="btn btn-success w-100">
                    Submit
                </button>
            </form>
        </div>
    );
}