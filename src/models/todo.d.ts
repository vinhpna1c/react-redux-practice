
export enum ToDoStatus {
    DONE = "done",
    PENDING = "pending",

};

export interface ITodo {
    id: string,
    title: string,
    description?: string,
    status: ToDoStatus
}