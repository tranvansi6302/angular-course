import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms'
import { RouterOutlet } from '@angular/router'
import { RegisterDTO } from '../../dtos/user/register.dto'
import { UserService } from '../../services/user/user.service'
import { loginDTO } from '../../dtos/user/login.dto'
import { TokenService } from '../../services/token/token.service'
import { ButtonComponent } from '../../components/button/button.component'
import { InputTextModule } from 'primeng/inputtext'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterOutlet, ReactiveFormsModule, CommonModule, ButtonComponent, InputTextModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    userForm: FormGroup

    constructor(private userService: UserService, private tokenService: TokenService) {
        this.userForm = new FormGroup({
            email: new FormControl('', {
                validators: [Validators.required, Validators.email],
                updateOn: 'change'
            }),
            password: new FormControl('', {
                validators: [Validators.required, Validators.minLength(6)],
                updateOn: 'change'
            })
        })
    }

    onSave() {
        // Khi submit thì bắt buộc validate tất cả các trường
        this.userForm.markAllAsTouched()
        const formData = this.userForm.value

        if (this.userForm.valid) {
            const convertData = {
                email: formData.email,
                password: formData.password
            }
            const registerDTO = new loginDTO(convertData)

            this.userService.loginUser(registerDTO).subscribe({
                next: (res) => {
                    const token = res.result?.token

                    if (token) {
                        this.tokenService.setToken(token)
                    }
                },
                error: (err) => {
                    console.log(err)
                },
                complete: () => {
                    console.log('Register success')
                }
            })
        } else {
            console.error('Form is invalid')
        }
    }

    handleButtonClick(event: Event): void {
        console.log('Button clicked!', event)
    }
}
