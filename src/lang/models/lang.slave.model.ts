import { Column, Model, PrimaryKey, ForeignKey, AutoIncrement, Table, BelongsTo, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { LangMaster } from "./lang.master.model";

@Table({tableName: "SM_TSP_LNG_SLV"})
export class LangSlave extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'SLV_ID' })
  id: string;
  
  // 다국어코드
  @Column({ field: 'SLV_CD' })
  code: string;

  // 다국어 언어유형(KOR, ENG)
  @Column({ field: 'SLV_LNG_TYP'})
  type: string;

  // 다국어 문자
  @Column({ field: 'SLV_TXT'})
  text: string;

  // 정렬순번
  @Column({ field: 'SLV_SORT'})
  sort: number;

  // 사용유무
  @Column({ field: 'USE_YN'})
  isUse: string

  @CreatedAt
  @Column({ field: 'REG_DT' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'UPD_DT' })
  UpdatedAt: Date;

  // 다국어 마스터코드
  // Model association (1:N)
  @ForeignKey(() => LangMaster)
  @Column({ field: 'MST_ID' })
  masterId: string;

  // Model association (1:N)
  @BelongsTo(() => LangMaster)
  master: LangMaster;
}