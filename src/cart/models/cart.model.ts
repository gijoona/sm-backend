import { User } from 'src/user/models/user.model';
import { Item } from 'src/items/models/item.model';
import { Column, Model, PrimaryKey, ForeignKey, AutoIncrement, Table, CreatedAt, UpdatedAt, BelongsTo } from "sequelize-typescript";

@Table({tableName: "SM_TSP_CART"})
export class Cart extends Model {
  // ID
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'CART_ID' })
  id: number;
  
  
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
  
  /**
   * 회원 <-> 카트 관계
   * Model association (1:N)
   */
  // 회원코드 (회원키)
  @ForeignKey(() => User)
  @Column({ field: 'CUST_CD' })
  userCd: string;
  
  @BelongsTo(() => User, 'userCd')
  user: User;

  /**
   * 제품 <-> 카트 관계
   * Model association (1:N)
   */
  // 제품코드 (제품키)
  @ForeignKey(() => Item)
  @Column({ field: 'PRD_CD' })
  itemCd: string;
  
  @BelongsTo(() => Item, 'itemCd')
  item: Item;
}