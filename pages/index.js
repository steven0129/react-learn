import { observable, computed } from "mobx";

class OrderLine {
  @observable price = 0;
  @observable amount = 1;
  @computed get total() {
    return this.price * this.amount;
  }
}

const line = new OrderLine();
console.log("price" in line); // true
console.log(line.hasOwnProperty("price")); // true, 现在所有的属性都定义在实例上了。

export default () => (
  <ul>
    <li>1</li>
    <li>1</li>
  </ul>
)