import type { tags } from "typia";

export type T1 = number & tags.Minimum<1>;
export interface I1 {
    k: T1;
}
