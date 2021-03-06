import ReactPaginate from "react-paginate";
import {useRecoilState, useRecoilValue} from "recoil";
import { FilteredRecordListState } from "../state/Selectors";
import Record from "./Record";
import RecordListFilter from "./recordListFilter";
import { Table }  from "react-bootstrap";
import { PageCountState } from "../state/Atoms";

export default function RecordList(){
    const recordList = useRecoilValue(FilteredRecordListState)
    const [pageNumber, setPageNumber] = useRecoilState(PageCountState);

    const recordsPerPage = 18;
    const pagesViewed = pageNumber * recordsPerPage;
    const pageCount = Math.ceil(recordList.length / recordsPerPage);
    
    const displayList =  recordList
    .slice(pagesViewed, pagesViewed + recordsPerPage)
    .map((record) => {return  (<Record key={record.id} record={record}/> )});  

    const changePage = ({selected}) => {
         setPageNumber(selected)
        };

    return(
        <>
            <RecordListFilter/>
            <Table striped bordered hover className="recordTable">
                <thead>
                    <tr>
                    <th>Region</th>
                    <th>Kön</th>
                    <th>Födda 2016</th>
                    <th>Födda 2017</th>
                    <th>Födda 2018</th>
                    <th>Födda 2019</th>
                    <th>Födda 2020</th>
                    </tr>
             </thead>
                <tbody>
                    <>
                        {displayList}
                    </>
                </tbody>
            </Table>
            <>
                <ReactPaginate
                previousLabel={"Föregående"}
                nextLabel={"Nästa"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                activeClassName={"active"}
                nextLinkClassName={"next"}
                previousLinkClassName={"previous"}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                /> 
            </>
        </>
    );

}