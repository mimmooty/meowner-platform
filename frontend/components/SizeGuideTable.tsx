export default function SizeGuideTable() {
  return (
    <div className="overflow-hidden  border border-gray-200 mt-6 ">
      <table className="w-full text-left border-collapse bg-white">
        <thead className=" border-b border-gray-200">
          <tr>
            <th className="px-4 py-3 text-xs font-mono tracking-wider text-gray-500">
              Size Guide (Inches)
            </th>
            <th className="px-4 py-3 text-center text-sm font-bold text-gray-900">
              S
            </th>
            <th className="px-4 py-3 text-center text-sm font-bold text-gray-900">
              M
            </th>
            <th className="px-4 py-3 text-center text-sm font-bold text-gray-900">
              L
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 font-mono text-sm">
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-4 py-3 font-medium text-gray-600 bg-gray-50/50">
              Chest
            </td>
            <td className="px-4 py-3 text-center">40</td>
            <td className="px-4 py-3 text-center">44</td>
            <td className="px-4 py-3 text-center">48</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-4 py-3 font-medium text-gray-600 bg-gray-50/50">
              Shoulder
            </td>
            <td className="px-4 py-3 text-center">19.5</td>
            <td className="px-4 py-3 text-center">21</td>
            <td className="px-4 py-3 text-center">22.5</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-4 py-3 font-medium text-gray-600 bg-gray-50/50">
              Sleeve
            </td>
            <td className="px-4 py-3 text-center">8.5</td>
            <td className="px-4 py-3 text-center">9</td>
            <td className="px-4 py-3 text-center">9.5</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-4 py-3 font-medium text-gray-600 bg-gray-50/50">
              Length
            </td>
            <td className="px-4 py-3 text-center">27.5</td>
            <td className="px-4 py-3 text-center">28.5</td>
            <td className="px-4 py-3 text-center">29.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
