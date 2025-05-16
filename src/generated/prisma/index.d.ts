
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DeliveryPartner
 * 
 */
export type DeliveryPartner = $Result.DefaultSelection<Prisma.$DeliveryPartnerPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PartnerStatus: {
  active: 'active',
  inactive: 'inactive'
};

export type PartnerStatus = (typeof PartnerStatus)[keyof typeof PartnerStatus]


export const OrderStatus: {
  pending: 'pending',
  assigned: 'assigned',
  picked: 'picked',
  delivered: 'delivered'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const AssignmentStatus: {
  success: 'success',
  failed: 'failed'
};

export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus]

}

export type PartnerStatus = $Enums.PartnerStatus

export const PartnerStatus: typeof $Enums.PartnerStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type AssignmentStatus = $Enums.AssignmentStatus

export const AssignmentStatus: typeof $Enums.AssignmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DeliveryPartners
 * const deliveryPartners = await prisma.deliveryPartner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DeliveryPartners
   * const deliveryPartners = await prisma.deliveryPartner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.deliveryPartner`: Exposes CRUD operations for the **DeliveryPartner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryPartners
    * const deliveryPartners = await prisma.deliveryPartner.findMany()
    * ```
    */
  get deliveryPartner(): Prisma.DeliveryPartnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DeliveryPartner: 'DeliveryPartner',
    Order: 'Order',
    Assignment: 'Assignment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "deliveryPartner" | "order" | "assignment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DeliveryPartner: {
        payload: Prisma.$DeliveryPartnerPayload<ExtArgs>
        fields: Prisma.DeliveryPartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryPartnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryPartnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPartnerPayload>
          }
          findFirst: {
            args: Prisma.DeliveryPartnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryPartnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPartnerPayload>
          }
          findMany: {
            args: Prisma.DeliveryPartnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPartnerPayload>[]
          }
          create: {
            args: Prisma.DeliveryPartnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPartnerPayload>
          }
          createMany: {
            args: Prisma.DeliveryPartnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryPartnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPartnerPayload>[]
          }
          delete: {
            args: Prisma.DeliveryPartnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPartnerPayload>
          }
          update: {
            args: Prisma.DeliveryPartnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPartnerPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryPartnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryPartnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryPartnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPartnerPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryPartnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPartnerPayload>
          }
          aggregate: {
            args: Prisma.DeliveryPartnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryPartner>
          }
          groupBy: {
            args: Prisma.DeliveryPartnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryPartnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryPartnerCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryPartnerCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    deliveryPartner?: DeliveryPartnerOmit
    order?: OrderOmit
    assignment?: AssignmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DeliveryPartnerCountOutputType
   */

  export type DeliveryPartnerCountOutputType = {
    assignments: number
  }

  export type DeliveryPartnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | DeliveryPartnerCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * DeliveryPartnerCountOutputType without action
   */
  export type DeliveryPartnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartnerCountOutputType
     */
    select?: DeliveryPartnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeliveryPartnerCountOutputType without action
   */
  export type DeliveryPartnerCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DeliveryPartner
   */

  export type AggregateDeliveryPartner = {
    _count: DeliveryPartnerCountAggregateOutputType | null
    _avg: DeliveryPartnerAvgAggregateOutputType | null
    _sum: DeliveryPartnerSumAggregateOutputType | null
    _min: DeliveryPartnerMinAggregateOutputType | null
    _max: DeliveryPartnerMaxAggregateOutputType | null
  }

  export type DeliveryPartnerAvgAggregateOutputType = {
    currentLoad: number | null
    rating: number | null
    completedOrders: number | null
    cancelledOrders: number | null
  }

  export type DeliveryPartnerSumAggregateOutputType = {
    currentLoad: number | null
    rating: number | null
    completedOrders: number | null
    cancelledOrders: number | null
  }

  export type DeliveryPartnerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    status: $Enums.PartnerStatus | null
    currentLoad: number | null
    shiftStart: string | null
    shiftEnd: string | null
    rating: number | null
    completedOrders: number | null
    cancelledOrders: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveryPartnerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    status: $Enums.PartnerStatus | null
    currentLoad: number | null
    shiftStart: string | null
    shiftEnd: string | null
    rating: number | null
    completedOrders: number | null
    cancelledOrders: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveryPartnerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    status: number
    currentLoad: number
    areas: number
    shiftStart: number
    shiftEnd: number
    rating: number
    completedOrders: number
    cancelledOrders: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeliveryPartnerAvgAggregateInputType = {
    currentLoad?: true
    rating?: true
    completedOrders?: true
    cancelledOrders?: true
  }

  export type DeliveryPartnerSumAggregateInputType = {
    currentLoad?: true
    rating?: true
    completedOrders?: true
    cancelledOrders?: true
  }

  export type DeliveryPartnerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    currentLoad?: true
    shiftStart?: true
    shiftEnd?: true
    rating?: true
    completedOrders?: true
    cancelledOrders?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveryPartnerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    currentLoad?: true
    shiftStart?: true
    shiftEnd?: true
    rating?: true
    completedOrders?: true
    cancelledOrders?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveryPartnerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    currentLoad?: true
    areas?: true
    shiftStart?: true
    shiftEnd?: true
    rating?: true
    completedOrders?: true
    cancelledOrders?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeliveryPartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryPartner to aggregate.
     */
    where?: DeliveryPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPartners to fetch.
     */
    orderBy?: DeliveryPartnerOrderByWithRelationInput | DeliveryPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryPartners
    **/
    _count?: true | DeliveryPartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryPartnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliveryPartnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryPartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryPartnerMaxAggregateInputType
  }

  export type GetDeliveryPartnerAggregateType<T extends DeliveryPartnerAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryPartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryPartner[P]>
      : GetScalarType<T[P], AggregateDeliveryPartner[P]>
  }




  export type DeliveryPartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryPartnerWhereInput
    orderBy?: DeliveryPartnerOrderByWithAggregationInput | DeliveryPartnerOrderByWithAggregationInput[]
    by: DeliveryPartnerScalarFieldEnum[] | DeliveryPartnerScalarFieldEnum
    having?: DeliveryPartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryPartnerCountAggregateInputType | true
    _avg?: DeliveryPartnerAvgAggregateInputType
    _sum?: DeliveryPartnerSumAggregateInputType
    _min?: DeliveryPartnerMinAggregateInputType
    _max?: DeliveryPartnerMaxAggregateInputType
  }

  export type DeliveryPartnerGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    status: $Enums.PartnerStatus
    currentLoad: number
    areas: string[]
    shiftStart: string
    shiftEnd: string
    rating: number
    completedOrders: number
    cancelledOrders: number
    createdAt: Date
    updatedAt: Date
    _count: DeliveryPartnerCountAggregateOutputType | null
    _avg: DeliveryPartnerAvgAggregateOutputType | null
    _sum: DeliveryPartnerSumAggregateOutputType | null
    _min: DeliveryPartnerMinAggregateOutputType | null
    _max: DeliveryPartnerMaxAggregateOutputType | null
  }

  type GetDeliveryPartnerGroupByPayload<T extends DeliveryPartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryPartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryPartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryPartnerGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryPartnerGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryPartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    currentLoad?: boolean
    areas?: boolean
    shiftStart?: boolean
    shiftEnd?: boolean
    rating?: boolean
    completedOrders?: boolean
    cancelledOrders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignments?: boolean | DeliveryPartner$assignmentsArgs<ExtArgs>
    _count?: boolean | DeliveryPartnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryPartner"]>

  export type DeliveryPartnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    currentLoad?: boolean
    areas?: boolean
    shiftStart?: boolean
    shiftEnd?: boolean
    rating?: boolean
    completedOrders?: boolean
    cancelledOrders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deliveryPartner"]>

  export type DeliveryPartnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    currentLoad?: boolean
    areas?: boolean
    shiftStart?: boolean
    shiftEnd?: boolean
    rating?: boolean
    completedOrders?: boolean
    cancelledOrders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deliveryPartner"]>

  export type DeliveryPartnerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    currentLoad?: boolean
    areas?: boolean
    shiftStart?: boolean
    shiftEnd?: boolean
    rating?: boolean
    completedOrders?: boolean
    cancelledOrders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeliveryPartnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "status" | "currentLoad" | "areas" | "shiftStart" | "shiftEnd" | "rating" | "completedOrders" | "cancelledOrders" | "createdAt" | "updatedAt", ExtArgs["result"]["deliveryPartner"]>
  export type DeliveryPartnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | DeliveryPartner$assignmentsArgs<ExtArgs>
    _count?: boolean | DeliveryPartnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeliveryPartnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeliveryPartnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DeliveryPartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryPartner"
    objects: {
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      status: $Enums.PartnerStatus
      currentLoad: number
      areas: string[]
      shiftStart: string
      shiftEnd: string
      rating: number
      completedOrders: number
      cancelledOrders: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deliveryPartner"]>
    composites: {}
  }

  type DeliveryPartnerGetPayload<S extends boolean | null | undefined | DeliveryPartnerDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPartnerPayload, S>

  type DeliveryPartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryPartnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryPartnerCountAggregateInputType | true
    }

  export interface DeliveryPartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryPartner'], meta: { name: 'DeliveryPartner' } }
    /**
     * Find zero or one DeliveryPartner that matches the filter.
     * @param {DeliveryPartnerFindUniqueArgs} args - Arguments to find a DeliveryPartner
     * @example
     * // Get one DeliveryPartner
     * const deliveryPartner = await prisma.deliveryPartner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryPartnerFindUniqueArgs>(args: SelectSubset<T, DeliveryPartnerFindUniqueArgs<ExtArgs>>): Prisma__DeliveryPartnerClient<$Result.GetResult<Prisma.$DeliveryPartnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeliveryPartner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryPartnerFindUniqueOrThrowArgs} args - Arguments to find a DeliveryPartner
     * @example
     * // Get one DeliveryPartner
     * const deliveryPartner = await prisma.deliveryPartner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryPartnerFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryPartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryPartnerClient<$Result.GetResult<Prisma.$DeliveryPartnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryPartner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPartnerFindFirstArgs} args - Arguments to find a DeliveryPartner
     * @example
     * // Get one DeliveryPartner
     * const deliveryPartner = await prisma.deliveryPartner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryPartnerFindFirstArgs>(args?: SelectSubset<T, DeliveryPartnerFindFirstArgs<ExtArgs>>): Prisma__DeliveryPartnerClient<$Result.GetResult<Prisma.$DeliveryPartnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryPartner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPartnerFindFirstOrThrowArgs} args - Arguments to find a DeliveryPartner
     * @example
     * // Get one DeliveryPartner
     * const deliveryPartner = await prisma.deliveryPartner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryPartnerFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryPartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryPartnerClient<$Result.GetResult<Prisma.$DeliveryPartnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeliveryPartners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryPartners
     * const deliveryPartners = await prisma.deliveryPartner.findMany()
     * 
     * // Get first 10 DeliveryPartners
     * const deliveryPartners = await prisma.deliveryPartner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryPartnerWithIdOnly = await prisma.deliveryPartner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryPartnerFindManyArgs>(args?: SelectSubset<T, DeliveryPartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPartnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeliveryPartner.
     * @param {DeliveryPartnerCreateArgs} args - Arguments to create a DeliveryPartner.
     * @example
     * // Create one DeliveryPartner
     * const DeliveryPartner = await prisma.deliveryPartner.create({
     *   data: {
     *     // ... data to create a DeliveryPartner
     *   }
     * })
     * 
     */
    create<T extends DeliveryPartnerCreateArgs>(args: SelectSubset<T, DeliveryPartnerCreateArgs<ExtArgs>>): Prisma__DeliveryPartnerClient<$Result.GetResult<Prisma.$DeliveryPartnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeliveryPartners.
     * @param {DeliveryPartnerCreateManyArgs} args - Arguments to create many DeliveryPartners.
     * @example
     * // Create many DeliveryPartners
     * const deliveryPartner = await prisma.deliveryPartner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryPartnerCreateManyArgs>(args?: SelectSubset<T, DeliveryPartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryPartners and returns the data saved in the database.
     * @param {DeliveryPartnerCreateManyAndReturnArgs} args - Arguments to create many DeliveryPartners.
     * @example
     * // Create many DeliveryPartners
     * const deliveryPartner = await prisma.deliveryPartner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryPartners and only return the `id`
     * const deliveryPartnerWithIdOnly = await prisma.deliveryPartner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryPartnerCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryPartnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPartnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeliveryPartner.
     * @param {DeliveryPartnerDeleteArgs} args - Arguments to delete one DeliveryPartner.
     * @example
     * // Delete one DeliveryPartner
     * const DeliveryPartner = await prisma.deliveryPartner.delete({
     *   where: {
     *     // ... filter to delete one DeliveryPartner
     *   }
     * })
     * 
     */
    delete<T extends DeliveryPartnerDeleteArgs>(args: SelectSubset<T, DeliveryPartnerDeleteArgs<ExtArgs>>): Prisma__DeliveryPartnerClient<$Result.GetResult<Prisma.$DeliveryPartnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeliveryPartner.
     * @param {DeliveryPartnerUpdateArgs} args - Arguments to update one DeliveryPartner.
     * @example
     * // Update one DeliveryPartner
     * const deliveryPartner = await prisma.deliveryPartner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryPartnerUpdateArgs>(args: SelectSubset<T, DeliveryPartnerUpdateArgs<ExtArgs>>): Prisma__DeliveryPartnerClient<$Result.GetResult<Prisma.$DeliveryPartnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeliveryPartners.
     * @param {DeliveryPartnerDeleteManyArgs} args - Arguments to filter DeliveryPartners to delete.
     * @example
     * // Delete a few DeliveryPartners
     * const { count } = await prisma.deliveryPartner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryPartnerDeleteManyArgs>(args?: SelectSubset<T, DeliveryPartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryPartners
     * const deliveryPartner = await prisma.deliveryPartner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryPartnerUpdateManyArgs>(args: SelectSubset<T, DeliveryPartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryPartners and returns the data updated in the database.
     * @param {DeliveryPartnerUpdateManyAndReturnArgs} args - Arguments to update many DeliveryPartners.
     * @example
     * // Update many DeliveryPartners
     * const deliveryPartner = await prisma.deliveryPartner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeliveryPartners and only return the `id`
     * const deliveryPartnerWithIdOnly = await prisma.deliveryPartner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryPartnerUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryPartnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPartnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeliveryPartner.
     * @param {DeliveryPartnerUpsertArgs} args - Arguments to update or create a DeliveryPartner.
     * @example
     * // Update or create a DeliveryPartner
     * const deliveryPartner = await prisma.deliveryPartner.upsert({
     *   create: {
     *     // ... data to create a DeliveryPartner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryPartner we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryPartnerUpsertArgs>(args: SelectSubset<T, DeliveryPartnerUpsertArgs<ExtArgs>>): Prisma__DeliveryPartnerClient<$Result.GetResult<Prisma.$DeliveryPartnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeliveryPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPartnerCountArgs} args - Arguments to filter DeliveryPartners to count.
     * @example
     * // Count the number of DeliveryPartners
     * const count = await prisma.deliveryPartner.count({
     *   where: {
     *     // ... the filter for the DeliveryPartners we want to count
     *   }
     * })
    **/
    count<T extends DeliveryPartnerCountArgs>(
      args?: Subset<T, DeliveryPartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryPartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryPartner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryPartnerAggregateArgs>(args: Subset<T, DeliveryPartnerAggregateArgs>): Prisma.PrismaPromise<GetDeliveryPartnerAggregateType<T>>

    /**
     * Group by DeliveryPartner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPartnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryPartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryPartnerGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryPartnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryPartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryPartner model
   */
  readonly fields: DeliveryPartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryPartner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryPartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends DeliveryPartner$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryPartner$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeliveryPartner model
   */
  interface DeliveryPartnerFieldRefs {
    readonly id: FieldRef<"DeliveryPartner", 'String'>
    readonly name: FieldRef<"DeliveryPartner", 'String'>
    readonly email: FieldRef<"DeliveryPartner", 'String'>
    readonly phone: FieldRef<"DeliveryPartner", 'String'>
    readonly status: FieldRef<"DeliveryPartner", 'PartnerStatus'>
    readonly currentLoad: FieldRef<"DeliveryPartner", 'Int'>
    readonly areas: FieldRef<"DeliveryPartner", 'String[]'>
    readonly shiftStart: FieldRef<"DeliveryPartner", 'String'>
    readonly shiftEnd: FieldRef<"DeliveryPartner", 'String'>
    readonly rating: FieldRef<"DeliveryPartner", 'Float'>
    readonly completedOrders: FieldRef<"DeliveryPartner", 'Int'>
    readonly cancelledOrders: FieldRef<"DeliveryPartner", 'Int'>
    readonly createdAt: FieldRef<"DeliveryPartner", 'DateTime'>
    readonly updatedAt: FieldRef<"DeliveryPartner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryPartner findUnique
   */
  export type DeliveryPartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartner
     */
    select?: DeliveryPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPartner
     */
    omit?: DeliveryPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPartnerInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPartner to fetch.
     */
    where: DeliveryPartnerWhereUniqueInput
  }

  /**
   * DeliveryPartner findUniqueOrThrow
   */
  export type DeliveryPartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartner
     */
    select?: DeliveryPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPartner
     */
    omit?: DeliveryPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPartnerInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPartner to fetch.
     */
    where: DeliveryPartnerWhereUniqueInput
  }

  /**
   * DeliveryPartner findFirst
   */
  export type DeliveryPartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartner
     */
    select?: DeliveryPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPartner
     */
    omit?: DeliveryPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPartnerInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPartner to fetch.
     */
    where?: DeliveryPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPartners to fetch.
     */
    orderBy?: DeliveryPartnerOrderByWithRelationInput | DeliveryPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryPartners.
     */
    cursor?: DeliveryPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryPartners.
     */
    distinct?: DeliveryPartnerScalarFieldEnum | DeliveryPartnerScalarFieldEnum[]
  }

  /**
   * DeliveryPartner findFirstOrThrow
   */
  export type DeliveryPartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartner
     */
    select?: DeliveryPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPartner
     */
    omit?: DeliveryPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPartnerInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPartner to fetch.
     */
    where?: DeliveryPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPartners to fetch.
     */
    orderBy?: DeliveryPartnerOrderByWithRelationInput | DeliveryPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryPartners.
     */
    cursor?: DeliveryPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryPartners.
     */
    distinct?: DeliveryPartnerScalarFieldEnum | DeliveryPartnerScalarFieldEnum[]
  }

  /**
   * DeliveryPartner findMany
   */
  export type DeliveryPartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartner
     */
    select?: DeliveryPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPartner
     */
    omit?: DeliveryPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPartnerInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPartners to fetch.
     */
    where?: DeliveryPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPartners to fetch.
     */
    orderBy?: DeliveryPartnerOrderByWithRelationInput | DeliveryPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryPartners.
     */
    cursor?: DeliveryPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPartners.
     */
    skip?: number
    distinct?: DeliveryPartnerScalarFieldEnum | DeliveryPartnerScalarFieldEnum[]
  }

  /**
   * DeliveryPartner create
   */
  export type DeliveryPartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartner
     */
    select?: DeliveryPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPartner
     */
    omit?: DeliveryPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPartnerInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryPartner.
     */
    data: XOR<DeliveryPartnerCreateInput, DeliveryPartnerUncheckedCreateInput>
  }

  /**
   * DeliveryPartner createMany
   */
  export type DeliveryPartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryPartners.
     */
    data: DeliveryPartnerCreateManyInput | DeliveryPartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryPartner createManyAndReturn
   */
  export type DeliveryPartnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartner
     */
    select?: DeliveryPartnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPartner
     */
    omit?: DeliveryPartnerOmit<ExtArgs> | null
    /**
     * The data used to create many DeliveryPartners.
     */
    data: DeliveryPartnerCreateManyInput | DeliveryPartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryPartner update
   */
  export type DeliveryPartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartner
     */
    select?: DeliveryPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPartner
     */
    omit?: DeliveryPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPartnerInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryPartner.
     */
    data: XOR<DeliveryPartnerUpdateInput, DeliveryPartnerUncheckedUpdateInput>
    /**
     * Choose, which DeliveryPartner to update.
     */
    where: DeliveryPartnerWhereUniqueInput
  }

  /**
   * DeliveryPartner updateMany
   */
  export type DeliveryPartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryPartners.
     */
    data: XOR<DeliveryPartnerUpdateManyMutationInput, DeliveryPartnerUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryPartners to update
     */
    where?: DeliveryPartnerWhereInput
    /**
     * Limit how many DeliveryPartners to update.
     */
    limit?: number
  }

  /**
   * DeliveryPartner updateManyAndReturn
   */
  export type DeliveryPartnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartner
     */
    select?: DeliveryPartnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPartner
     */
    omit?: DeliveryPartnerOmit<ExtArgs> | null
    /**
     * The data used to update DeliveryPartners.
     */
    data: XOR<DeliveryPartnerUpdateManyMutationInput, DeliveryPartnerUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryPartners to update
     */
    where?: DeliveryPartnerWhereInput
    /**
     * Limit how many DeliveryPartners to update.
     */
    limit?: number
  }

  /**
   * DeliveryPartner upsert
   */
  export type DeliveryPartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartner
     */
    select?: DeliveryPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPartner
     */
    omit?: DeliveryPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPartnerInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryPartner to update in case it exists.
     */
    where: DeliveryPartnerWhereUniqueInput
    /**
     * In case the DeliveryPartner found by the `where` argument doesn't exist, create a new DeliveryPartner with this data.
     */
    create: XOR<DeliveryPartnerCreateInput, DeliveryPartnerUncheckedCreateInput>
    /**
     * In case the DeliveryPartner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryPartnerUpdateInput, DeliveryPartnerUncheckedUpdateInput>
  }

  /**
   * DeliveryPartner delete
   */
  export type DeliveryPartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartner
     */
    select?: DeliveryPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPartner
     */
    omit?: DeliveryPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPartnerInclude<ExtArgs> | null
    /**
     * Filter which DeliveryPartner to delete.
     */
    where: DeliveryPartnerWhereUniqueInput
  }

  /**
   * DeliveryPartner deleteMany
   */
  export type DeliveryPartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryPartners to delete
     */
    where?: DeliveryPartnerWhereInput
    /**
     * Limit how many DeliveryPartners to delete.
     */
    limit?: number
  }

  /**
   * DeliveryPartner.assignments
   */
  export type DeliveryPartner$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * DeliveryPartner without action
   */
  export type DeliveryPartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPartner
     */
    select?: DeliveryPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPartner
     */
    omit?: DeliveryPartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPartnerInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type OrderSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    customerName: string | null
    customerPhone: string | null
    customerAddress: string | null
    area: string | null
    status: $Enums.OrderStatus | null
    scheduledFor: string | null
    totalAmount: number | null
    assignedTo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    customerName: string | null
    customerPhone: string | null
    customerAddress: string | null
    area: string | null
    status: $Enums.OrderStatus | null
    scheduledFor: string | null
    totalAmount: number | null
    assignedTo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    customerName: number
    customerPhone: number
    customerAddress: number
    area: number
    status: number
    scheduledFor: number
    totalAmount: number
    assignedTo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalAmount?: true
  }

  export type OrderSumAggregateInputType = {
    totalAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    customerName?: true
    customerPhone?: true
    customerAddress?: true
    area?: true
    status?: true
    scheduledFor?: true
    totalAmount?: true
    assignedTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    customerName?: true
    customerPhone?: true
    customerAddress?: true
    area?: true
    status?: true
    scheduledFor?: true
    totalAmount?: true
    assignedTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    customerName?: true
    customerPhone?: true
    customerAddress?: true
    area?: true
    status?: true
    scheduledFor?: true
    totalAmount?: true
    assignedTo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: string
    customerName: string
    customerPhone: string
    customerAddress: string
    area: string
    status: $Enums.OrderStatus
    scheduledFor: string
    totalAmount: number
    assignedTo: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerAddress?: boolean
    area?: boolean
    status?: boolean
    scheduledFor?: boolean
    totalAmount?: boolean
    assignedTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | Order$assignmentArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerAddress?: boolean
    area?: boolean
    status?: boolean
    scheduledFor?: boolean
    totalAmount?: boolean
    assignedTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerAddress?: boolean
    area?: boolean
    status?: boolean
    scheduledFor?: boolean
    totalAmount?: boolean
    assignedTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerAddress?: boolean
    area?: boolean
    status?: boolean
    scheduledFor?: boolean
    totalAmount?: boolean
    assignedTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "customerName" | "customerPhone" | "customerAddress" | "area" | "status" | "scheduledFor" | "totalAmount" | "assignedTo" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | Order$assignmentArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      customerName: string
      customerPhone: string
      customerAddress: string
      area: string
      status: $Enums.OrderStatus
      scheduledFor: string
      totalAmount: number
      assignedTo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends Order$assignmentArgs<ExtArgs> = {}>(args?: Subset<T, Order$assignmentArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly customerName: FieldRef<"Order", 'String'>
    readonly customerPhone: FieldRef<"Order", 'String'>
    readonly customerAddress: FieldRef<"Order", 'String'>
    readonly area: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly scheduledFor: FieldRef<"Order", 'String'>
    readonly totalAmount: FieldRef<"Order", 'Float'>
    readonly assignedTo: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.assignment
   */
  export type Order$assignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    partnerId: string | null
    timestamp: Date | null
    status: $Enums.AssignmentStatus | null
    reason: string | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    partnerId: string | null
    timestamp: Date | null
    status: $Enums.AssignmentStatus | null
    reason: string | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    orderId: number
    partnerId: number
    timestamp: number
    status: number
    reason: number
    _all: number
  }


  export type AssignmentMinAggregateInputType = {
    id?: true
    orderId?: true
    partnerId?: true
    timestamp?: true
    status?: true
    reason?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    orderId?: true
    partnerId?: true
    timestamp?: true
    status?: true
    reason?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    orderId?: true
    partnerId?: true
    timestamp?: true
    status?: true
    reason?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    orderId: string
    partnerId: string
    timestamp: Date
    status: $Enums.AssignmentStatus
    reason: string | null
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    partnerId?: boolean
    timestamp?: boolean
    status?: boolean
    reason?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    partner?: boolean | DeliveryPartnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    partnerId?: boolean
    timestamp?: boolean
    status?: boolean
    reason?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    partner?: boolean | DeliveryPartnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    partnerId?: boolean
    timestamp?: boolean
    status?: boolean
    reason?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    partner?: boolean | DeliveryPartnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    orderId?: boolean
    partnerId?: boolean
    timestamp?: boolean
    status?: boolean
    reason?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "partnerId" | "timestamp" | "status" | "reason", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    partner?: boolean | DeliveryPartnerDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    partner?: boolean | DeliveryPartnerDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    partner?: boolean | DeliveryPartnerDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      partner: Prisma.$DeliveryPartnerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      partnerId: string
      timestamp: Date
      status: $Enums.AssignmentStatus
      reason: string | null
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    partner<T extends DeliveryPartnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryPartnerDefaultArgs<ExtArgs>>): Prisma__DeliveryPartnerClient<$Result.GetResult<Prisma.$DeliveryPartnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly orderId: FieldRef<"Assignment", 'String'>
    readonly partnerId: FieldRef<"Assignment", 'String'>
    readonly timestamp: FieldRef<"Assignment", 'DateTime'>
    readonly status: FieldRef<"Assignment", 'AssignmentStatus'>
    readonly reason: FieldRef<"Assignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DeliveryPartnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    status: 'status',
    currentLoad: 'currentLoad',
    areas: 'areas',
    shiftStart: 'shiftStart',
    shiftEnd: 'shiftEnd',
    rating: 'rating',
    completedOrders: 'completedOrders',
    cancelledOrders: 'cancelledOrders',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeliveryPartnerScalarFieldEnum = (typeof DeliveryPartnerScalarFieldEnum)[keyof typeof DeliveryPartnerScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    customerName: 'customerName',
    customerPhone: 'customerPhone',
    customerAddress: 'customerAddress',
    area: 'area',
    status: 'status',
    scheduledFor: 'scheduledFor',
    totalAmount: 'totalAmount',
    assignedTo: 'assignedTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    partnerId: 'partnerId',
    timestamp: 'timestamp',
    status: 'status',
    reason: 'reason'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PartnerStatus'
   */
  export type EnumPartnerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartnerStatus'>
    


  /**
   * Reference to a field of type 'PartnerStatus[]'
   */
  export type ListEnumPartnerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartnerStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'AssignmentStatus'
   */
  export type EnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus'>
    


  /**
   * Reference to a field of type 'AssignmentStatus[]'
   */
  export type ListEnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type DeliveryPartnerWhereInput = {
    AND?: DeliveryPartnerWhereInput | DeliveryPartnerWhereInput[]
    OR?: DeliveryPartnerWhereInput[]
    NOT?: DeliveryPartnerWhereInput | DeliveryPartnerWhereInput[]
    id?: StringFilter<"DeliveryPartner"> | string
    name?: StringFilter<"DeliveryPartner"> | string
    email?: StringFilter<"DeliveryPartner"> | string
    phone?: StringFilter<"DeliveryPartner"> | string
    status?: EnumPartnerStatusFilter<"DeliveryPartner"> | $Enums.PartnerStatus
    currentLoad?: IntFilter<"DeliveryPartner"> | number
    areas?: StringNullableListFilter<"DeliveryPartner">
    shiftStart?: StringFilter<"DeliveryPartner"> | string
    shiftEnd?: StringFilter<"DeliveryPartner"> | string
    rating?: FloatFilter<"DeliveryPartner"> | number
    completedOrders?: IntFilter<"DeliveryPartner"> | number
    cancelledOrders?: IntFilter<"DeliveryPartner"> | number
    createdAt?: DateTimeFilter<"DeliveryPartner"> | Date | string
    updatedAt?: DateTimeFilter<"DeliveryPartner"> | Date | string
    assignments?: AssignmentListRelationFilter
  }

  export type DeliveryPartnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    currentLoad?: SortOrder
    areas?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    rating?: SortOrder
    completedOrders?: SortOrder
    cancelledOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignments?: AssignmentOrderByRelationAggregateInput
  }

  export type DeliveryPartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: DeliveryPartnerWhereInput | DeliveryPartnerWhereInput[]
    OR?: DeliveryPartnerWhereInput[]
    NOT?: DeliveryPartnerWhereInput | DeliveryPartnerWhereInput[]
    name?: StringFilter<"DeliveryPartner"> | string
    phone?: StringFilter<"DeliveryPartner"> | string
    status?: EnumPartnerStatusFilter<"DeliveryPartner"> | $Enums.PartnerStatus
    currentLoad?: IntFilter<"DeliveryPartner"> | number
    areas?: StringNullableListFilter<"DeliveryPartner">
    shiftStart?: StringFilter<"DeliveryPartner"> | string
    shiftEnd?: StringFilter<"DeliveryPartner"> | string
    rating?: FloatFilter<"DeliveryPartner"> | number
    completedOrders?: IntFilter<"DeliveryPartner"> | number
    cancelledOrders?: IntFilter<"DeliveryPartner"> | number
    createdAt?: DateTimeFilter<"DeliveryPartner"> | Date | string
    updatedAt?: DateTimeFilter<"DeliveryPartner"> | Date | string
    assignments?: AssignmentListRelationFilter
  }, "id" | "email">

  export type DeliveryPartnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    currentLoad?: SortOrder
    areas?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    rating?: SortOrder
    completedOrders?: SortOrder
    cancelledOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeliveryPartnerCountOrderByAggregateInput
    _avg?: DeliveryPartnerAvgOrderByAggregateInput
    _max?: DeliveryPartnerMaxOrderByAggregateInput
    _min?: DeliveryPartnerMinOrderByAggregateInput
    _sum?: DeliveryPartnerSumOrderByAggregateInput
  }

  export type DeliveryPartnerScalarWhereWithAggregatesInput = {
    AND?: DeliveryPartnerScalarWhereWithAggregatesInput | DeliveryPartnerScalarWhereWithAggregatesInput[]
    OR?: DeliveryPartnerScalarWhereWithAggregatesInput[]
    NOT?: DeliveryPartnerScalarWhereWithAggregatesInput | DeliveryPartnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeliveryPartner"> | string
    name?: StringWithAggregatesFilter<"DeliveryPartner"> | string
    email?: StringWithAggregatesFilter<"DeliveryPartner"> | string
    phone?: StringWithAggregatesFilter<"DeliveryPartner"> | string
    status?: EnumPartnerStatusWithAggregatesFilter<"DeliveryPartner"> | $Enums.PartnerStatus
    currentLoad?: IntWithAggregatesFilter<"DeliveryPartner"> | number
    areas?: StringNullableListFilter<"DeliveryPartner">
    shiftStart?: StringWithAggregatesFilter<"DeliveryPartner"> | string
    shiftEnd?: StringWithAggregatesFilter<"DeliveryPartner"> | string
    rating?: FloatWithAggregatesFilter<"DeliveryPartner"> | number
    completedOrders?: IntWithAggregatesFilter<"DeliveryPartner"> | number
    cancelledOrders?: IntWithAggregatesFilter<"DeliveryPartner"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DeliveryPartner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DeliveryPartner"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    customerName?: StringFilter<"Order"> | string
    customerPhone?: StringFilter<"Order"> | string
    customerAddress?: StringFilter<"Order"> | string
    area?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    scheduledFor?: StringFilter<"Order"> | string
    totalAmount?: FloatFilter<"Order"> | number
    assignedTo?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    assignment?: XOR<AssignmentNullableScalarRelationFilter, AssignmentWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerAddress?: SortOrder
    area?: SortOrder
    status?: SortOrder
    scheduledFor?: SortOrder
    totalAmount?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerName?: StringFilter<"Order"> | string
    customerPhone?: StringFilter<"Order"> | string
    customerAddress?: StringFilter<"Order"> | string
    area?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    scheduledFor?: StringFilter<"Order"> | string
    totalAmount?: FloatFilter<"Order"> | number
    assignedTo?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    assignment?: XOR<AssignmentNullableScalarRelationFilter, AssignmentWhereInput> | null
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerAddress?: SortOrder
    area?: SortOrder
    status?: SortOrder
    scheduledFor?: SortOrder
    totalAmount?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    customerName?: StringWithAggregatesFilter<"Order"> | string
    customerPhone?: StringWithAggregatesFilter<"Order"> | string
    customerAddress?: StringWithAggregatesFilter<"Order"> | string
    area?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    scheduledFor?: StringWithAggregatesFilter<"Order"> | string
    totalAmount?: FloatWithAggregatesFilter<"Order"> | number
    assignedTo?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    orderId?: StringFilter<"Assignment"> | string
    partnerId?: StringFilter<"Assignment"> | string
    timestamp?: DateTimeFilter<"Assignment"> | Date | string
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    reason?: StringNullableFilter<"Assignment"> | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    partner?: XOR<DeliveryPartnerScalarRelationFilter, DeliveryPartnerWhereInput>
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    partnerId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
    partner?: DeliveryPartnerOrderByWithRelationInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    partnerId?: StringFilter<"Assignment"> | string
    timestamp?: DateTimeFilter<"Assignment"> | Date | string
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    reason?: StringNullableFilter<"Assignment"> | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    partner?: XOR<DeliveryPartnerScalarRelationFilter, DeliveryPartnerWhereInput>
  }, "id" | "orderId">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    partnerId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    orderId?: StringWithAggregatesFilter<"Assignment"> | string
    partnerId?: StringWithAggregatesFilter<"Assignment"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    status?: EnumAssignmentStatusWithAggregatesFilter<"Assignment"> | $Enums.AssignmentStatus
    reason?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
  }

  export type DeliveryPartnerCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    status: $Enums.PartnerStatus
    currentLoad: number
    areas?: DeliveryPartnerCreateareasInput | string[]
    shiftStart: string
    shiftEnd: string
    rating: number
    completedOrders: number
    cancelledOrders: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: AssignmentCreateNestedManyWithoutPartnerInput
  }

  export type DeliveryPartnerUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    status: $Enums.PartnerStatus
    currentLoad: number
    areas?: DeliveryPartnerCreateareasInput | string[]
    shiftStart: string
    shiftEnd: string
    rating: number
    completedOrders: number
    cancelledOrders: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutPartnerInput
  }

  export type DeliveryPartnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    currentLoad?: IntFieldUpdateOperationsInput | number
    areas?: DeliveryPartnerUpdateareasInput | string[]
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    completedOrders?: IntFieldUpdateOperationsInput | number
    cancelledOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUpdateManyWithoutPartnerNestedInput
  }

  export type DeliveryPartnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    currentLoad?: IntFieldUpdateOperationsInput | number
    areas?: DeliveryPartnerUpdateareasInput | string[]
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    completedOrders?: IntFieldUpdateOperationsInput | number
    cancelledOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutPartnerNestedInput
  }

  export type DeliveryPartnerCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    status: $Enums.PartnerStatus
    currentLoad: number
    areas?: DeliveryPartnerCreateareasInput | string[]
    shiftStart: string
    shiftEnd: string
    rating: number
    completedOrders: number
    cancelledOrders: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryPartnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    currentLoad?: IntFieldUpdateOperationsInput | number
    areas?: DeliveryPartnerUpdateareasInput | string[]
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    completedOrders?: IntFieldUpdateOperationsInput | number
    cancelledOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryPartnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    currentLoad?: IntFieldUpdateOperationsInput | number
    areas?: DeliveryPartnerUpdateareasInput | string[]
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    completedOrders?: IntFieldUpdateOperationsInput | number
    cancelledOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    customerName: string
    customerPhone: string
    customerAddress: string
    area: string
    status: $Enums.OrderStatus
    scheduledFor: string
    totalAmount: number
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment?: AssignmentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    customerName: string
    customerPhone: string
    customerAddress: string
    area: string
    status: $Enums.OrderStatus
    scheduledFor: string
    totalAmount: number
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment?: AssignmentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    scheduledFor?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    scheduledFor?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: string
    customerName: string
    customerPhone: string
    customerAddress: string
    area: string
    status: $Enums.OrderStatus
    scheduledFor: string
    totalAmount: number
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    scheduledFor?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    scheduledFor?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    id?: string
    timestamp?: Date | string
    status: $Enums.AssignmentStatus
    reason?: string | null
    order: OrderCreateNestedOneWithoutAssignmentInput
    partner: DeliveryPartnerCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    orderId: string
    partnerId: string
    timestamp?: Date | string
    status: $Enums.AssignmentStatus
    reason?: string | null
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneRequiredWithoutAssignmentNestedInput
    partner?: DeliveryPartnerUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentCreateManyInput = {
    id?: string
    orderId: string
    partnerId: string
    timestamp?: Date | string
    status: $Enums.AssignmentStatus
    reason?: string | null
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPartnerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerStatus | EnumPartnerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PartnerStatus[] | ListEnumPartnerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartnerStatus[] | ListEnumPartnerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPartnerStatusFilter<$PrismaModel> | $Enums.PartnerStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliveryPartnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    currentLoad?: SortOrder
    areas?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    rating?: SortOrder
    completedOrders?: SortOrder
    cancelledOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryPartnerAvgOrderByAggregateInput = {
    currentLoad?: SortOrder
    rating?: SortOrder
    completedOrders?: SortOrder
    cancelledOrders?: SortOrder
  }

  export type DeliveryPartnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    currentLoad?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    rating?: SortOrder
    completedOrders?: SortOrder
    cancelledOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryPartnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    currentLoad?: SortOrder
    shiftStart?: SortOrder
    shiftEnd?: SortOrder
    rating?: SortOrder
    completedOrders?: SortOrder
    cancelledOrders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryPartnerSumOrderByAggregateInput = {
    currentLoad?: SortOrder
    rating?: SortOrder
    completedOrders?: SortOrder
    cancelledOrders?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPartnerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerStatus | EnumPartnerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PartnerStatus[] | ListEnumPartnerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartnerStatus[] | ListEnumPartnerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPartnerStatusWithAggregatesFilter<$PrismaModel> | $Enums.PartnerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPartnerStatusFilter<$PrismaModel>
    _max?: NestedEnumPartnerStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AssignmentNullableScalarRelationFilter = {
    is?: AssignmentWhereInput | null
    isNot?: AssignmentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerAddress?: SortOrder
    area?: SortOrder
    status?: SortOrder
    scheduledFor?: SortOrder
    totalAmount?: SortOrder
    assignedTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerAddress?: SortOrder
    area?: SortOrder
    status?: SortOrder
    scheduledFor?: SortOrder
    totalAmount?: SortOrder
    assignedTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerAddress?: SortOrder
    area?: SortOrder
    status?: SortOrder
    scheduledFor?: SortOrder
    totalAmount?: SortOrder
    assignedTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type DeliveryPartnerScalarRelationFilter = {
    is?: DeliveryPartnerWhereInput
    isNot?: DeliveryPartnerWhereInput
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    partnerId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    reason?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    partnerId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    reason?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    partnerId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    reason?: SortOrder
  }

  export type EnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type DeliveryPartnerCreateareasInput = {
    set: string[]
  }

  export type AssignmentCreateNestedManyWithoutPartnerInput = {
    create?: XOR<AssignmentCreateWithoutPartnerInput, AssignmentUncheckedCreateWithoutPartnerInput> | AssignmentCreateWithoutPartnerInput[] | AssignmentUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutPartnerInput | AssignmentCreateOrConnectWithoutPartnerInput[]
    createMany?: AssignmentCreateManyPartnerInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutPartnerInput = {
    create?: XOR<AssignmentCreateWithoutPartnerInput, AssignmentUncheckedCreateWithoutPartnerInput> | AssignmentCreateWithoutPartnerInput[] | AssignmentUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutPartnerInput | AssignmentCreateOrConnectWithoutPartnerInput[]
    createMany?: AssignmentCreateManyPartnerInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPartnerStatusFieldUpdateOperationsInput = {
    set?: $Enums.PartnerStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeliveryPartnerUpdateareasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AssignmentUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<AssignmentCreateWithoutPartnerInput, AssignmentUncheckedCreateWithoutPartnerInput> | AssignmentCreateWithoutPartnerInput[] | AssignmentUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutPartnerInput | AssignmentCreateOrConnectWithoutPartnerInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutPartnerInput | AssignmentUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: AssignmentCreateManyPartnerInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutPartnerInput | AssignmentUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutPartnerInput | AssignmentUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<AssignmentCreateWithoutPartnerInput, AssignmentUncheckedCreateWithoutPartnerInput> | AssignmentCreateWithoutPartnerInput[] | AssignmentUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutPartnerInput | AssignmentCreateOrConnectWithoutPartnerInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutPartnerInput | AssignmentUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: AssignmentCreateManyPartnerInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutPartnerInput | AssignmentUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutPartnerInput | AssignmentUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentCreateNestedOneWithoutOrderInput = {
    create?: XOR<AssignmentCreateWithoutOrderInput, AssignmentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutOrderInput
    connect?: AssignmentWhereUniqueInput
  }

  export type AssignmentUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<AssignmentCreateWithoutOrderInput, AssignmentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutOrderInput
    connect?: AssignmentWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AssignmentUpdateOneWithoutOrderNestedInput = {
    create?: XOR<AssignmentCreateWithoutOrderInput, AssignmentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutOrderInput
    upsert?: AssignmentUpsertWithoutOrderInput
    disconnect?: AssignmentWhereInput | boolean
    delete?: AssignmentWhereInput | boolean
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutOrderInput, AssignmentUpdateWithoutOrderInput>, AssignmentUncheckedUpdateWithoutOrderInput>
  }

  export type AssignmentUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<AssignmentCreateWithoutOrderInput, AssignmentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutOrderInput
    upsert?: AssignmentUpsertWithoutOrderInput
    disconnect?: AssignmentWhereInput | boolean
    delete?: AssignmentWhereInput | boolean
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutOrderInput, AssignmentUpdateWithoutOrderInput>, AssignmentUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<OrderCreateWithoutAssignmentInput, OrderUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutAssignmentInput
    connect?: OrderWhereUniqueInput
  }

  export type DeliveryPartnerCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<DeliveryPartnerCreateWithoutAssignmentsInput, DeliveryPartnerUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: DeliveryPartnerCreateOrConnectWithoutAssignmentsInput
    connect?: DeliveryPartnerWhereUniqueInput
  }

  export type EnumAssignmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssignmentStatus
  }

  export type OrderUpdateOneRequiredWithoutAssignmentNestedInput = {
    create?: XOR<OrderCreateWithoutAssignmentInput, OrderUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutAssignmentInput
    upsert?: OrderUpsertWithoutAssignmentInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutAssignmentInput, OrderUpdateWithoutAssignmentInput>, OrderUncheckedUpdateWithoutAssignmentInput>
  }

  export type DeliveryPartnerUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<DeliveryPartnerCreateWithoutAssignmentsInput, DeliveryPartnerUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: DeliveryPartnerCreateOrConnectWithoutAssignmentsInput
    upsert?: DeliveryPartnerUpsertWithoutAssignmentsInput
    connect?: DeliveryPartnerWhereUniqueInput
    update?: XOR<XOR<DeliveryPartnerUpdateToOneWithWhereWithoutAssignmentsInput, DeliveryPartnerUpdateWithoutAssignmentsInput>, DeliveryPartnerUncheckedUpdateWithoutAssignmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPartnerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerStatus | EnumPartnerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PartnerStatus[] | ListEnumPartnerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartnerStatus[] | ListEnumPartnerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPartnerStatusFilter<$PrismaModel> | $Enums.PartnerStatus
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumPartnerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerStatus | EnumPartnerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PartnerStatus[] | ListEnumPartnerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartnerStatus[] | ListEnumPartnerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPartnerStatusWithAggregatesFilter<$PrismaModel> | $Enums.PartnerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPartnerStatusFilter<$PrismaModel>
    _max?: NestedEnumPartnerStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type AssignmentCreateWithoutPartnerInput = {
    id?: string
    timestamp?: Date | string
    status: $Enums.AssignmentStatus
    reason?: string | null
    order: OrderCreateNestedOneWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutPartnerInput = {
    id?: string
    orderId: string
    timestamp?: Date | string
    status: $Enums.AssignmentStatus
    reason?: string | null
  }

  export type AssignmentCreateOrConnectWithoutPartnerInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutPartnerInput, AssignmentUncheckedCreateWithoutPartnerInput>
  }

  export type AssignmentCreateManyPartnerInputEnvelope = {
    data: AssignmentCreateManyPartnerInput | AssignmentCreateManyPartnerInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentUpsertWithWhereUniqueWithoutPartnerInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutPartnerInput, AssignmentUncheckedUpdateWithoutPartnerInput>
    create: XOR<AssignmentCreateWithoutPartnerInput, AssignmentUncheckedCreateWithoutPartnerInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutPartnerInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutPartnerInput, AssignmentUncheckedUpdateWithoutPartnerInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutPartnerInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutPartnerInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    orderId?: StringFilter<"Assignment"> | string
    partnerId?: StringFilter<"Assignment"> | string
    timestamp?: DateTimeFilter<"Assignment"> | Date | string
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    reason?: StringNullableFilter<"Assignment"> | string | null
  }

  export type AssignmentCreateWithoutOrderInput = {
    id?: string
    timestamp?: Date | string
    status: $Enums.AssignmentStatus
    reason?: string | null
    partner: DeliveryPartnerCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutOrderInput = {
    id?: string
    partnerId: string
    timestamp?: Date | string
    status: $Enums.AssignmentStatus
    reason?: string | null
  }

  export type AssignmentCreateOrConnectWithoutOrderInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutOrderInput, AssignmentUncheckedCreateWithoutOrderInput>
  }

  export type AssignmentUpsertWithoutOrderInput = {
    update: XOR<AssignmentUpdateWithoutOrderInput, AssignmentUncheckedUpdateWithoutOrderInput>
    create: XOR<AssignmentCreateWithoutOrderInput, AssignmentUncheckedCreateWithoutOrderInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutOrderInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutOrderInput, AssignmentUncheckedUpdateWithoutOrderInput>
  }

  export type AssignmentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    partner?: DeliveryPartnerUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateWithoutAssignmentInput = {
    id?: string
    orderNumber: string
    customerName: string
    customerPhone: string
    customerAddress: string
    area: string
    status: $Enums.OrderStatus
    scheduledFor: string
    totalAmount: number
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutAssignmentInput = {
    id?: string
    orderNumber: string
    customerName: string
    customerPhone: string
    customerAddress: string
    area: string
    status: $Enums.OrderStatus
    scheduledFor: string
    totalAmount: number
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutAssignmentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutAssignmentInput, OrderUncheckedCreateWithoutAssignmentInput>
  }

  export type DeliveryPartnerCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    email: string
    phone: string
    status: $Enums.PartnerStatus
    currentLoad: number
    areas?: DeliveryPartnerCreateareasInput | string[]
    shiftStart: string
    shiftEnd: string
    rating: number
    completedOrders: number
    cancelledOrders: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryPartnerUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    email: string
    phone: string
    status: $Enums.PartnerStatus
    currentLoad: number
    areas?: DeliveryPartnerCreateareasInput | string[]
    shiftStart: string
    shiftEnd: string
    rating: number
    completedOrders: number
    cancelledOrders: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryPartnerCreateOrConnectWithoutAssignmentsInput = {
    where: DeliveryPartnerWhereUniqueInput
    create: XOR<DeliveryPartnerCreateWithoutAssignmentsInput, DeliveryPartnerUncheckedCreateWithoutAssignmentsInput>
  }

  export type OrderUpsertWithoutAssignmentInput = {
    update: XOR<OrderUpdateWithoutAssignmentInput, OrderUncheckedUpdateWithoutAssignmentInput>
    create: XOR<OrderCreateWithoutAssignmentInput, OrderUncheckedCreateWithoutAssignmentInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutAssignmentInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutAssignmentInput, OrderUncheckedUpdateWithoutAssignmentInput>
  }

  export type OrderUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    scheduledFor?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    scheduledFor?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryPartnerUpsertWithoutAssignmentsInput = {
    update: XOR<DeliveryPartnerUpdateWithoutAssignmentsInput, DeliveryPartnerUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<DeliveryPartnerCreateWithoutAssignmentsInput, DeliveryPartnerUncheckedCreateWithoutAssignmentsInput>
    where?: DeliveryPartnerWhereInput
  }

  export type DeliveryPartnerUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: DeliveryPartnerWhereInput
    data: XOR<DeliveryPartnerUpdateWithoutAssignmentsInput, DeliveryPartnerUncheckedUpdateWithoutAssignmentsInput>
  }

  export type DeliveryPartnerUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    currentLoad?: IntFieldUpdateOperationsInput | number
    areas?: DeliveryPartnerUpdateareasInput | string[]
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    completedOrders?: IntFieldUpdateOperationsInput | number
    cancelledOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryPartnerUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    currentLoad?: IntFieldUpdateOperationsInput | number
    areas?: DeliveryPartnerUpdateareasInput | string[]
    shiftStart?: StringFieldUpdateOperationsInput | string
    shiftEnd?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    completedOrders?: IntFieldUpdateOperationsInput | number
    cancelledOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateManyPartnerInput = {
    id?: string
    orderId: string
    timestamp?: Date | string
    status: $Enums.AssignmentStatus
    reason?: string | null
  }

  export type AssignmentUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneRequiredWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentUncheckedUpdateManyWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}