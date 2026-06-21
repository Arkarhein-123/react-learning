import { useForm } from "react-hook-form";

export default function HookFormTest() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstname", {
                        required: "First Name is required..",
                        minLength: { value: 3, message: "Too short!" },
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: "Letters only",
                        },
                    })}
                />
                {errors.firstname && (
                    <p className="text-red-700">{errors.firstname.message}</p>
                )}
                <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastname", {
                        required: "Last name is required...",
                        minLength: { value: 3, message: "Too short!" },
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: "Letters only",
                        },
                    })}
                />
                {errors.lastname && (
                    <p className="text-red-700">{errors.lastname.message}</p>
                )}
                <button
                    className="bg-blue-600 py-3 px-5 rounded-md mx-3 my-4 cursor-pointer w-50"
                    type="submit"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
