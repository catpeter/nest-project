import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class WorkItem {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 100 })
    public text: string;

    @Column({ default: false })
    public isChecked: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    public createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    public updateAt: Date;
}