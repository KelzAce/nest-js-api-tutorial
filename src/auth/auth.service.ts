import { Injectable } from "@nestjs/common";


@Injectable()
export class AuthService {
    signup() {
        return 'I am Signed Up'
    }

    signin() {
        return 'I am Signed In'
    }
}