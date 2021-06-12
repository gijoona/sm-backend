import { User } from './../../user/models/user.model';
import { Column, Model, PrimaryKey, ForeignKey, AutoIncrement, Table, CreatedAt, UpdatedAt, BelongsTo } from "sequelize-typescript";

@Table({tableName: "SM_TSP_CART"})
export class Cart extends Model {
  // ID
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'CART_ID' })
  id: number;
  
  // 회원코드
  // Model association (1:N)
  @ForeignKey(() => User)
  @Column({ field: 'CUST_CD' })
  userCd: string;

  // 제품코드
  @Column({ field: 'PRD_CD' })
  itemCd: string;

  // 제품순번...?
  @Column({ field: 'PRD_SEQ' })
  itemSeq: number;

  // 메모
  @Column({ field: 'PRD_MMO' })
  memo: string;

  // 수량
  @Column({ field: 'PRD_QTY' })
  quantity: number;

  // 등록일자
  @CreatedAt
  @Column({ field: 'REG_DT' })
  createdAt: Date;

  // 수정일자
  @UpdatedAt
  @Column({ field: 'UPD_DT' })
  updatedAt: Date;

  // Model association (1:N)
  @BelongsTo(() => User)
  user: User;
}