export class UserModel {
  public id: string;
  public username: string;
  public password: string;
  public role: string;

  constructor(id: string, username: string, password: string, role: string) {
    this.id = id;
    this.password = password;
    this.username = username;
    this.role = role;
  }
}
