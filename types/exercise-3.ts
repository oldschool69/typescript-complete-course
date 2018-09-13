class MyMap<T> {

    private map: {[key: string]: T} = {};
 
    setItem(key: string, item: T){
         this.map[key] = item;        
    }

    getItem(key: string) {
        return this.map[key];
    } 

    clear() {
        this.map = {};
    }

    printMap(){
        for(const key in this.map){
            console.log(key, this.map[key]);
        }
       
    }
}

const myMap = new MyMap<string>();
myMap.setItem("key1", "48");
myMap.setItem("key2", "256");
myMap.setItem("key3", "606");
myMap.printMap();
console.log(myMap.getItem("key1"));
myMap.clear();
myMap.printMap();

const myMap2 = new MyMap<boolean>();
myMap2.setItem("key1", true);
myMap2.setItem("key2", false);
myMap2.printMap();

