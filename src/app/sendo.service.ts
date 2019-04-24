import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class SendoService {
  constructor(private http: HttpClient) {}
  private sendoList =
    "https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/?p=1";
  private sendoDetail = "https://mapi.sendo.vn/mob/product";

  getProducts(): Observable<any[]> {
    return this.http
      .get<any[]>(this.sendoList)
      .pipe(catchError(this.handleError<any[]>("getProducts", [])));
  }

  searchProducts(KEYWORD: string): Observable<any[]> {
    const url = `https://mapi.sendo.vn/mob/product/search?p=1&q=${KEYWORD}`;
    return this.http
      .get<any[]>(url)
      .pipe(catchError(this.handleError<any[]>("getProducts", [])));
  }

  getProduct(id: number): Observable<any> {
    const url = `${this.sendoDetail}/${id}/detail/`;
    console.log(url);
    return this.http
      .get<any>(url)
      .pipe(catchError(this.handleError<any>(`getProduct id=${id}`)));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
