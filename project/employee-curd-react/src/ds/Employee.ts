/*
public class EmployeeDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private double salary;
}
*/
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  salary: number;
}