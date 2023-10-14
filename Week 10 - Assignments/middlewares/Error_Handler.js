class BadRequestError extends Error {
    constructor(message = 'Bad Request') {
      super(message);
      this.name = this.constructor.name;
      this.status = 400;
    }
  }
  
  class InternalServerError extends Error {
    constructor(message = '	Internal Server Error') {
      super(message);
      this.name = this.constructor.name;
      this.status = 500;
    }
  }
  
  class NotFoundError extends Error {
    constructor(message = 'Not Found') {
      super(message);
      this.name = this.constructor.name;
      this.status = 404;
    }
  }

  module.exports = {
    BadRequestError,
    InternalServerError,
    NotFoundError,
  };