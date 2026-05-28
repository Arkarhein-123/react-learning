import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { Person } from "../model/Person";

export default function HookForm3() {
    const [step, setStep] = useState(1);
    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors, isValid },
    } = useForm<Person>({ mode: "onChange" });

    const handleNext = async () => {
        let fieldsToValidate: ("firstName" | "lastName")[] = [];
        if (step === 1) {
            fieldsToValidate = ["firstName", "lastName"];
        }
        const isStepValid = await trigger(fieldsToValidate);
        if (isStepValid) {
            setStep((prev) => prev + 1);
        }
    };
    const handleBack = () => {
        setStep((prev) => prev - 1);
    };
    const onSubmit: SubmitHandler<Person> = (data) => {
        console.log("Final Multi-step Form Data : ", data);
    };

    return (
        <div>
            <div className="container my-5">
                <div className="card shadow p-5 rounded">
                    <div className="d-flex justify-content-between mb-4">
                        <span className={`badge ${step === 1 ? "bg-primary" : "bg-secondary"}`}>1.Person Info</span>
                        <span className={`badge ${step === 2 ? "bg-primary" : "bg-secondary"}`}>2.Address</span>
                    </div>
                </div>

                <form
                    action=""
                    className="p-5 border border-success rounded"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {step === 1 && (
                        <div>
                            <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="text" {...register("firstName", { required: "First Name is Required" })} placeholder="Enter First Name"
                                    className={`form-control ${errors.firstName ? "is-invalid" : ""}`} />
                                {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" {...register("lastName", { required: "Last Name is Required" })} placeholder="Enter Last Name"
                                    className={`form-control ${errors.lastName ? "is-invalid" : ""}`} />
                                {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <div className="mb-3">
                                <label className="form-label">Zip Code</label>
                                <input type="text" {...register("zipCode", { required: "Zip Code is Required", pattern: { value: /^[0-9]{5}$/, message: "Zip Code must be a 5-digit number" } })} placeholder="Enter Zip Code"
                                    className={`form-control ${errors.zipCode ? "is-invalid" : ""}`} />
                                {errors.zipCode && <div className="invalid-feedback">{errors.zipCode?.message}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">City</label>
                                <input type="text" {...register("city", { required: "City is Required" })} placeholder="Enter City"
                                    className={`form-control ${errors.city ? "is-invalid" : ""}`} />
                                {errors.city && <div className="invalid-feedback">{errors.city?.message}</div>}
                            </div>
                        </div>
                    )}

                    <div className="d-flex justify-content-between mt-4">
                        {step > 1 && (
                            <button type="button" className="btn btn-warning" onClick={handleBack}>Back</button>
                        )}
                        {step < 2 ? (
                            <button type="button" className="btn btn-primary" onClick={handleNext} disabled={!isValid}>Next</button>
                        ):(
                            <button type="submit" className="btn btn-success" disabled={!isValid}>Submit</button>
                        )}
                    </div>

                </form>
            </div>
        </div>
    );
}
