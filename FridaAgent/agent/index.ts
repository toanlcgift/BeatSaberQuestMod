import "frida-il2cpp-bridge";

console.log("start");

Il2Cpp.perform(() => {
    console.log(Il2Cpp.unityVersion);

    console.log(Il2Cpp.domain.assemblies.map(x => x.name));

    const mainlib = Il2Cpp.domain.assembly("Main").image;
    const MainMenuViewController = mainlib.class("MainMenuViewController");
    const HandleMenuButton = MainMenuViewController.method("HandleMenuButton");

    // private void HandleMenuButton(MainMenuViewController.MenuButton menuButton)
    HandleMenuButton.implementation = function (menuButtonEnum: number): void
    {
        console.log("menu button clicked = " + menuButtonEnum);
    };
});



