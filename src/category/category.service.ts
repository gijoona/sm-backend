import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryService {
  
  private categoryList = [
    { category: '00', name: '부식'},
    { category: '10', name: '위스키와 담배'},
    { category: '11', name: '선원후생, 오락용품'},
    { category: '15', name: '천 및 린네르류'},
    { category: '17', name: '주방 용품'},
    { category: '19', name: '의복류'},
    { category: '21', name: '로프류'},
    { category: '23', name: '하역 장비'},
    { category: '25', name: '페인트'},
    { category: '27', name: '도장 기구'},
    { category: '31', name: '안전보호장비'},
    { category: '33', name: '안전 장비'},
    { category: '35', name: '호스, 커플링'},
    { category: '37', name: '항해 기구'},
    { category: '39', name: '의약품'},
    { category: '45', name: '석유 제품'},
    { category: '47', name: '문구류'},
    { category: '49', name: '일반 철물'},
    { category: '51', name: '브러쉬, 매트'},
    { category: '53', name: '세면 위생기구'},
    { category: '55', name: '세제, 화학제품'},
    { category: '59', name: '전동, 공기공구'},
    { category: '61', name: '일반 작업공구'},
    { category: '63', name: '절삭 공구'},
    { category: '65', name: '계측 공구'},
    { category: '67', name: '철, 비철'},
    { category: '69', name: '볼트, 너트'},
    { category: '71', name: '파이프'},
    { category: '73', name: '배관 자재'},
    { category: '75', name: '밸브류'},
    { category: '77', name: '베어링'},
    { category: '79', name: '전기제품'},
    { category: '81', name: '패킹 및 조인트'},
    { category: '85', name: '용접 기기'},
    { category: '87', name: '기계 부품'},
    { category: '99', name: '어구, 속구'}
  ];

  findAll() {
    return this.categoryList;
  }
}