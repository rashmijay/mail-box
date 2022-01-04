export interface IEmail  {
    id: string,
    to: Array<string>,
    cc: Array<string>,
    bcc: Array<string>,
    subject: string,
    body: string
  }