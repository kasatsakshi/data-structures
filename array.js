class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  get(index){
    return this.data[index];
  }

  pop() {
    const element = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return element;
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  insert(index, value){
    for(let i = this.length; i > index; i--){
      let temp = this.data[i - 1];
      this.data[i] = temp;
    }
    this.data[index] = value;
    this.length++;
    return this.length;
  }

  delete(index){
    const deleted = this.data[index];
    for(let i = index; i < this.length; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return deleted;
  }
}

const myArray = new Array();
myArray.push(1);
myArray.push(2);
myArray.push(3);
console.log(myArray);
console.log(myArray.insert(1, 11));
console.log(myArray);
console.log(myArray.delete(1));
console.log(myArray);