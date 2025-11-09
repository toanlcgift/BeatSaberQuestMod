import "frida-il2cpp-bridge";

console.log("start");

Il2Cpp.perform(() => {
    console.log(Il2Cpp.unityVersion);

    console.log(Il2Cpp.domain.assemblies.map(x => x.name));

    const mainlib = Il2Cpp.domain.assembly("Main").image;
    const MainMenuViewController = mainlib.class("MainMenuViewController");
    const HandleMenuButton = MainMenuViewController.method("HandleMenuButton");

    // private void HandleMenuButton(MainMenuViewController.MenuButton menuButton)
    HandleMenuButton.implementation = function (menuButtonEnum: Il2Cpp.Parameter.Type): Il2Cpp.Object
    {
        console.log("menu button clicked = " + menuButtonEnum);

        if (menuButtonEnum.toString() == "SoloFreePlay") {
            console.log("solo");
        }

        const result = this.method("HandleMenuButton").invoke(menuButtonEnum);
        return result as Il2Cpp.Object;
    };

    const NoteController = mainlib.class("NoteController");
    const SendNoteWasMissedEvent = NoteController.method("SendNoteWasMissedEvent");
    SendNoteWasMissedEvent.implementation = function (): void {
        console.log("note missed but hacked");
    }

    const SaberModelContainer = mainlib.class("SaberModelContainer");
    console.log(SaberModelContainer.methods);
    const Awake = SaberModelContainer.method("Start");
    Awake.implementation = function (): void {
        console.log("Start called");
    };
});



