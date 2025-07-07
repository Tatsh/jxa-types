declare type NSPasteboard = import('./appkit').NSPasteboard;
declare type NSPasteboardItem = import('./appkit').NSPasteboardItem;
declare type NSPasteboardName = import('./appkit').NSPasteboardName;
declare type NSPasteboardType = import('./appkit').NSPasteboardType;

declare type Application = import('./application').Application;
declare type AudioCDPlaylist = import('./application').AudioCDPlaylist;
declare type AudioCDTrack = import('./application').AudioCDTrack;
declare type DialogReply = import('./application').DialogReply;
declare type Entries<T> = import('./application').Entries<T>;
declare type FileTrack = import('./application').FileTrack;
declare type FinderApplication = import('./application').FinderApplication;
declare type FinderFolder = import('./application').FinderFolder;
declare type FinderFolderContentName = import('./application').FinderFolderContentName;
declare type FinderFolderItem = import('./application').FinderFolderItem;
declare type ITunesLibrary = import('./application').ITunesLibrary;
declare type Item = import('./application').Item;
declare type ItunesApplication = import('./application').ItunesApplication;
declare type LibraryPlaylist = import('./application').LibraryPlaylist;
declare type Menu = import('./application').Menu;
declare type MenuBar = import('./application').MenuBar;
declare type MenuBarItem = import('./application').MenuBarItem;
declare type MenuItem = import('./application').MenuItem;
declare type Playlist = import('./application').Playlist;
declare type Source = import('./application').Source;
declare type SystemEventsApplication = import('./application').SystemEventsApplication;
declare type SystemEventsProcess = import('./application').SystemEventsProcess;
declare type Track = import('./application').Track;

declare type WhosePredicate = import('./array').WhosePredicate;
declare type JXArray<T> = import('./array').JXArray<T>;
declare type JXReadonlyArray<T> = import('./array').JXReadonlyArray<T>;

declare type BridgedObject<T> = import('./core').BridgedObject<T>;
declare type Byte = import('./core').Byte;
declare type IdType = import('./core').IdType;
declare type JXString = import('./core').JXString;

declare type OS_dispatch_queue = import('./dispatch').OS_dispatch_queue;
declare type OS_dispatch_semaphore = import('./dispatch').OS_dispatch_semaphore;
declare type dispatch_queue_global_t = import('./dispatch').dispatch_queue_global_t;
declare type dispatch_queue_t = import('./dispatch').dispatch_queue_t;
declare type dispatch_semaphore_t = import('./dispatch').dispatch_semaphore_t;

declare type NSArray<T> = import('./foundation').NSArray<T>;
declare type NSBitmapImageRep = import('./foundation').NSBitmapImageRep;
declare type NSBoolean = import('./foundation').NSBoolean;
declare type NSData = import('./foundation').NSData;
declare type NSDataTask = import('./foundation').NSDataTask;
declare type NSDate = import('./foundation').NSDate;
declare type NSDictionary<
  K = import('./foundation').NSString,
  V = any,
> = import('./foundation').NSDictionary<K, V>;
declare type NSError = import('./foundation').NSError;
declare type NSFileHandle = import('./foundation').NSFileHandle;
declare type NSFileManager = import('./foundation').NSFileManager;
declare type NSImage = import('./foundation').NSImage;
declare type NSImageRep = import('./foundation').NSImageRep;
declare type NSNumber = import('./foundation').NSNumber;
declare type NSNumberFormatter = import('./foundation').NSNumberFormatter;
declare type NSObject = import('./foundation').NSObject;
declare type NSPipe = import('./foundation').NSPipe;
declare type NSRange = import('./foundation').NSRange;
declare type NSRunLoop = import('./foundation').NSRunLoop;
declare type NSString = import('./foundation').NSString;
declare type NSTask = import('./foundation').NSTask;
declare type NSURL = import('./foundation').NSURL;
declare type NSURLRequest = import('./foundation').NSURLRequest;
declare type NSURLResponse = import('./foundation').NSURLResponse;
declare type NSURLSession = import('./foundation').NSURLSession;
declare type NSWorkspace = import('./foundation').NSWorkspace;

declare type Ref<T> = import('./ref').Ref<T>;
declare type RefType<T> = import('./ref').RefType<T>;

declare namespace $ {
  // NSBeep
  function NSBeep(): void;

  // stdio
  function printf(format: string, ...args): number;

  // stdlib
  function atof(x: string): number;
  function atoi(x: string): number;
  function atoll(x: string): number;
  function strtof(s: string, se: number | null): number;
  function strtod(x: string, se: number | null): number;
  function strtold(x: string, se: number | null): number;
  function rand(): number;
  function srand(seed: number): void;
  function arc4random(): number;
  function arc4random_uniform(max: number): number;
  function arc4random_buf<T>(buf: RefType<T>, size: number): void;
  function arc4random_stir(): void;
  function arc4random_addrandom(dat: RefType<string>, datlen: number): void;
  function exit(code: number): void;
  function getenv(name: string): string | null;
  function setenv(name: string, value: string, overwrite: number): number;
  function putenv(s: string): number;
  function unsetenv(name: string): number;
  function abort(): void;
  function _Exit(code: number): void;
  function atexit(func: any): number;
  function system(cmd: string): number;
  function malloc(n: number): RefType<number>;
  function free(p: RefType<number>): void;

  // string
  function memchr(p: RefType<number>, c: number, n: number): RefType<number>;
  function memcmp(p: RefType<number>, q: RefType<number>, n: number): number;
  function memcpy(dst: RefType<number>, src: RefType<number>, n: number): RefType<number>;
  function memset(p: RefType<number>, val: number, len: number): RefType<number>;

  // unistd
  function sleep(n: number): number;

  // CoreFoundation
  function CFRunLoopRun(): never;

  // Dispatch
  const NSEC_PER_SEC: number;
  const QOS_CLASS_BACKGROUND: number;
  const QOS_CLASS_USER_INTERACTIVE: number;
  const DISPATCH_QUEUE_PRIORITY_DEFAULT: number;
  const DISPATCH_TIME_NOW: number;
  const DISPATCH_TIME_FOREVER: number;
  function dispatch_get_global_queue(identifier: number, flags: number): dispatch_queue_global_t;
  function dispatch_async(queue: dispatch_queue_t, block: () => void): void;
  function dispatch_main(): never;
  function dispatch_semaphore_create(n: number): dispatch_semaphore_t;
  function dispatch_semaphore_signal(sema: dispatch_semaphore_t): number;
  function dispatch_semaphore_wait(sema: dispatch_semaphore_t, timeout: number): number;
  function dispatch_time(t: number, delta: number): number;

  // NSApplicationMain
  function NSApplicationMain(argc: number, argv: RefType<number>): number;

  // NSAppleEventDescriptor
  const NSAppleEventDescriptor: {
    nullDescriptor: any;
  };

  // Generic constants
  const NSNumericSearch: number;
  const NSOrderedDescending: number;

  // NSBitmapImageFileType
  const NSPNGFileType: number;

  // NSFile*
  const NSFileSize: NSString;
  namespace NSFileManager {
    const defaultManager: NSFileManager;
  }
  namespace NSFileHandle {
    function fileHandleForReadingAtPath(path: JXString): NSFileHandle;
    function fileHandleForWritingAtPath(path: JXString): NSFileHandle;
    function fileHandleForUpdatingAtPath(path: JXString): NSFileHandle;
  }
  function NSHomeDirectory(): NSString;

  // NSImage
  namespace NSImage {
    function alloc(): NSImage;
    function imageNamed(name: string): NSImage;
  }
  namespace NSBitmapImageRep {
    function imageRepWithData(data: NSData): any;
    function imageRepWithContentsOfFile(path: JXString): any;
  }

  // NSNumber*
  const NSNumberFormatterBehaviorDefault: number;
  const NSNumberFormatterBehavior10_0: number;
  const NSNumberFormatterBehavior10_4: number;
  namespace NSNumber {
    function numberWithBool(value: boolean): NSNumber;
    function numberWithChar(value: number): NSNumber;
    function numberWithShort(value: number): NSNumber;
    function numberWithInt(value: number): NSNumber;
    function numberWithLong(value: number): NSNumber;
    function numberWithLongLong(value: number): NSNumber;
    function numberWithFloat(value: number): NSNumber;
    function numberWithDouble(value: number): NSNumber;
  }
  const NSNumberFormatter: NSNumberFormatter;

  // NSObject
  namespace NSObject {}

  // NSRange
  function NSStringFromRange(range: NSRange): NSString;
  function NSUnionRange(range1: NSRange, range2: NSRange): NSRange;
  const NSNotFound: number;
  function NSMakeRange(loc: number, length: number): NSRange;

  // NSString
  const NSASCIIStringEncoding: number;
  const NSUTF8StringEncoding: number;
  namespace NSString {
    const alloc: NSString;
  }

  // NSArray
  namespace NSArray {
    const array: NSArray<any>;
    function arrayWithArray(array: JXReadonlyArray<any>): NSArray<any>;
  }

  // NSDictionary
  namespace NSDictionary {
    function dictionaryWithObjectsForKeys<K, V>(
      objects: JXArray<V>,
      keys: JXArray<K>,
    ): NSDictionary<K, V>;
  }

  // NSData
  namespace NSData {
    function dataWithContentsOfFile(path: JXString): NSData;
    function dataWithContentsOfURL(url: NSURL): NSData;
  }

  // NSTask
  namespace NSTask {
    function launchedTaskWithExecutableURLArgumentsErrorTerminationHandler(
      url: NSURL,
      arguments: JXArray<string | NSString>,
      error: RefType<NSError> | null,
      terminationHandler: (task: NSTask) => void,
    ): NSTask;
    const init: NSTask;
  }

  // NSPipe
  namespace NSPipe {
    const pipe: NSPipe;
  }

  // NSWorkspace
  namespace NSWorkspace {
    const sharedWorkspace: NSWorkspace;
  }
  const NSExcludeQuickDrawElementsIconCreationOption: number;
  const NSExclude10_4ElementsIconCreationOption: number;
  const NSWorkspaceLaunchAndHide: number;
  const NSWorkspaceLaunchAsync: number;

  // NSPasteboard
  namespace NSPasteboard {
    const generalPasteboard: NSPasteboard;
    const generalPasteboard: NSPasteboard;
    const pasteboardWithUniqueName: NSPasteboard;
    function pasteboardByFilteringDataOfType(data: NSData, ofType: NSPasteboardType): NSPasteboard;
    function pasteboardByFilteringFile(filename: JXString): NSPasteboard;
    function pasteboardByFilteringTypesInPasteboard(pasteboard: NSPasteboard): NSPasteboard;
    function pasteboardWithName(name: JXString): NSPasteboard;
    function pasteboardWithName(name: JXString): NSPasteboard;
  }
  const NSPasteboardTypeString: NSPasteboardType;

  // NSRunLoop
  namespace NSRunLoop {
    const alloc: NSRunLoop;
  }

  // NSURL
  namespace NSURL {
    function URLWithString(urlString: string): NSURL;
  }

  // NSURLSession
  namespace NSURLSession {
    const sharedSession: NSURLSession;
  }
  const NSURLSessionTaskStateRunning: number;
  const NSURLSessionTaskStateSuspended: number;
  const NSURLSessionTaskStateCanceling: number;
  const NSURLSessionTaskStateCompleted: number;
  const NSURLSessionTaskPriorityDefault: number;
  const NSURLSessionTaskPriorityLow: number;
  const NSURLSessionTaskPriorityHigh: number;
}

declare namespace ObjC {
  /** Convert a JavaScript typed value to a JXA typed value. */
  export function wrap(x?: undefined | null): null;
  export function wrap(input: string): NSString;
  export function wrap(n: number): NSNumber;
  export function wrap(xs: string[]): NSString[];
  /** Import a library. */
  const _import: (name: string) => void;
  export { _import as import };
  export function wrap<I = any, R = any>(x: I): R;
  /** Convert a JXA typed value to a JavaScript value. */
  export function unwrap(x: NSNumber): number;
  export function unwrap(x: NSBoolean): boolean;
  export function unwrap<U>(
    value: U,
  ): U extends NSString ? string : U extends NSArray<infer V> ? V[] : any;
  export function deepUnwrap(x: NSArray<NSString>): string[];
  export function deepUnwrap<T, U>(x: T): U;
  export function registerSubclass(class_: import('./objc').ObjCClass);
  export function dict();
  const interactWithUser: boolean;
  export function castRefToObject();
  export function castObjectToRef();
  export function bindFunction(name: string, args: any[]);
  export function block();
  const _super: () => any;
  export { _super as super };
}

declare function Library<T>(name: string): T;
declare function Path(s: string): any;
declare function Ref(val: 'char*'): RefType<string>;
declare function Ref<T>(val?: T): RefType<T>;
declare function delay(n: number): void;

declare namespace Automation {
  function initializeGlobalObject();
  function getDisplayString(obj: any, print?: boolean);
}

declare namespace console {
  /** Log a value to the console. Very few types will be expanded in this
   * function so it's best to be as specific as possible. */
  function log(...args: any[]): void;
}

declare namespace Progress {
  const additionalDescription: string | null;
  const totalUnitCount: number | null;
  const description: string | null;
  const completedUnitCount: number | null;
}

declare namespace ObjectSpecifier {
  function classOf(x: any): any;
}
