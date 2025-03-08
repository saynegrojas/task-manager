export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface Tasks {
  tasks: Task[];
}

export interface Mode {
  mode: string;
}
