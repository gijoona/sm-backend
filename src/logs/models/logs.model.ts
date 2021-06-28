import { AutoIncrement, Column, Model, PrimaryKey, Table, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table({ tableName: "SM_TSP_LOG" })
export class Logs extends Model {
  
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'LOG_ID' })
  id: number;

  /**
   * 활동유형: 사용자사이트에서의 활동 분류
   * User, Product, Cart
   */
  @Column({ field: 'LOG_TYP'})
  type: string;

  /**
   * 요청동작: 활동유형별 요청동작
   * User: [login, join], Product: [search], Cart: [add]
   */
  @Column({ field: 'LOG_ACT' })
  action: string;

  /**
   * 키워드: 요청동작별 핵심단어
   * User: [ {login: 아이디}, {join: 아이디} ], 
   * Product: [ {search: 검색문구} ], 
   * Cart: [ {add: 제품코드} ]
   */
  @Column({ field: 'LOG_KEYWORD' })
  keyword: string;

  /**
   * 요청데이터
   * Request를 string으로 변환해서 담는다.
   */
  @Column({ field: 'LOG_REQ_DATA'})
  data: string;

  // 로그 발생일자
  @CreatedAt
  @Column({ field: 'REG_DT' })
  createdAt: Date;

  // 사용안함.
  @UpdatedAt
  @Column({ field: 'UPD_DT' })
  updatedAt: Date;
}