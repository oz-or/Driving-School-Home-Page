import KKTableRow from "./KKTableRow";
import Table from "./Table";

function KKTable() {
  return (
    <Table header="KK" headerColspan="2">
      <KKTableRow text1="AM" text2="140.790 Ft" />
      <KKTableRow text1="A1" text2="208.290 Ft" />
      <KKTableRow text1="A2" text2="208.290 Ft" />
      <KKTableRow text1="A" text2="245.900 Ft" />
      <KKTableRow text1="B" text2="295.590 Ft" />
      <KKTableRow text1="C" text2="292.700 Ft" />
      <KKTableRow text1="D" text2="536.000 Ft" />
      <KKTableRow text1="BE" text2="227.200 Ft" />
      <KKTableRow text1="CE" text2="278.100 Ft" />
    </Table>
  );
}

export default KKTable;
