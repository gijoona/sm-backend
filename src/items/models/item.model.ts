import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: "SM_TSP_MST", timestamps: false})
export class Item extends Model {
  @PrimaryKey
  @Column({ field: 'PRD_CD' })
  code: string;
  
  @Column({ field: 'PRD_NM_KR' })
  nameKor: string;

  @Column({ field: 'PRD_NM_US' })
  nameEng: string;

  @Column({ field: 'PRD_UNIT' })
  unit: string;

  @Column({ field: 'PRD_PRC' })
  buyPrice: number;

  @Column({ field: 'PRD_PRC1' })
  buyPrice1: number;

  @Column({ field: 'PRD_PRC2' })
  buyPrice2: number;

  @Column({ field: 'PCH_NM' })
  sellPlace: string;

  @Column({ field: 'PCH_PRC' })
  sellPrice: number;
  
  @Column({ field: 'PRD_IMG_PTH' })
  pig: string;
  
  @Column({ field: 'PRD_MKR' })
  marker: string;

  // @Column
  // description: string;
  
  @Column({ field: 'CAT_CD' })
  categoryCode: string;
  
  // @Column
  // user_id: string;
}