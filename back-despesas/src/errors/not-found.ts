export class NotFoundError extends Error {
  constructor(public message: string) {
    super(`${message} não encontrado.`)
  }
}
