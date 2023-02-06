//import { environment } from './../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root',
})

export class CalculatorService {//prev: string,oper: string,curr: string

    //private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) {}

    public evaluateOp(oper: string,prev: string,curr: string): Observable<string> {
        return this.http.post<string>(`http://localhost:9090/operate/${oper}/${prev}/${curr}`, JSON);
    }
}
