import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

export class AppErrorHandler implements ErrorHandler
{
	handleError(error: Error | HttpErrorResponse): void
    {
        console.log('Error: '+error.message);
    }
}
