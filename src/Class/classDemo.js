
// Private Method Decalration
const privateMethodDemo = Symbol("privateMethodDemo");

export default class classDemo {

    // So Here you cant create Global Variable

    // constructor
    constructor() {
        console.log("constructor is automatically call whenever the instance is created");
    }

    // private Method
    [privateMethodDemo]() {
        console.log("Private Method Demo");
    }


    // Public Method
    publicMethodDemo() {
        console.log("Public Method Demo");

        // Call Private Method
        this[privateMethodDemo]();
    }

}