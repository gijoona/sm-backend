import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({modelName: "sm_item_masters"})
export class Item extends Model {
  @PrimaryKey
  @Column
  code: string;
  
  @Column
  nameKor: string;

  @Column
  nameEng: string;

  @Column
  unit: string;

  @Column
  buyPrice: number;

  @Column
  buyPrice1: number;

  @Column
  buyPrice2: number;

  @Column
  sellPlace: string;

  @Column
  sellPrice: number;
  
  @Column
  pig: string;
  
  @Column
  marker: string;
  
  @Column
  category_code: string;
  
  @Column
  user_id: string;
}