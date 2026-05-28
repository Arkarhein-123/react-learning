import React, { useState } from 'react';
import type { PersonInfo } from '../model/PersonInfo';

export default function SimpleForm2() {
    // Fixed: Initialized with default empty strings to satisfy the PersonInfo interface
    const [personInfo, setPersonInfo] = useState<PersonInfo>({
        name: '',
        email: '',
        phoneNumber: ''
    });

    // Reusable handler for all input fields
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setPersonInfo(prev => ({
            ...prev,
            [name]: value // Dynamically updates 'name', 'email', or 'phoneNumber'
        }));
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted Data: ", personInfo);
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <h3 className="mb-4 text-center">User Information Form</h3>
            <form className="p-4 border border-success rounded shadow-sm" onSubmit={submitHandler}>
                
                {/* Name Input */}
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name" // Matches the key in PersonInfo interface
                        className="form-control"
                        placeholder="Enter your name"
                        value={personInfo.name}
                        onChange={inputChangeHandler}
                    />
                </div>

                {/* Email Input */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email" // Matches the key in PersonInfo interface
                        className="form-control"
                        placeholder="Enter your email"
                        value={personInfo.email}
                        onChange={inputChangeHandler}
                    />
                </div>

                {/* Phone Number Input */}
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber" // Matches the key in PersonInfo interface
                        className="form-control"
                        placeholder="Enter your phone number"
                        value={personInfo.phoneNumber}
                        onChange={inputChangeHandler}
                    />
                </div>

                <button type="submit" className="btn btn-success w-100 mt-2">
                    Submit Data
                </button>
            </form>
        </div>
    );
}