import { Observable } from 'rxjs'
import { IUser } from './UserService';

export default interface IUserService {
    listUser(): Observable<IUser[]>
    getUser(id: number): Observable<IUser[]>
}
