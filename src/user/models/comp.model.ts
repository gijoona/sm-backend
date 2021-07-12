import { Column, Model, PrimaryKey, Table, HasMany, AutoIncrement, UpdatedAt, CreatedAt, BelongsToMany } from "sequelize-typescript";

import { User } from './user.model';
import { Category } from 'src/category/models/category.model';
import { CompanyCategory } from './comp-category.model';

@Table({ tableName: "SM_TSP_CMP" })
export class Company extends Model {
  
  // 업체ID
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'CMP_ID' })
  id: string;
  
  // 업체명
  @Column({ field: 'CMP_NM' })
  name: string;
  
  // 우편번호
  @Column({ field: 'CMP_ZP_CD' })
  zipCode: string;
  
  // 주소1
  @Column({ field: 'CMP_ADDR1' })
  addr1: string;
  
  // 주소2
  @Column({ field: 'CMP_ADDR2' })
  addr2: string;
  
  // 대표자명
  @Column({ field: 'CEO_NM' })
  ceoNm: string;
  
  // 법인번호
  @Column({ field: 'BZ_NO'})
  bzNo: string;

  // 사업자등록번호
  @Column({ field: 'CMP_NO'})
  cmpNo: string;
  
  // 등록일자
  @CreatedAt
  @Column({ field: 'REG_DT' })
  createdAt: Date;
  
  // 수정일자
  @UpdatedAt
  @Column({ field: 'UPD_DT' })
  updatedAt: Date;
  
  /**
   * 업체 <-> 회원 관계
   * Model association (1:N)
   */
  @HasMany(() => User)
  users: User[];

  /**
   * 업체 <-> 카테고리 관계
   * Model association (M:N)
   */
   @BelongsToMany(() => Category, () => CompanyCategory)
   categorys: Category[];
}