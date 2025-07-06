type NSPasteboardName = JXString;
type NSPasteboardType = JXString;

interface NSPasteboardItem extends BridgedObject<IdType> {
  dataForType(type: NSPasteboardType): NSData;
  stringForType(type: NSPasteboardType): NSString;
}

interface NSPasteboard extends BridgedObject<IdType> {
  releaseGlobally: null;
  clearContents: number;
  setDataForType(data: NSData, forType: NSPasteboardType): boolean;
  setStringForType(string: JXString, forType: NSPasteboardType): boolean;
  pasteboardItems: NSArray<NSPasteboardItem>;
  indexOfPasteboardItem(item: NSPasteboardItem): number;
  dataForType(type: NSPasteboardType): NSData;
  stringForType(type: NSPasteboardType): NSString;
  readonly name: NSString;
  readonly changeCount: number;
}
