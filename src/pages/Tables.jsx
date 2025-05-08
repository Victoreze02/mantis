import React from 'react'

const Tables = () => {
  return (
    <>
    <h3 className="font-bold">Recent Sales</h3>
        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">CUSTOMER</th>
              <th className="p-2 border">KIT NO</th>
              <th className="p-2 border">NO OF KG</th>
              <th className="p-2 border">PRICE PER KG</th>
              <th className="p-2 border">TOTAL AMOUNT</th>
              <th className="p-2 border">DATE</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="p-2 border">Hassan</td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border">₦6,000.00</td>
                <td className="p-2 border">₦30,000.00</td>
                <td className="p-2 border">Apr 22,2025, 10:23:59PM</td>
              </tr>


              <tr>
                <td className="p-2 border">Manasseh</td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border">₦1,500.00</td>
                <td className="p-2 border">₦33,000.00</td>
                <td className="p-2 border">Apr 22,2025, 9:51:13PM</td>
              </tr>


              <tr>
                <td className="p-2 border">Manasseh</td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border">₦5,000.00</td>
                <td className="p-2 border">₦75,000.00</td>
                <td className="p-2 border">Apr 22,2025, 9:46:47PM</td>
              </tr>


              <tr>
                <td className="p-2 border">Hassan</td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border">₦6,000.00</td>
                <td className="p-2 border">₦60,000.00</td>
                <td className="p-2 border">Apr 22,2025, 7:19:01AM</td>
              </tr>


              <tr>
                <td className="p-2 border">Hassan</td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border">₦5,500.00</td>
                <td className="p-2 border">₦82,500.00</td>
                <td className="p-2 border">Apr 22,2025, 7:15:32AM</td>
              </tr>



              <tr>
                <td className="p-2 border">Hassan</td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border">₦1,500.00</td>
                <td className="p-2 border">₦7,500.00</td>
                <td className="p-2 border">Apr 22,2025, 6:48:11AM</td>
              </tr>



              <tr>
                <td className="p-2 border">Hassan</td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border">₦1,000.00</td>
                <td className="p-2 border">₦50,000.00</td>
                <td className="p-2 border">Apr 21,2025, 9:16:37PM</td>
              </tr>
           
          </tbody>
        </table>
    </>
  )
}

export default Tables;