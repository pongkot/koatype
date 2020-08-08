import ServiceCore from "../../common/ServiceCore"
import IUserService from "./IUserService"
import { Observable, from } from 'rxjs'
import { map, toArray } from 'rxjs/operators'

export interface IUser {
    id: number
    avatarId: number
    createAt: Date
}

export default class UserService extends ServiceCore implements IUserService {
    private readonly datasource: any[]

    constructor(datasource: any[]) {
        super()
        this.datasource = datasource
    }

    getUser(id: number): Observable<IUser[]> {
        const data = this.datasource
        return from(data).pipe(
            map((i: number) => {
                const r: IUser = {
                    id: i,
                    avatarId: Math.round(Math.random() * 100),
                    createAt: new Date(),
                }
                return r
            }),
            toArray(),
            map((i: IUser[]) => i.filter((i: IUser) => i.id == id)),
        )
    }

    listUser(): Observable<IUser[]> {
        const data = this.datasource
        return from(data).pipe(
            map((i: number) => {
                const r: IUser = {
                    id: i,
                    avatarId: Math.round(Math.random() * 100),
                    createAt: new Date(),
                }
                return r
            }),
            toArray()
        )
    }
}
