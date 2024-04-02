import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    username: string
    @Column()
    weight: number
    @Column()
    password: string
    @Column()
    email: string
   
}