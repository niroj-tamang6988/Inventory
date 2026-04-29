import type {Customers} from "../Types/index"

type Props= {
    customers: Customers[];
}


function CustomerTable ({customers}: Props){



    return(
        <>
        <div className="overflow-hidden border-t border-slate-200">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-100 text-xs font-bold uppercase text-slate-600">
          <tr>
            <th className="px-3 py-2">Name</th>
            <th className="px-3 py-2">Phone</th>
            <th className="px-3 py-2">PAN</th>
            <th className="px-3 py-2">Email</th>
            <th className="px-3 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id} className="border-t border-slate-200">
              <td className="px-3 py-2 font-semibold text-slate-800">{c.name}</td>
              <td className="px-3 py-2">{c.phone}</td>
              <td className="px-3 py-2">{c.pan}</td>
              <td className="px-3 py-2">{c.email}</td>
              <td className="px-3 py-2">{c.address}</td>
            </tr>
          ))}
          {customers.length === 0 && (
            <tr><td colSpan={5} className="px-3 py-6 text-center text-sm text-slate-500">No customers yet.</td></tr>
          )}
        </tbody>
      </table>
    </div>
        </>


    )
}

export default CustomerTable