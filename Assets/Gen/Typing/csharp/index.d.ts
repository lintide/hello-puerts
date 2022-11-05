﻿
declare module 'csharp' {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    namespace CSharp {
        interface $Ref<T> {
            value: T
        }
        namespace System {
            interface Array$1<T> extends System.Array {
                get_Item(index: number):T;
                set_Item(index: number, value: T):void;
            }
        }
        interface $Task<T> {}
        namespace System {
            class Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Array extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.Collections.IList, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Collections.ICollection
            {
                protected [__keep_incompatibility]: never;
            }
            interface ICloneable
            {
            }
        }
        namespace System.Collections {
            interface IEnumerable
            {
            }
            interface IList extends System.Collections.IEnumerable, System.Collections.ICollection
            {
            }
            interface ICollection extends System.Collections.IEnumerable
            {
            }
            interface IStructuralComparable
            {
            }
            interface IStructuralEquatable
            {
            }
        }
    }
    export = CSharp;
}
