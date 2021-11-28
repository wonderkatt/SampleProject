import { selector } from "recoil";
import { RecordFilterState, RecordListState } from "./Atoms";

export const FilteredRecordListState = selector({
    key: 'filteredRecordListState',
    get: ({get}) => {
        const filter = get(RecordFilterState);
        const list = get(RecordListState);

        switch (filter) {
            case 'women':
                return list.filter(record => record.gender === 'kvinnor');
            case 'men':
                return list.filter(record => record.gender === 'män');
            default:
                return list;
        }
    }
})