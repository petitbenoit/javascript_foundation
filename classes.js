class Demo {
    demoData;
    constructor() {
      console.log("CONSTRUCTOR CALLED");
    }
    func1() {
      this.demoData = "demo data";
      console.log("FUNCTION 1");
    }
    func2() {
      this.func1();
      console.log("FUNCTION 2");
    }
  }
  const d = new Demo();
  d.func2();
  console.log(d.demoData);