export class User {
  id?: number;
  name?: string;
  email?: string;
  phones?: { number?: string, type?: string }[];
}