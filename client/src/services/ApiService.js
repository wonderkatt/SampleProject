import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { RecordListState } from "../state/Atoms";

export default function ApiService(){
    const setRecordList = useSetRecoilState(RecordListState)

    useEffect(() => {
        console.log("fetch");
        fetch("http://localhost:52287/record")
        .then(response => response.json())
        .then(data => setRecordList(data))
        .catch(error => console.log(error));}, []);

        return( null )
}
 