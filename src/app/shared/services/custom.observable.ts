import { Observable } from "rxjs";

export class CustomObservable {
    createHttpObservable(url: string): any {
        return new Observable(observer => {
            fetch(url).then(response => {
                return response.json()
            }).then(body => {
                observer.next(body);
                observer.complete();
            }).catch(err => {
                observer.error(err);
            });
        });
    }
}