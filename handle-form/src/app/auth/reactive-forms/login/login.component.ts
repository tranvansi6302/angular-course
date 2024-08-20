import { Component, DestroyRef, inject, OnInit } from '@angular/core'
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { debounceTime, of } from 'rxjs'

// Custom validate
function mustContainQuestionMark(control: AbstractControl) {
    if (control.value.includes('?')) {
        return null
    }
    return { mustContainQuestionMark: true }
}

// Vi du server tra ve thong tin email da ton tai
function emailIsUnique(control: AbstractControl) {
    if (control.value !== 'test@gmail.com') {
        return of(null)
    }
    return of({ emailIsUnique: true })
}

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
    private destroyRef = inject(DestroyRef)
    ngOnInit(): void {
        const savedForm = window.localStorage.getItem('save-login-form')
        if (savedForm) {
            this.form.patchValue(JSON.parse(savedForm))
        }
        const subscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
            next: value => {
                window.localStorage.setItem('save-login-form', JSON.stringify({ email: value.email }))
            },
        })
        this.destroyRef.onDestroy(() => subscription.unsubscribe())
    }

    form = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email],
            asyncValidators: [emailIsUnique],
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark],
        }),
    })

    get emailIsInvalid() {
        return this.form.controls.email.touched && this.form.controls.email.dirty && this.form.controls.email.invalid
    }

    get passwordIsInvalid() {
        return (
            this.form.controls.password.touched &&
            this.form.controls.password.dirty &&
            this.form.controls.password.invalid
        )
    }

    onSubmit() {
        console.log(this.form.value)
    }
}
