import "frida-il2cpp-bridge";

console.log("start");

Il2Cpp.perform(() => {
    console.log(Il2Cpp.unityVersion);

    const mainlib = Il2Cpp.domain.assembly("Main").image;

    const NoteController = mainlib.class("NoteController");
    const SendNoteWasMissedEvent = NoteController.method("SendNoteWasMissedEvent");
    SendNoteWasMissedEvent.implementation = function (): void {
        console.log("note missed but hacked");
    }

    const DebugConsoleController = mainlib.class("DebugConsoleController");
    const DebugConsoleControllerWrap = DebugConsoleController.alloc();
    const QueueNewInput = DebugConsoleControllerWrap.method("QueueNewInput", 1);
    QueueNewInput.invoke(Il2Cpp.string("3"));

    console.log("Completed");
});

