import Table from "./Table";
import TableItem from "./TableItem";

function AKOTable() {
  return (
    <Table header="Átlagos Képzési Óraszám (ÁKÓ)" headerColspan="8">
      <tr>
        <TableItem colspan="2" text="AM" />
        <TableItem colspan="2" text="A1, A2, A összesítve" />
        <TableItem colspan="2" text="B" />
        <TableItem colspan="2" text="C" />
      </tr>
      <tr>
        <TableItem colspan="2" text="Gyakorlat" />
        <TableItem colspan="2" text="Gyakorlat" />
        <TableItem colspan="2" text="Gyakorlat" />
        <TableItem colspan="2" text="Gyakorlat" />
      </tr>
      <tr>
        <TableItem text="2023/1." />
        <TableItem text="2023/2." />
        <TableItem text="2023/1." />
        <TableItem text="2023/2." />
        <TableItem text="2023/1." />
        <TableItem text="2023/2." />
        <TableItem text="2023/1." />
        <TableItem text="2023/2." />
      </tr>
      <tr>
        <TableItem text="-" />
        <TableItem text="-" />
        <TableItem text="-" />
        <TableItem text="134.64%" />
        <TableItem text="151.28%" />
        <TableItem text="148.66%" />
        <TableItem text="100.38%" />
        <TableItem text="122.80%" />
      </tr>
    </Table>
  );
}

export default AKOTable;
