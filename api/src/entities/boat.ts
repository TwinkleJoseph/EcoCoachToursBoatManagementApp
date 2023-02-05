import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn} from 'typeorm'

@Entity({name: 'fishing_boats'})
export class Guide {

    @PrimaryGeneratedColumn('uuid',{name: 'id'})
    id: string;

    @Column({ length: 40, name: 'registration_number',nullable: false })
    registrationNumber: string;

    @Column({ length: 40, name: 'vessel_name',nullable: true, default: null })
    vesselName: string;

    @Column({ length: 40, name: 'port_registration',nullable: true, default: null })
    portOfRegistration: string;

    @Column({ type: 'uuid',name: 'guide_id'})
    guideId: string;

    @Column({ length: 40, name: 'status' })
    status: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_datetime' })
    createdDateTime : Timestamp

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_datetime' })
    updatedDateTime : Timestamp

}