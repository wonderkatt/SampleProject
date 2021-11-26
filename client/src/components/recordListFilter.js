import { useRecoilState } from "recoil";
import { RecordFilterState } from "../state/Atoms";

export default function RecordListFilter() {
    const [filter, setFilter] = useRecoilState(RecordFilterState);

    const updateFilter= ({target: {value}}) => {
        setFilter(value);
        console.log(value);
    }

    return (
        <>
            Kön: 
            <select value={filter} onChange={updateFilter}>
                <option value="both">Bägge</option>
                <option value="women">Kvinnor</option>
                <option value="men">Män</option>
            </select>
        </>
    )
}