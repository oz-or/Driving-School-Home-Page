import Table from "./Table";
import TableItem from "./TableItem";

function VSMTable() {
  return (
    <Table header="Vizsga Sikerességi Mutató (VSM)" headerColspan="16">
      <tr>
        <TableItem colspan="4" text="AM" />
        <TableItem colspan="4" text="A1, A2, A összesítve" />
        <TableItem colspan="4" text="B" />
        <TableItem colspan="4" text="C" />
      </tr>
      <tr>
        <TableItem colspan="2" text="Elmélet" />
        <TableItem colspan="2" text="Forgalom" />
        <TableItem colspan="2" text="Elmélet" />
        <TableItem colspan="2" text="Forgalom" />
        <TableItem colspan="2" text="Elmélet" />
        <TableItem colspan="2" text="Forgalom" />
        <TableItem colspan="2" text="Elmélet" />
        <TableItem colspan="2" text="Forgalom" />
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
        <TableItem text="-" />
        <TableItem text="86.36%" />
        <TableItem text="94.24%" />
        <TableItem text="-" />
        <TableItem text="85.85%" />
        <TableItem text="60.08%" />
        <TableItem text="66.06%" />
        <TableItem text="41.42%" />
        <TableItem text="43.04%" />
        <TableItem text="84.16%" />
        <TableItem text="77.78%" />
        <TableItem text="84.38%" />
        <TableItem text="80.00%" />
      </tr>
    </Table>
  );
}

export default VSMTable;
