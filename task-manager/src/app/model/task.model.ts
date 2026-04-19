export interface TaskModel {
    id: string,
    title: string,
    due: Date,
    level: "low" | "medium" | "high",
    desc: string,
    status: "todo" | "doing" | "done"
}
