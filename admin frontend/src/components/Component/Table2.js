// components/DataTable.js
import index from "@/pages/settings";
import Image from "next/image";

const Table2 = () => {
  // Sample data for each row (you can replace this with actual data)
  const data = [
    {
      id: 1,
      checkbox: true,
      number: "234343555",
      date: "Jul 2 2023, 9:30 PM",
      divContent: "Ax Studio",
      fullName: "Full Name",
      role: "UI Designer",
      phone: "2334 5555",
      status: "Pending",
      color: "#F05519",
      prncolor: "#F0551930",
    },
    {
      id: 2,
      checkbox: true,
      number: "234343555",
      date: "Jul 2 2023, 9:30 PM",
      divContent: "Ax Studio",
      fullName: "Full Name",
      role: "UI Designer",
      phone: "2334 5555",
      status: "Pending",
      color: "#09D690",
      prncolor: "#F0551930",
    },
    {
      id: 3,
      checkbox: true,
      number: "234343555",
      date: "Jul 2 2023, 9:30 PM",
      divContent: "Ax Studio",
      fullName: "Full Name",
      role: "UI Designer",
      phone: "2334 5555",
      status: "On Hold",
      color: "#2668E8",
      prncolor: "#09D69038",
    },
    {
      id: 1,
      checkbox: true,
      number: "234343555",
      date: "Jul 2 2023, 9:30 PM",
      divContent: "Ax Studio",
      fullName: "Full Name",
      role: "UI Designer",
      phone: "2334 5555",
      status: "Pending",
      color: "#F05519",
      prncolor: "#F0551930",
    },
    {
      id: 2,
      checkbox: true,
      number: "234343555",
      date: "Jul 2 2023, 9:30 PM",
      divContent: "Ax Studio",
      fullName: "Full Name",
      role: "UI Designer",
      phone: "2334 5555",
      status: "Pending",
      color: "#09D690",
      prncolor: "#F0551930",
    },
    {
      id: 3,
      checkbox: true,
      number: "234343555",
      date: "Jul 2 2023, 9:30 PM",
      divContent: "Ax Studio",
      fullName: "Full Name",
      role: "UI Designer",
      phone: "2334 5555",
      status: "Pending",
      color: "#2668E8",
      prncolor: "#F0551930",
    },
    {
      id: 2,
      checkbox: true,
      number: "234343555",
      date: "Jul 2 2023, 9:30 PM",
      divContent: "Ax Studio",
      fullName: "Full Name",
      role: "UI Designer",
      phone: "2334 5555",
      status: "Pending",
      color: "#09D690",
      prncolor: "#F0551930",
    },
    {
      id: 1,
      checkbox: true,
      number: "234343555",
      date: "Jul 2 2023, 9:30 PM",
      divContent: "Ax Studio",
      fullName: "Full Name",
      role: "UI Designer",
      phone: "2334 5555",
      status: "Pending",
      color: "#F05519",
      prncolor: "#F0551930",
    },
    {
      id: 2,
      checkbox: true,
      number: "234343555",
      date: "Jul 2 2023, 9:30 PM",
      divContent: "Ax Studio",
      fullName: "Full Name",
      role: "UI Designer",
      phone: "2334 5555",
      status: "Pending",
      color: "#09D690",
      prncolor: "#F0551930",
    },
    {
      id: 3,
      checkbox: true,
      number: "234343555",
      date: "Jul 2 2023, 9:30 PM",
      divContent: "Ax Studio",
      fullName: "Full Name",
      role: "UI Designer",
      phone: "2334 5555",
      status: "Pending",
      color: "#2668E8",
      prncolor: "#F0551930",
    },

    // Add more rows here if needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table-auto bg-white mt-5 w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-4 py-4 h-10 text-start">
              {" "}
              <input type="checkbox" className="w-5 h-5" />
            </th>
            <th className="px-4   font-poppins font-medium py-4 h-10 text-start">
              Order ID
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Date Applied
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Company
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Type
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Position
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Contact
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Status
            </th>
            <th className="px-4 font-poppins font-medium py-4 h-10 text-start">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-4">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="px-4 font-normal font-poppins py-4">
                {row.number}
              </td>
              <td className="px-4 font-normal font-poppins py-2">{row.date}</td>
              <td className="px-4 py-4">
                <div className="flex gap-2">
                  <div
                    style={{ background: row.color }}
                    className="p-4 rounded-lg"
                  ></div>
                  <h1 className="font-medium mt-[0.4rem] font-poppins">
                    {row.divContent}
                  </h1>
                </div>
              </td>
              <td className="px-4 font-poppins font-medium py-4">
                {row.fullName}
              </td>
              <td className="px-4 font-poppins font-medium py-4">{row.role}</td>
              <td className="px-4 py-4">
                <div className="flex gap-1">
                  <Image
                    src={"/images/phone.svg"}
                    height={10}
                    width={13}
                    alt="phone"
                  />
                  <h1 className="font-medium font-poppins"> {row.phone}</h1>
                </div>
              </td>
              <td className="px-4 py-4">
                <div
                  style={{ background: row.prncolor }}
                  className="pt-1 pb-1 pl-4 pr-3  rounded-lg "
                >
                  <h1 className="font-poppins font-normal">{row.status}</h1>
                </div>
              </td>
              <td className="px-4  py-4">
                <Image
                  src={"/images/dots.svg"}
                  height={5}
                  width={3}
                  alt="dots"
                  className="m-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
