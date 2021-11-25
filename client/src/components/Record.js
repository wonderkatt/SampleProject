
export default function Record({record}){
    return (
        <tr>
            <td>{record.region}</td>
            <td>{record.gender}</td>
            <td>{record.born2016}</td>
            <td>{record.born2017}</td>
            <td>{record.born2018}</td>
            <td>{record.born2019}</td>
            <td>{record.born2020}</td>
        </tr>
      );
}