import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";


@Entity({name: 'guides'})
export class Guide {

    @PrimaryGeneratedColumn('uuid',{name: 'id'})
    id: string;

    @Column({ length: 50, name: 'first_name',nullable: true, default: null })
    firstName: string;

    @Column({ length: 50, name: 'last_name',nullable: true, default: null })
    lastName: string;

    @Column({ length: 50, name: 'phone',nullable: true, default: null })
    phone: string;

    @Column({ length: 50, name: 'address',nullable: true, default: null })
    address: string;

    @Column({ length: 50, name: 'license_number',nullable: true, default: null })
    licenseNumber: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_datetime' })
    createdDateTime : Timestamp

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_datetime' })
    updatedDateTime : Timestamp
}