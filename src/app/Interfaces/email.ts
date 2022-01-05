export interface IEmail {
  id: string,
  from: string,
  to: Array<string>,
  cc: Array<string>,
  subject: string,
  body: string
}