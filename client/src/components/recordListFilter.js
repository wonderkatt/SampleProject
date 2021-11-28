import { useRecoilState, useSetRecoilState } from "recoil";
import { PageCountState, RecordFilterState } from "../state/Atoms";

export default function RecordListFilter() {
    const [filter, setFilter] = useRecoilState(RecordFilterState);
    const setPageCount = useSetRecoilState(PageCountState);

    const updateFilter= ({target: {value}}) => {
        setPageCount(0);
        setFilter(value);
    }

    return (
        <>
            Välj kön:
            <select className="filterSelect" value={filter} onChange={updateFilter}>
                <option value="both">Bägge</option>
                <option value="women">Kvinnor</option>
                <option value="men">Män</option>
            </select>
        </>
    )
}