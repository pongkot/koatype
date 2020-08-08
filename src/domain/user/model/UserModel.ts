export default class UserModel {
    private id: number
    private name: string
    private createAt: Date
    private avatarId: number

    public setId(id: number): void {
        this.id = id
    }

    public setName(name: string): void {
        this.name = name
    }

    public setCreateAt(date: Date): void {
        this.createAt = date
    }

    public setAvatarId(id: number): void {
        this.avatarId = id
    }

    public getId(): number {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getCreateAt(): Date {
        return this.createAt
    }

    public getAvatarId(): number {
        return this.avatarId
    }
}
