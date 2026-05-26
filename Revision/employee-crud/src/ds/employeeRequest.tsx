/*
    @NotBlank(message = "First Name is Required")
    private String firstName;
    @NotBlank(message = "Last Name is Required")
    private String lastName;
    @NotBlank(message = "Email is required")
    private String email;
    @PositiveOrZero(message = "Must be zero or positive")
    private double salary;
*/

export interface employeeRequest  {
    firstName : string,
    lastName : string,
    email : string,
    salary : number
}