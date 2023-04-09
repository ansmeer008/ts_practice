"use strict";
//유니언 타입과 제네릭 타입
//유니언 타입은 저장하려는 데이터 타입을 하나로 좁혀주지 않는다
//함수를 호출할 때마다 유니언 타입으로 지정해준 타입들 중 하나로 호출할 수 있는 것
//유니언 타입은 모든 메소드 호출이나 모든 함수 호출마다 다른 타입을 지정하고자 할 때 유용함
// class DataStorage{
//     //아래처럼 지정하더라도
//     private data: string[] | number[] | boolean[] = [];
//     //item이 어떤 타입일지 정확히 알 수 없음 셋 중 하나
//     addItem(item: string|number|boolean) {
//       this.data.push(item);
//     }
//     removeItem(item:string|number|boolean) {
//       this.data.splice(this.data.indexOf(item), 1);
//     }
//     getItems() {
//       return [...this.data];
//     }
//   }
//제네릭 타입은 특정 타입을 고정하거나(Lock in a type), 생성한 전체 클래스 인스턴스에 걸쳐 같은 함수를 사용하거나
//전체 함수에 걸쳐 같은 타입을 사용할 수 있게 해준다
//저장하려는 데이터 타입을 하나 선택해야 하고
//그 다음에는 그 데이터 타입만 입력할 수 있다고 지시하는 것임
// class DataStorage<T extends string | boolean | number> {
//     private data: T[] = [];
//     addItem(item: T) {
//       this.data.push(item);
//     }
//     removeItem(item: T) {
//       this.data.splice(this.data.indexOf(item), 1);
//     }
//     getItems() {
//       return [...this.data];
//     }
//   }
