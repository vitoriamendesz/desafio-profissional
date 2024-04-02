import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user"
import { Category } from "./category"

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    creationData: Date

    @Column()
    conclusionData: Date

    @Column()
    type: string

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category

    @Column()
    status: string

    @OneToOne(() => User)
    @JoinColumn()
    user: User 
}