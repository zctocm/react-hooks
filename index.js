export {
  default as useConfluxPortal,
  wrapIsPortalInstalled,
} from "./src/useConfluxPortal";
import {
  useEpochNumber,
  useEpochNumberFn,
  setupEpochListener,
} from "./src/useEpochNumber";
export { useEpochNumber, useEpochNumberFn };
export { default as useSWR, useEpochNumberSWR } from "./src/swr";
export { default as initContract } from "./src/initContract";
export * as shuttleFlow from "./shuttleflow";

setupEpochListener();
