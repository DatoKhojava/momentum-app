export interface StatusResponse {
  id: number;
  name: string;
}

export interface PrioritiesResponse {
  id: number;
  name: string;
  icon: string;
}

export interface DepartmentsResponse {
  id: number;
  name: string;
}

export interface EmployeesResponse {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  department_id: string;
}

export interface EmployeesRequest {
  name: number;
  surname: string;
  avatar: string;
  department_id: string;
}

export interface SubComment {
  id: number;
  text: string;
  task_id: number;
  parent_id: number;
  author_avatar: string;
  author_nickname: string;
}

export interface CommentResponse {
  id: number;
  text: string;
  task_id: number;
  parent_id: number;
  author_avatar: string;
  author_nickname: string;
  sub_comments: SubComment[];
}

export interface CommentRequest {
  id: number;
  text: string;
  task_id: number;
  parent_id: number;
}

export interface TaskResponse {
  id: number;
  name: string;
  description: string;
  due_date: string;
  status: StatusResponse;
  priority: {
    id: number;
    name: string;
    icon: string;
  };
  department: DepartmentsResponse;
  employee: EmployeesResponse;
}

export interface TaskRequest {
  id: number;
  name: string;
  description: string;
  due_date: string;
  status: StatusResponse;
  priority: {
    id: number;
    name: string;
    icon: string;
  };
  department: DepartmentsResponse;
  employee: EmployeesResponse;
}