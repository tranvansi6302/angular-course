import { HttpInterceptorFn } from '@angular/common/http'
import { TokenService } from '../services/token/token.service'

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const tokenService = new TokenService()
    const token = tokenService.getToken()
    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    return next(req)
}
