import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Item } from './models/item.model'

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item) private itemModel: typeof Item) {}
  private itemsList = [
    {code: '000101', 
      name: '생감자 , POTATO , FRESH', 
      unit: 'KG', 
      price: 0},
    {code: '000102', 
      name: '요리용 큰 감자 , LARGE POTATO, BAKING RUSSET , FRESH', 
      unit: 'KG', 
      price: 0},
    {code: '000105',
      name: '고구마 , POTATO SWEET , FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000107',
      name: '붉은 무 , RADISH RED , FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000108',
      name: '하얀 무 (다이콩) , RADISH WHITE (DAIKON), FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000111',
      name: '순무 , TURNIP WHITE ROUND (KABU), FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000112',
      name: '노란 순무 , TURNIP YELLOW, FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000115',
      name: '당근 , CARROT TOPPED, FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000117',
      name: '생강 뿌리 , GINGER ROOT, FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000118',
      name: '생강 싹 (하지카미) , GINGER YOUNG (HAJIKAMI), FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000121',
      name: '우엉 , BURDOCK (GOBO), FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000123',
      name: '토란 , TARO (SATOIMO), FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000125',
      name: '생 땅콩 , PEANUTS RAW',
      unit: 'KG',  	
      price: 0},  
    {code: '000127',
      name: '참마, 나가이모 , YAM CHINESE (NAGAIMO), FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000129',
      name: '연뿌리 (연근) , LOTUS ROOT, FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000131',
      name: '말린 마늘 , GARLIC DRY',
      unit: 'KG',  	
      price: 0},  
    {code: '000133',
      name: '양파 , ONION SCALLION , FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000134',
      name: '적양파 , RED ONION , FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000141',
      name: '토마토 , TOMATO, FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000142',
      name: '체리맆 토마토 , TOMATO CHERRY RIPE, FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000145',
      name: '호박 (늙은호박) , PUMPKIN , FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000147',
      name: '주키니호박 (스콰시) , ZUCCHINI (SQUASH), FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000149',
      name: '긴호박 , MARROW JAPANESE TOGAN, FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000151',
      name: '오이 , CUCUMBER, FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000153',
      name: '가지 , EGGPLANT, FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000155',
      name: '옥수수속 , CORN ON COB, FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000157',
      name: '오크라 , OKRA LADY FINGER, FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000159',
      name: '껍질콩 , BEANS STRING, FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000161',
      name: '초록 완두콩 , PEAS GREEN , FRESH',
      unit: 'KG',  	
      price: 0},  
    {code: '000165',
      name: '녹색 고추 , PEPPER CHILLI GREEN , FRESH',
      unit: 'KG',  	
      price: 0}  
  ]

  async findAll(): Promise<Item[]> {
    return this.itemModel.findAll();
  }

  findOne(code: string): Promise<Item> {
    return this.itemModel.findOne({
      where: {
        code,
      }
    })
  }

  async create(item: Item): Promise<Item> {
    return this.itemModel.create(item);
  }

  async createList(items: Item[]): Promise<Item[]> {
    return this.itemModel.bulkCreate(items);
  }

  async update(item: Item): Promise<[number, Item[]]> {
    return this.itemModel.update(item, { where: { code: item.code }});
  }

  async delete(code: string): Promise<void> {
    const item = await this.findOne(code);
    return item.destroy();
  }
}