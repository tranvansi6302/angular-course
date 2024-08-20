import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { RegisterDTO } from '../../dtos/user/register.dto'
import { loginDTO } from '../../dtos/user/login.dto'
import { environment } from '../../environments/environment'
import { LoginResponse } from '../../responses/auth.response'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiRegister = `${environment.baseUrl}/auth/register`
    private apiLogin = `${environment.baseUrl}/auth/login`
    private apiConfig = {
        headers: this.createHeaders()
    }
    constructor(private http: HttpClient) {}

    private createHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    registerUser(RegisterDTO: RegisterDTO): Observable<any> {
        return this.http.post(this.apiRegister, RegisterDTO, this.apiConfig)
    }

    loginUser(loginDTO: loginDTO): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.apiLogin, loginDTO, this.apiConfig)
    }
}
