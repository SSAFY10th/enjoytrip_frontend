export class HttpError extends Error {
  constructor({ statusCode, message }) {
    this.statusCode = statusCode
    this.message = message
  }
}
