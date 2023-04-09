"use strict";
//제네릭 클래스
//아래 DataStorage 클래스는 item의 일관성만 존재하는 제네릭 클래스로 만들고자 했으므로
//DataStorae에 T라는 데이터 타입 식별자를 명시해주고, 그 아래 데이터들에도 T를 적용해준다.
//이 클래스는 원시 타입하고만 작동해야 편한데 그 이유는 아래쪽 ObjStorage 예시 확인
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
//만약 객체가 담기는 DataStorage의 인스턴스를 만든다면
//객체는 참조 자료형이기 때문에 removeItem 매서드 로직에서 문제가 발생한다
//주소값으로 indexOf가 제대로 작동하지 않으면 -1을 반환하므로
//가장 마지막의 요소를 제거하게 되므로 의도한 대로 작동하지 않게 됨
//이를 해결하기 위해 this.data.indexOf가 제대로 동작했는지 확인하는 구문을 넣어줄 수 잇음.
//아니면 addItem으로 특정 객체를 전달할 때 const maxObj = {name: "Max"};와 같이
//변수로 만든 객체를 전달해줄 수도 있다.
//그러면 removeItem을 할 때도 해당 변수를 전달해주어 동일 주소값을 참조 가능.
// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Max" });
// objStorage.addItem({ name: "Manu" });
// objStorage.removeItem({ name: "Max" });
// console.log(objStorage.getItems());
