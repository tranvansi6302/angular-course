import { User } from './user.response'
import { ApiResponse } from './util.response'

export type LoginResponse = ApiResponse<{
    token: string
    user: User
}>
