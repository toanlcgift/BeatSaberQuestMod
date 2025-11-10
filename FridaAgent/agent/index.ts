import "frida-il2cpp-bridge";

console.log("start");

Il2Cpp.perform(() => {
    console.log(Il2Cpp.unityVersion);

    console.log(Il2Cpp.domain.assemblies.map(x => x.name));

    const mainlib = Il2Cpp.domain.assembly("Main").image;
    const MainMenuViewController = mainlib.class("MainMenuViewController");
    const HandleMenuButton = MainMenuViewController.method("HandleMenuButton");

    // private void HandleMenuButton(MainMenuViewController.MenuButton menuButton)
    HandleMenuButton.implementation = function (menuButtonEnum: Il2Cpp.Parameter.Type): Il2Cpp.Object {
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

    const SetSaberGlowColor = mainlib.class("SetSaberGlowColor");
    console.log(SetSaberGlowColor.methods);
    const SetColors = SetSaberGlowColor.method("SetColors");
    SetColors.implementation = function (): void {
        console.log("SetColors called");
    };

    const SetSaberFakeGlowColor = mainlib.class("SetSaberFakeGlowColor");
    console.log(SetSaberFakeGlowColor.methods);
    const SetColors2 = SetSaberFakeGlowColor.method("SetColors");
    SetColors2.implementation = function (): void {
        console.log("SetColors SetSaberFakeGlowColor called");
    };

    const SaberModelController = mainlib.class("SaberModelController");
    console.log(SaberModelController.methods);

    const unityEngine = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image;
    const Color = unityEngine.class("UnityEngine.Color");
    const colorWrap = Color.alloc();
    colorWrap.field("r").value = 245;
    colorWrap.field("g").value = 40;
    colorWrap.field("b").value = 145;
    colorWrap.field("a").value = 1.0;
    console.log("Color created: " + colorWrap);

    const Init = SaberModelController.method("Init");
    Init.implementation = function (parent: Il2Cpp.Parameter.Type, saber: Il2Cpp.Parameter.Type, trailTintColor: Il2Cpp.Parameter.Type): void {
        console.log("SaberModelController Init called" + parent + saber + colorWrap.unbox() + trailTintColor);
        this.method("Init").invoke(parent, saber, colorWrap.unbox());
    }

    const SaberBurnMarkArea = mainlib.class("SaberBurnMarkArea");
    console.log(SaberBurnMarkArea.methods);
    const Start = SaberBurnMarkArea.method("Start");
    Start.implementation = function (): void {
        console.log("SaberBurnMarkArea Start called");
        //this.method("Start").invoke();
    }

    //Il2Cpp.trace()
    //    .assemblies(Il2Cpp.domain.assembly("Main"))
    //    .filterClasses((klass) => klass.name === "Saber")
    //    .filterMethods((method) => method.name === "ManualUpdate" || method.name === "OnDrawGizmos")
    //    .and()
    //    .attach();
});



