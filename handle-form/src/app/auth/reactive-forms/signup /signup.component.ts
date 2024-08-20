import { Component } from '@angular/core'
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

function equalValues(control: AbstractControl) {
    const password = control.get('password')?.value
    const confirmPassword = control.get('confirmPassword')?.value
    if (password === confirmPassword) {
        return null
    }
    return { passwordsNotEqual: true }
}

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css',
})
export class SignupComponent {
    form = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email],
        }),
        // Nested form group
        passwords: new FormGroup(
            {
                password: new FormControl('', {
                    validators: [Validators.required, Validators.minLength(6)],
                }),
                confirmPassword: new FormControl('', {
                    validators: [Validators.required],
                }),
            },
            {
                validators: [equalValues],
            }
        ),

        firstName: new FormControl('', {
            validators: [Validators.required],
        }),
        lastName: new FormControl('', {
            validators: [Validators.required],
        }),
        address: new FormGroup({
            street: new FormControl('', {
                validators: [Validators.required],
            }),
            number: new FormControl('', {
                validators: [Validators.required],
            }),
            postalCode: new FormControl('', {
                validators: [Validators.required],
            }),
            city: new FormControl('', {
                validators: [Validators.required],
            }),
        }),
        role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student', {
            validators: [Validators.required],
        }),
        agree: new FormControl(false, {
            validators: [Validators.requiredTrue],
        }),

        source: new FormArray([new FormControl(false), new FormControl(false), new FormControl(false)]),
    })

    onSubmit() {
        console.log(this.form)
    }

    onReset() {
        this.form.reset()
    }
}
