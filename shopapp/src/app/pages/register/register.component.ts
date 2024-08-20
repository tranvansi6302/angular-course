import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms'
import { RouterOutlet } from '@angular/router'
import { RegisterDTO } from '../../dtos/user/register.dto'
import { UserService } from '../../services/user/user.service'

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    userForm: FormGroup

    constructor(private userService: UserService) {
        this.userForm = new FormGroup(
            {
                fullname: new FormControl('', {
                    validators: [Validators.required, Validators.minLength(6)],
                    updateOn: 'change'
                }),
                email: new FormControl('', {
                    validators: [Validators.required, Validators.email],
                    updateOn: 'change'
                }),
                password: new FormControl('', {
                    validators: [Validators.required, Validators.minLength(6)],
                    updateOn: 'change'
                }),
                confirmPassword: new FormControl('', {
                    validators: [Validators.required, Validators.minLength(6)],
                    updateOn: 'change'
                })
            },
            { validators: this.passwordMatchValidator }
        )
    }

    passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
        const password = control.get('password')
        const confirmPassword = control.get('confirmPassword')
        if (password && confirmPassword && password.value !== confirmPassword.value) {
            return { passwordMismatch: true }
        }
        return null
    }

    onSave() {
        // Khi submit thì bắt buộc validate tất cả các trường
        this.userForm.markAllAsTouched()
        const formData = this.userForm.value

        if (this.userForm.valid) {
            const convertData = {
                full_name: formData.fullname,
                email: formData.email,
                password: formData.password
            }
            const registerDTO = new RegisterDTO(convertData)

            this.userService.registerUser(registerDTO).subscribe({
                next: (res) => {
                    console.log(res)
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
}
