import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable({ providedIn: 'root' })
export class CheckListSummaryService {

  public updateURL = "http://localhost:8080/api/studies";
  public checkListSummaryUrl = "http://localhost:8080/api/checkListDetails";
  public updateCheckListDetails = "http://localhost:8080/api/checkListDetails";
  public checkListIds ="http://localhost:8080/api/checklist/ids";
  public addCheckListDetailsUrl = "http://localhost:8080/api/checkListDetails";
  public deleteCheckListDetailsUrl = "http://localhost:8080/api/checkListDetails";


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

    getCheckListIds() : any {
      return this.http.get(this.checkListIds).pipe(map(this.extractObserverData));
    }


    deleteChecklistSummary(studyId: string) : any {
      return this.http.delete(this.deleteCheckListDetailsUrl+'/' + studyId).pipe(map(this.extractObserverData));
    }


  getCheckListSummary(studyId: String) : any {
    return this.http.get(this.checkListSummaryUrl + '/' + studyId).pipe(map(this.extractObserverData), catchError(this.handleError('getCheckListSummary', [])));
  }

  addNewChecklistDetails(requestBody) : any {
    return this.http.post(this.addCheckListDetailsUrl , requestBody).pipe(map(this.extractObserverData)); 
  }

  saveCheckListDetails(requestBody, studyId) : any {
    return this.http.put(this.updateCheckListDetails + '/' + studyId, requestBody).pipe(map(this.extractObserverData));
  }


  private extractObserverData(res: Response) {
   
    return res;
}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

     
      console.error(error); 

 
      return of(result as T);
    };
  }

 
}
