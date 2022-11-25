import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('pointer')
export class PointerEntity {
    @PrimaryGeneratedColumn()
    pointerID: number ;

    @Column({nullable: true,})
    studentID : number;

    @Column({nullable: true,})
    firstName : string;

    @Column({nullable: true,})
    lastName : string;

    @Column({nullable: true,})
    score : number ;

    @Column({nullable: true,})
    locationID : string ;

    @Column({nullable: true,})
    boothID  : string ;

}