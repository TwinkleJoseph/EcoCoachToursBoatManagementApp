/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Response } from 'express'

export class ErrorHandler {
  public handleValidationError (res:Response, name:string, message:string, statusCode:number, error:string) {
    res.status(statusCode).json({
      name: name,
      message: message,
      statusCode: statusCode,
      error: error
    })
  }

  public handleExceptionError (res:Response, name:string, message:string, statusCode:number, error:string, err:Error) {
    res.status(statusCode).json({
      name: name,
      message: message,
      statusCode: statusCode,
      error: error,
      details: err
    })
  }
}