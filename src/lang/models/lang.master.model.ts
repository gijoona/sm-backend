import { LangSlave } from './lang.slave.model';
import { Column, HasMany, Model, PrimaryKey, AutoIncrement, Table, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table({tableName: "SM_TSP_LNG_MST"})
export class LangMaster extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'MST_ID' })
  id: string;
  
  // 다국어 그룹명
  @Column({ field: 'MST_NM' })
  name: string;

  // 다국어 그룹내 정렬순번
  @Column({ field: 'MST_SORT'})
  sort: number;

  // 다국어 그룹단위 사용여부
  @Column({ field: 'USE_YN'})
  isUse: string;

  @CreatedAt
  @Column({ field: 'REG_DT' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'UPD_DT' })
  UpdatedAt: Date;

  @HasMany(() => LangSlave)
  slaves: LangSlave[];
}