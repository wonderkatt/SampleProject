import { useEffect } from "react";
import { useRecoilState} from "recoil";
import { RecordListState } from "../state/Atoms";
import Record from "./Record";


export default function RecordList(){
    const [recordList, setRecordList] = useRecoilState(RecordListState)
    

   const updateRecordList = ({data}) => {
        setRecordList(data)
   }

    useEffect(() => {
        fetch("http://localhost:52287/record")
        .then(response => response.json())
        .then(data => updateRecordList(data))
        .catch(error => console.log(error))}, [])

    return(
        <table>
            <thead>
                <tr>
                    <th>Region</th>
                    <th>gender</th>
                    <th>Födda 2016</th>
                    <th>Födda 2017</th>
                    <th>Födda 2018</th>
                    <th>Födda 2019</th>
                    <th>Födda 2020</th>
                </tr>
            </thead>
            <tbody>

                {recordList.map((record) => (
                <Record key={record.id} record={record}/>
                ))}
            </tbody>
        </table>
    );
}