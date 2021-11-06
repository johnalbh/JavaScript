class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }
    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length ++;
        return this.data;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index) {
        for(let i = index; i < this.length -1 ; i++){
            console.log("this.data[i] Before", this.data[i], i);
            this.data[i] = this.data[i + 1];
            console.log("this.data[i] After", this.data[i], i);
        }
        delete this.data[this.length -1];
        this.length--;
    }

}

const myArray = new MyArray();