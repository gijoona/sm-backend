import { User } from 'src/user/models/user.model';
import { Item } from 'src/items/models/item.model';
import { Column, Model, PrimaryKey, ForeignKey, AutoIncrement, Table, CreatedAt, UpdatedAt, BelongsTo, HasMany } from "sequelize-typescript";
import { CartItem } from './cart-item.model';

@Table({tableName: "SM_TSP_CART"})
export class Cart extends Model {
  // ID
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'CART_ID' })
  id: number;
  
  // 카트생성 (YYYY-MM-DD)
  @Column({ field: 'CART_DATE'})
  date: string;

  // 카트 SEQ. 날짜별 생성 SEQ.
  @Column({ field: 'CART_SEQ' })
  seq: number;

  // 카트명
  @Column({ field: 'CART_NM'})
  name: string;

  // 카트 메모사항.
  @Column({ field: 'CART_MEMO' })
  memo: string;

  // 요청업체 아이디
  @Column({ field: 'REQ_CMP_ID' })
  cmpId: number;

  // 요청업체 사업자등록번호
  @Column({ field: 'REQ_CMP_NO' })
  cmpNo: string;

  // 요청업체 명
  @Column({ field: 'REQ_CMP_NM' })
  cmpNm: string;
  
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
   * 카트 <-> 카트상세 관계
   * Model association (1:N)
   */
  @HasMany(() => CartItem)
  cartItems: CartItem[];

  // 안쓰는 컬럼들.
  @Column({ field: 'PRD_SEQ' })
  itemSeq: number;
  
  @Column({ field: 'PRD_MMO' })
  itemMemo: string;
  
  @Column({ field: 'PRD_QTY' })
  itemQuantity: number;
}