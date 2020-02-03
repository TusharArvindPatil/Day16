import classDemo from "./classDemo";

export default class main {

    constructor() {
        console.log("Main Constructor")
    }

    onPageLoad() {
        // Create an instance of class demo
        let classDemoObj = new classDemo();
        classDemoObj
            .publicMethodDemo();
    }

}



export function onPageLoadEvent() {

    let mainObj = new main();
    mainObj
        .onPageLoad();

}