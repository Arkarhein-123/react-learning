export default function List({ data }) {
    // Edge case: Handle empty array to prevent "data[0] is undefined" error
    if (!data || data.length === 0) {
        return <div className="text-center mt-6">No data available</div>;
    }

    return (
        <div className="max-w-full mx-auto mt-6 px-4">
            {/* Removed the <ul> tag and moved classes to a wrapping div or the table itself */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-100">
                        {data.map((item) => (
                            <tr key={item.id}>
                                {Object.keys(data[0]).map((key) => {
                                    const val = item[key];
                                    return (
                                        <td
                                            key={key}
                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        >
                                            {typeof val === "object" &&
                                            val !== null
                                                ? JSON.stringify(val)
                                                : String(val)}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
