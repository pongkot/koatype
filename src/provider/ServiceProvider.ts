import UserService from "../service/UserService"

export default class ServiceProvider {
    private static instance: ServiceProvider = new ServiceProvider()

    public static getInstance(): ServiceProvider {
        return this.instance
    }

    public userService(): UserService {
        return new UserService([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    }
}