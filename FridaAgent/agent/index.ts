import "frida-il2cpp-bridge";

console.log("start");

Il2Cpp.perform(() => {
    console.log(Il2Cpp.unityVersion);

    const mainlib = Il2Cpp.domain.assembly("Main").image;

    //const NoteController = mainlib.class("NoteController");
    //const SendNoteWasMissedEvent = NoteController.method("SendNoteWasMissedEvent");
    //SendNoteWasMissedEvent.implementation = function (): void {
    //    console.log("note missed but hacked");
    //}

    //const DebugConsoleController = mainlib.class("DebugConsoleController");
    //const DebugConsoleControllerWrap = DebugConsoleController.alloc();
    //const QueueNewInput = DebugConsoleControllerWrap.method("QueueNewInput", 1);
    //QueueNewInput.invoke(Il2Cpp.string("3"));

    const MainFlowCoordinator = mainlib.class("MainFlowCoordinator");
    const mainFlowObject = Il2Cpp.gc.choose(MainFlowCoordinator)[0];
    const menuTransitionsHelperObject = mainFlowObject.field("_menuTransitionsHelper").value as Il2Cpp.Object;
    const zenject = Il2Cpp.domain.assembly("Zenject").image;
    const DiContainer = zenject.class("Zenject.DiContainer");
    const diObject = Il2Cpp.gc.choose(DiContainer)[0];
    const paramClass = Il2Cpp.corlib.class("System.Action`1").inflate(DiContainer);
    const data = paramClass.alloc();
    
    console.log(data);

    var delegatee = Il2Cpp.delegate(DiContainer, (obj) => { console.log(obj); });
    menuTransitionsHelperObject.method("RestartGame", 1).invoke(delegatee);


    console.log("Completed");
});

