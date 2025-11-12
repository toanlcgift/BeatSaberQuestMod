export class CustomNativeFunction {
    private static libName: string = "libcustommodels.so";

    public static nativeSelectModelTypePointer: NativePointer = Module.findExportByName(this.libName, '_ZN12CustomModels17SelectionSettings15SelectModelTypeEi') ?? new NativePointer(0x00);
    public static nativeSelectModelPointer: NativePointer = Module.findExportByName(this.libName, '_ZN12CustomModels17SelectionSettings11SelectModelEi') ?? new NativePointer(0x00);

    public static selectModelType: NativeFunction<void, [number]> = new NativeFunction(this.nativeSelectModelTypePointer, 'void', ['int']);
    public static selectModel: NativeFunction<void, [number]> = new NativeFunction(this.nativeSelectModelTypePointer, 'void', ['int']);
}