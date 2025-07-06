type ObjCType = string | import('./ref').RefType<unknown>;
type ObjCSignature = [ObjCType, ObjCType[]];

interface ObjCClass {
  name: string;
  superclass?: string;
  protocols?: string[];
  properties: {
    [key: string]: string;
  };
  methods: (...x: any[]) =>
    | any
    | {
        type: ObjCSignature;
        implementation: (...x: any[]) => any;
      };
}

/** Alias function to `ObjC.wrap()`. */
// declare function $(inValue: string): NSString;
// declare function $(inValue: number): NSNumber;
// declare function $(inValue: number[]): NSArray<NSNumber>;
// declare function $<T, U>(inValue: T[]): NSArray<U>;
// declare function $<I, R>(inValue: I): R;
