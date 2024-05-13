export type User = {
  name: string,
  email: string,
  password: string
  [key: string]: string | number;
}

export type Users = User[]