/*
private Long id; // long = 0 / Long = null
    private String title;
    private String description;
    private Boolean isCompleted;
    private LocalDate assignedDate;
    private LocalDate dueDate;
    private int dueDays;
*/

export interface Todo{
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    assignedDate: Date;
    dueDate: Date;
    dueDays: number;
}