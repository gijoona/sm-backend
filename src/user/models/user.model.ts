import { Cart } from './../../cart/models/cart.model';
import { Column, Model, PrimaryKey, Table, HasMany } from "sequelize-typescript";

@Table({tableName: "SM_TSP_CUST", })
export class User extends Model {
  
  // 회원코드
  @PrimaryKey
  @Column({ field: 'CUST_CD' })
  code: string;

  // 이름
  @Column({ field: 'CUST_NM' })
  name: string;

  // 이메일
  @Column({ field: 'CUST_EML' })
  email: string;

  // 연락처번호
  @Column({ field: 'CUST_TEL' })
  tel: string;

  // 팩스번호
  @Column({ field: 'CUST_FX' })
  fax: string;

  // 휴대폰번호
  @Column({ field: 'CUST_HP' })
  phone: string;

  // 우편번호
  @Column({ field: 'ZP_CD' })
  zipCode: string;

  // 주소1
  @Column({ field: 'ADDR1' })
  addr1: string;

  // 주소2
  @Column({ field: 'ADDR2' })
  addr2: string;

  // 국적
  @Column({ field: 'NAT_CD' })
  nation: string;

  // 지역1
  @Column({ field: 'CONTI_AR1' })
  area1: string;

  // 지역2
  @Column({ field: 'CONTI_AR2' })
  area2: string;

  // 가입일자
  @Column({ field: 'REG_DT' })
  createdAt: Date;

  // 수정일자
  @Column({ field: 'UPD_DT' })
  updatedAt: Date;

  // 회원구분: 마린/종합상사/공급자
  @Column({ field: 'CUST_DV' })
  type: string;

  // 사업자등록번호
  @Column({ field: 'BZ_REG_NO' })
  companyNo: string;

  // 유료회원구분: Y/N
  @Column({ field: 'PAD_DV' })
  isPaidMember: string;

  // 유료회원 시작일
  @Column({ field: 'PAD_ST_DT' })
  paidStart: string;

  // 유료회원 종료일
  @Column({ field: 'PAD_ED_DT' })
  paidEnd: string;

  // 법인번호
  @Column({ field: 'CMP_NO' })
  corpNo: string;

  // 대표자명
  @Column({ field: 'CEO_NM' })
  ceoNm: string;
  
  // 아이디
  @Column({ field: 'CUST_ID' })
  id: string;

  // 패스워드
  @Column({ field: 'CUST_PWD' })
  pass: string;

  @HasMany(() => Cart)
  carts: Cart[];
}