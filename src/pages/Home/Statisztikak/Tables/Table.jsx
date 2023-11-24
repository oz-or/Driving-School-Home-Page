function Table({ header, headerColspan, children }) {
  return (
    <div className="overflow-x-scroll shadow-[0_0_8px_rgba(0,0,0,0.15)]">
      <table
        cellSpacing="1"
        border="0"
        className="text-[12px] leading-[21px] shadow-[0_0_8px_rgba(0,0,0,0.15)] text-left border border-white w-full"
      >
        <thead>
          <tr className="bg-[#040404] text-white">
            <th
              colSpan={headerColspan}
              className="font-normal px-[15px] py-2.5 border border-white "
            >
              {header}
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#e8e8e8]">{children}</tbody>
      </table>
    </div>
  );
}

export default Table;
