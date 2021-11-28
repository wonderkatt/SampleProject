import { atom } from "recoil";

export const RecordListState = atom({
    key: 'recordListState',
    default: [],
  });

  export const RecordFilterState = atom({
    key: 'recordFilterState',
    default: 'both',
  });

  export const PageCountState = atom({
    key: 'pageCountState',
    default: 0,
  });