import TableItem from "./TableItem";

function KKTableRow({ text1, text2 }) {
  return (
    <tr>
      <TableItem text={text1} />
      <TableItem text={text2} />
    </tr>
  );
}

export default KKTableRow;
