import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, tap} from "rxjs";
import {CommonService} from "../api/common.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authorizedSource = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.authorizedSource.asObservable();
  constructor(private http: HttpClient,
              private commonService: CommonService,
              private router: Router) {
    const token = localStorage.getItem('profanis_auth');
    this.authorizedSource.next(!!token);
  }

  public isAuthorized(): boolean {
    console.log("isAuthorized: ",this.authorizedSource.value);
    return this.authorizedSource.value;
  }

  public setAuthorized(value: boolean): void {
    const previous = this.authorizedSource.value;
    this.authorizedSource.next(value);
    if (previous === this.authorizedSource.value) {
      return;
    }
    const i = this.router.config.findIndex(x => x.path === 'home');
    this.router.config.splice(i, 1);
    this.router.config.push(
      {path: '', loadChildren: () => import('../../components/admin/admin.module').then(mod => mod.AdminModule)}
    );
  }
  login(username: string, password: string) {
    return this.commonService.login(username, password).pipe(
      tap((response: any) => {
        this.authorizedSource.next(true);
        localStorage.setItem('profanis_auth', response.token);
      })
    );
  }
}
