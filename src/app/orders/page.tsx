import React from 'react'

export default function OrdersPage() {
  return (
    <div className='p-4 lg:p-20 xl:p-40'>
        <table className='w-full border-separate border-spacing-1'>
          <thead>
            <tr className='text-left'>
              <th className='hidden md:block'>Order ID</th>
              <th>Date</th>
              <th>Price</th>
              <th className='hidden md:block'>Products</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-sm md:text-base odd:bg-red-50'>
              <td className='hidden md:block py-6 px-1'>123456789</td>
              <td className='py-6 px-1'>15.08.2023.</td>
              <td className='py-6 px-1'>180.00</td>
              <td className='hidden md:block py-6 px-1'>Big burger</td>
              <td className='py-6 px-1'>On the way...</td>
            </tr>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
              <td className='hidden md:block py-6 px-1'>123456789</td>
              <td className='py-6 px-1'>15.08.2023.</td>
              <td className='py-6 px-1'>180.00</td>
              <td className='hidden md:block py-6 px-1'>Big burger</td>
              <td className='py-6 px-1'>On the way...</td>
            </tr>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
              <td className='hidden md:block py-6 px-1'>123456789</td>
              <td className='py-6 px-1'>15.08.2023.</td>
              <td className='py-6 px-1'>180.00</td>
              <td className='hidden md:block py-6 px-1'>Big burger</td>
              <td className='py-6 px-1'>On the way...</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}
