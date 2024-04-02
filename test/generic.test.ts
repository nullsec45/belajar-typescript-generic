describe("generic", () => {
    class GenericData<T>{
        value:T;

        constructor(value:T){
            this.value=value;
        }

        get():T{
            return this.value;
        }

        set(value:T){
            this.value=value;
        }
    }

    class Entry<K,V>{
        constructor(public key:K, public value:V){

        }
    }

    class Triple<J,K,T>{
        constructor(public first:J, public second:K, public third:T){
            
        }
    }

    it("should support multiple data type", async() => {
        const dataNumber=new GenericData<number>(123)
        dataNumber.value=100;

        expect(dataNumber.value).toBe(100);

        const dataString=new GenericData<string>("Fajar");
        expect(dataString.value).toBe("Fajar");

        const upper=dataString.value.toUpperCase();
        expect(upper).toBe("FAJAR");
    });

    function create<T>(value:T):T{
        return value;
    }

    it("should support function generic", async() => {
        const result:string=create<string>("Fajar");
        expect(result).toBe("Fajar");
    });

    it("should support multiple generic type", async() => {
        const entry=new Entry<number, string>(1,"Hello");
        expect(entry.key).toBe(1);
        expect(entry.value).toBe("Hello");
        
        const triple=new Triple<number, string, boolean>(1,"Hello", true);
        expect(triple.first).toBe(1);
        expect(triple.second).toBe("Hello");
        expect(triple.third).toBe(true);
    });
})