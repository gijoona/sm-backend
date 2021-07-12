import { Model, Table, Column, PrimaryKey, AutoIncrement, ForeignKey, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import { Company } from 'src/user/models/comp.model';
import { Category } from 'src/category/models/category.model';

@Table({ tableName: 'SM_TSP_CMP_CAT'})
export class CompanyCategory extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'MAP_ID' })
  id: number;

  @ForeignKey(() => Company)
  @Column({ field: 'CMP_ID' })
  cmpId: number;

  @ForeignKey(() => Category)
  @Column({ field: 'CAT_CD' })
  catCd: string;

  @CreatedAt
  @Column({ field: 'REG_DT' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'UPD_DT' })
  updatedDt: Date;
}