export enum TaskStatus {
  DONE = 'PENDING',
  INPROGRESS = 'INPROGRESS',
  PENDING = 'PENDING',
}
export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
