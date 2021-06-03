import { Column, Table, Model, PrimaryKey } from "sequelize-typescript";

@Table({tableName: 'SM_TSP_CAT'})
export class Category extends Model {
  @PrimaryKey
  @Column({ field: 'CAT_CD' })
  code: string;

  @Column({ field: 'CAT_NM_KR1'})
  nameKor: string;

  @Column({ field: 'CAT_NM_KR2'})
  nameKor2: string;

  @Column({ field: 'CAT_NM_EN1'})
  nameEng: string;

  @Column({ field: 'CAT_NM_EN2'})
  nameEng2: string;

  @Column({ field: 'REG_DT'})
  createdAt: Date;

  @Column({ field: 'UPT_DT'})
  updatedAt: Date;
}