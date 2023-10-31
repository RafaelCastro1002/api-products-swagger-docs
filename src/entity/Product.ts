import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  description: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  quantity: number;
}
