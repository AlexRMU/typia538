<script lang="ts">
  import typia, { type tags } from "typia";
  // ts alias
  import type { T1, I1 } from "$types";
  // vite and ts alias
  import type { T1 as T2, I1 as I2 } from "~types";
  // relative import
  import type { T1 as T3, I1 as I3 } from "./types";

  type T4 = number & tags.Minimum<1>;
  interface I4 {
    k: T4;
  }
  // mixed
  interface I5 {
    k: T1;
  }

  const t1: T1 = -1;
  const t2: T2 = -1;
  const t3: T3 = -1;
  const t4: T4 = -1;
  const i1: I1 = { k: -1 };
  const i2: I2 = { k: -1 };
  const i3: I3 = { k: -1 };
  const i4: I4 = { k: -1 };
  const i5: I5 = { k: -1 };

  function try_(name: string, fn: () => void) {
    try {
      fn();
      console.log(name, "no error");
    } catch (error) {
      console.log(name, "error");
    }
  }

  try_("1 - T1", () => typia.assert<T1>(-1)); // no error
  try_("1 - T2", () => typia.assert<T2>(-1));
  try_("1 - T3", () => typia.assert<T3>(-1));
  try_("1 - T4", () => typia.assert<T4>(-1));
  try_("1 - I1", () => typia.assert<I1>({ k: -1 })); // no error
  try_("1 - I2", () => typia.assert<I2>({ k: -1 }));
  try_("1 - I3", () => typia.assert<I3>({ k: -1 }));
  try_("1 - I4", () => typia.assert<I4>({ k: -1 }));
  try_("1 - I5", () => typia.assert<I5>({ k: -1 })); // no error

  try_("2 - T1", () => typia.assert(t1)); // no error
  try_("2 - T2", () => typia.assert(t2));
  try_("2 - T3", () => typia.assert(t3));
  try_("2 - T4", () => typia.assert(t4));
  try_("2 - I1", () => typia.assert(i1)); // no error
  try_("2 - I2", () => typia.assert(i2));
  try_("2 - I3", () => typia.assert(i3));
  try_("2 - I4", () => typia.assert(i4));
  try_("2 - I5", () => typia.assert(i5)); // no error

  try_("3 - T1", () => typia.assert<T1>(t1)); // no error
  try_("3 - T2", () => typia.assert<T2>(t2));
  try_("3 - T3", () => typia.assert<T3>(t3));
  try_("3 - T4", () => typia.assert<T4>(t4));
  try_("3 - I1", () => typia.assert<I1>(i1)); // no error
  try_("3 - I2", () => typia.assert<I2>(i2));
  try_("3 - I3", () => typia.assert<I3>(i3));
  try_("3 - I4", () => typia.assert<I4>(i4));
  try_("3 - I5", () => typia.assert<I5>(i5)); // no error
</script>
