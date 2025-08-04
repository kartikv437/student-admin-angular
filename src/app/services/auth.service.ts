import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { LoginResponse } from '../interfaces/login-interface';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient, private constants: ConstantsService) { }

    login(email: string, password: string, role: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.constants.route}/auth/login`, {
            email,
            password,
            role
        });
    }

    userList() {
        const token = localStorage.getItem('token');

        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        return this.http.get<UserInterface[]>(`${this.constants.route}/users`, { headers })
    }

    userInfo(id: string) {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        return this.http.get<UserInterface>(`${this.constants.route}/users/${id}`, { headers })
    }


    logout() {
        localStorage.removeItem('token');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }
}
