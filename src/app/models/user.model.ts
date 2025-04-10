// models/user.model.ts
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User';
}
