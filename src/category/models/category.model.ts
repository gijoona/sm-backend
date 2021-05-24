import { Column, Table, Model, PrimaryKey } from "sequelize-typescript";

@Table({modelName: 'sm_item_categorys'})
export class Category extends Model {
  @PrimaryKey
  @Column
  code: string;

  @Column
  nameKor: string;

  @Column
  nameKor2: string;

  @Column
  nameEng: string;

  @Column
  nameEng2: string;
}