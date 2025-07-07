type JXString = import('./core').JXString;
type IdType = import('./core').IdType;
type BridgedObject<T> = import('./core').BridgedObject<T>;
type RefType<T> = import('./ref').RefType<T>;

interface NSObject<T> extends BridgedObject<IdType> {
  init: T;
}

type NSNumber = BridgedObject<number>;

interface NSError extends BridgedObject<IdType> {
  readonly code: string;
  readonly domain: NSString;
  readonly localizedDescription: NSString;
}

interface NSString extends BridgedObject<string> {
  initWithDataEncoding(d: NSData, encoding: number): NSString;
  compareOptions(s: JXString, n: number): number;
  writeToFileAtomically(filename: JXString, atomically: boolean): boolean;
  stringWithString(s: JXString): NSString;
  stringByAppendingPathComponent(s: JXString): NSString;
  stringWithContentsOfFileUsedEncodingError(
    path: NSString | string,
    encoding: number,
    error: Ref<NSError> | null,
  ): NSString;
}

interface NSURL extends BridgedObject<IdType> {
  readonly absoluteString: NSString;
  readonly path: NSString;
  readonly lastPathComponent: NSString;
}

interface NSURLRequest extends BridgedObject<IdType> {
  readonly URL: NSURL;
}

interface NSURLSession extends BridgedObject<IdType> {
  dataTaskWithURLCompletionHandler: (
    request: NSURL,
    completionHandler: (data: NSData, response: NSURLResponse, error: NSError) => void,
  ) => NSDataTask;
}

interface NSDictionary<K = NSString, V = any> extends BridgedObject<object> {
  objectForKey<R = V>(s: K): R;
}

interface NSArray<T> extends BridgedObject<Array<T>> {
  containsObject(obj: T): boolean;
  objectAtIndex(n: number): T;
}

interface NSFileManager extends BridgedObject<IdType> {
  attributesOfItemAtPathError(
    path: NSString | string,
    error: null | RefType<NSError>,
  ): NSDictionary<NSString, NSString>;
  contentsOfDirectoryAtPathError(
    path: NSString | string,
    error: null | RefType<NSError>,
  ): NSArray<NSString>;
  fileExistsAtPath(path: string | NSString): boolean;
}

type NSDate = BridgedObject<IdType>;
type NSBoolean = BridgedObject<boolean>;

interface NSData extends BridgedObject<IdType> {
  writeToFileAtomically(path: JXString, atomically: boolean): boolean;
}

interface NSFileHandle extends BridgedObject<IdType> {
  readonly readDataToEndOfFile: NSData;
  readonly closeFile: void;
}

interface NSTask extends BridgedObject<IdType> {
  readonly init: NSTask;
  launchPath: NSString | string;
  arguments: (NSString | string)[];
  standardOutput?: NSPipe;
  standardError?: NSPipe;
  readonly launch: void;
  readonly waitUntilExit: void;
  readonly terminationStatus: number;
}

interface NSPipe extends BridgedObject<IdType> {
  readonly fileHandleForReading: NSFileHandle;
}

interface NSRange {
  readonly length: number;
  readonly location: number;
}

interface NSNumberFormatter extends BridgedObject<IdType> {
  formatterBehavior: number;
  numberStyle: number;
  generatesDecimalNumbers: boolean;
  getObjectValueForStringRangeError(
    obj: RefType<object>,
    str: JXString,
    range: NSRange,
    error: null,
  );
}

interface NSImageRep extends BridgedObject<IdType> {
  representationUsingTypeProperties(type: number, properties: object): NSData;
}

interface NSImage extends BridgedObject<IdType> {
  TIFFRepresentation: NSData;
  representations: NSArray<NSImageRep>;
}

interface NSWorkspace {
  runningApplications: {
    bundleIdentifier: NSString;
  }[];
  getInfoForFileApplicationType(fullPath: JXString, appName?: JXString, type?: JXString): boolean;
  isFilePackageAtPath(fullPath: JXString): boolean;
  iconForFile(fullPath: JXString): NSImage;
  iconForFileType(fileType: JXString): NSImage;
  iconForFiles(fullPaths: NSArray<JXString>): NSImage;
  launchAppWithBundleIdentifierOptionsAdditionalEventParamDescriptorLaunchIdentifier: (
    name: string,
    flags: number,
    descriptor: any,
    unk: any,
  ) => void;
  setIconForFileOptions(image: NSImage, fullPath: JXString, options: number): boolean;
}

interface NSURLResponse {
  readonly statusCode: number;
}

interface NSDataTask {
  resume: any;
  cancel: any;
  suspend: any;
  priority: number;
  readonly state: number;
}

interface NSRunLoop {
  getCFRunLoop: any;
  run: any;
}
