export interface IDBConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
}

export interface IDBConfig {
  development: IDBConfigAttributes;
  testing: IDBConfigAttributes;
  production: IDBConfigAttributes;
}
