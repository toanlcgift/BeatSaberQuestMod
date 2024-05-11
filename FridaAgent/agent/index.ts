import "./indexlib.js";

console.log("start");

Il2Cpp.perform(() => {
    console.log(Il2Cpp.unityVersion);

    Il2Cpp.domain.assemblies.map(x => x.name);

    const class1lib = Il2Cpp.domain.assembly("ClassLibrary1").image;
    const mainClass = class1lib.class("ClassLibrary1.MainClass");
    const mainClassConstructor = mainClass.method<Il2Cpp.Object>(".cctor");

    const newMainClassObj = mainClassConstructor.invoke();
    newMainClassObj.method("Main").invoke();
	
	console.log("Invoked Main() method");

    
    //setTimeout(() => {
    //    Il2Cpp.trace()
    //        .assemblies(Il2Cpp.domain.assembly("Class1"))
    //        .filterClasses(cls => classes.includes(cls.name))
    //        .filterMethods(mtd => methods.includes(mtd.name))
    //        .and()
    //        .attach();
    //}, 30 * 1000);
}, undefined, "libclass1.so");



