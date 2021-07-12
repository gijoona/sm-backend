import { Column, Table, Model, PrimaryKey, BelongsToMany } from "sequelize-typescript";

import { Company } from "src/user/models/comp.model";
import { CompanyCategory } from "src/user/models/comp-category.model";

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

  @Column({ field: 'UPD_DT'})
  updatedAt: Date;

  /**
   * 카테고리 <-> 업체 관계
   * Model association (M:N)
   */
     @BelongsToMany(() => Company, () => CompanyCategory)
     companys: Company[];
}