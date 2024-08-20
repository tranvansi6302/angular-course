import { Role } from './role.response'

export interface User {
    id: number
    full_name: string
    avatar: string
    email: string
    date_of_birth: string
    phone_number: string
    roles: Role[]
    status: string
    created_at: string
    updated_at: string
}
