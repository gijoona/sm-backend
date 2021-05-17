import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Exam extends Model {
  @Column
  seq: number;

  @Column
  name: string;

  @Column({defaultValue: true})
  isActive: boolean;
}