import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { debounceTime } from 'rxjs'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    // Lưu lại thông tin người dùng nhập vào form nếu người dùng lỡ vô tình F5 thì dữ liệu nhập trước đó vẫn còn
    private form = viewChild<NgForm>('form')
    private destroyRef = inject(DestroyRef)

    constructor() {
        const savedForm = window.localStorage.getItem('save-login-form')

        // Sẽ gọi hàm này sau khi render xong component
        afterNextRender(() => {
            if (savedForm) {
                const { email } = JSON.parse(savedForm)
                setTimeout(() => {
                    this.form()?.controls['email'].setValue(email)
                }, 1)
            }

            // Vì cứ mỗi lần nhấn phím sẽ lưu xuống nên sẽ không tốt cho performance vì vậy dùng pipe (debounceTime) để cải thiện
            const subscription = this.form()
                ?.valueChanges?.pipe(debounceTime(500))
                .subscribe({
                    next: value =>
                        window.localStorage.setItem(
                            'save-login-form',
                            JSON.stringify({
                                email: value.email,
                            })
                        ),
                })
            this.destroyRef.onDestroy(() => {
                subscription?.unsubscribe()
            })
        })
    }

    onSubmit(formData: NgForm) {
        if (formData.form.invalid) return
        const { email: enteredEmail, password: enteredPassword } = formData.form.value
        console.log(`Email: ${enteredEmail}, Password: ${enteredPassword}`)

        formData.form.reset()
    }
}
