import "frida-il2cpp-bridge";

console.log("start");

const classes = ["BeatSaberTest"];
const methods = [".cctor"]

Il2Cpp.perform(() => {
    console.log(Il2Cpp.unityVersion);
    setTimeout(() => {
        Il2Cpp.trace()
            .assemblies(Il2Cpp.domain.assembly("Class1"))
            .filterClasses(cls => classes.includes(cls.name))
            .filterMethods(mtd => methods.includes(mtd.name))
            .and()
            .attach();
    }, 30 * 1000);
});



