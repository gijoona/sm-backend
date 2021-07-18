import { Cart } from './cart.model';
import { Item } from 'src/items/models/item.model';
import { Column, Model, PrimaryKey, ForeignKey, AutoIncrement, Table, CreatedAt, UpdatedAt, BelongsTo } from "sequelize-typescript";

@Table({tableName: "SM_TSP_CART_DTL"})
export class CartItem extends Model {
  // ID
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'CART_DTL_ID' })
  id: number;
  
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
   * 카트 <-> 카트상세 관계
   * Model association (1:N)
   */
  // 카트아이디 (카트키)
  @ForeignKey(() => Cart)
  @Column({ field: 'CART_ID' })
  cartId: string;
  
  @BelongsTo(() => Cart, 'cartId')
  cart: Cart;

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