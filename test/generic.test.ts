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

    class SimpleGeneric<T>{
        private value?:T;

        setValue(value:T){
            this.value=value;
        }

        getValue():T | undefined{
            return this.value;
        }
    }

    class GenericDefault<T=string>{
        private value?:T;

        setValue(value:T){
            this.value=value;
        }

        getValue():T | undefined{
            return this.value;
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

    it("should support optional generic type", async() => {
        const entry=new Entry(1, "Hello");
        expect(entry.key).toBe(1);
        expect(entry.value).toBe("Hello");
    });

    // Jika tidak menggunakan constructor, maka definisikan tipe datanya pada function
    it("should support simple generic", async() => {
        const simple=new SimpleGeneric<string>();
        simple.setValue("Fajar");
        // simple.setValue(100);
        // simple.setValue(true);

        expect(simple.getValue()!.toUpperCase()).toBe("FAJAR");
    });

    it("should support generic default", async() => {
        const simple=new GenericDefault();
        simple.setValue("Fajar");
        // simple.setValue(100);
        // simple.setValue(true);

        expect(simple.getValue()!.toUpperCase()).toBe("FAJAR");
    });

    interface Employee{
        id:string;
        name:string;
    }

    interface Manager extends Employee{
        totalEmployee:number;
    }

    interface VP extends Manager{
        totalManager:number;
    }

    class EmployeeData<T extends Employee>{
        constructor(public employee:T){

        }
    }

    it("should support generic constraint", async () => {
        const data1=new EmployeeData<Employee>({
            id:"100",
            name:"Rama"
        });

        const data2=new EmployeeData<Manager>({
            id:"100",
            name:"Fajar",
            totalEmployee:100
        });

        const data3=new EmployeeData<VP>({
            id:"100",
            name:"Fadhillah",
            totalEmployee:100,
            totalManager:20
        });

        // Akan error karena string bukan dari bagian generic constraint
        // const data4=new EmployeeData<string>("Fajar");
    });
})