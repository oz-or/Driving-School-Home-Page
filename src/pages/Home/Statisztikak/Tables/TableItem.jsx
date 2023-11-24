function TableItem({ colspan, text }) {
  return (
    <td
      colSpan={colspan || "1"}
      className="px-[15px] py-2.5 border border-white"
    >
      {text}
    </td>
  );
}

export default TableItem;
