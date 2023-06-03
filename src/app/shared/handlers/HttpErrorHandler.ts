import { HttpErrorResponse } from "@angular/common/http";

export class HttpErrorHandler{
    error(ex: HttpErrorResponse)
    {
        console.log('Error while calling API. Status: '+ex.status+' Message: '+ex.message);
    }
}