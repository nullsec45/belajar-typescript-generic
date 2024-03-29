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
})