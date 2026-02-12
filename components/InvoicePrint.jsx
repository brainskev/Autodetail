'use client'

import Image from 'next/image'

export default function InvoicePrint({ data }) {
  if (!data) return null

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden print:shadow-none print:rounded-none print:max-w-full">
      {/* Invoice Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-5 py-7 sm:px-10 sm:py-10 print:px-7 print:py-7 print:bg-primary">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 print:w-16 print:h-16 relative rounded-lg overflow-hidden bg-black">
                <Image
                  src="/logo-white.webp"
                  alt="Shift-up Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl print:text-3xl font-heading font-bold">INVOICE</h1>
              </div>
            </div>
            <p className="text-white/90 font-manrope text-base sm:text-lg print:text-base">Auto Detailing Services</p>
          </div>
          <div className="text-left sm:text-right">
            <div className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg print:px-4 print:py-2">
              <p className="text-white/80 text-xs sm:text-sm font-manrope mb-2">Invoice Number</p>
              <p className="text-2xl sm:text-3xl print:text-2xl font-heading font-bold">{data.invoiceNumber}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Company & Customer Info */}
      <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 p-7 sm:p-9 print:grid-cols-2 print:gap-6 print:p-6 border-b border-border">
        <div>
          <h3 className="text-xs font-heading font-bold text-gray-500 uppercase tracking-widest mb-4">From</h3>
          <div className="space-y-2">
            <p className="text-lg sm:text-xl print:text-base font-heading font-bold text-secondary">Shift-up Auto Detailing</p>
            <p className="text-gray-600 font-manrope text-base print:text-sm">Nairobi, Kenya</p>
            <p className="text-gray-600 font-manrope text-base print:text-sm">+254 114 347 091</p>
            <p className="text-gray-600 font-manrope text-base print:text-sm">support@autodetail.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-heading font-bold text-gray-500 uppercase tracking-widest mb-4">Bill To</h3>
          <div className="space-y-2">
            <p className="text-lg sm:text-xl print:text-base font-heading font-bold text-secondary">{data.customerName}</p>
            <p className="text-gray-600 font-manrope text-base print:text-sm">{data.customerAddress}</p>
            {data.customerPhone && <p className="text-gray-600 font-manrope text-base print:text-sm">{data.customerPhone}</p>}
            {data.customerEmail && <p className="text-gray-600 font-manrope text-base print:text-sm">{data.customerEmail}</p>}
          </div>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="px-7 py-5 sm:px-9 sm:py-6 print:px-6 print:py-5 bg-light flex flex-col sm:flex-row gap-8 sm:gap-12">
        <div>
          <p className="text-xs font-heading font-bold text-gray-500 uppercase tracking-widest mb-2">Invoice Date</p>
          <p className="text-base sm:text-lg print:text-base font-semibold text-secondary font-manrope">
            {new Date(data.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
        <div>
          <p className="text-xs font-heading font-bold text-gray-500 uppercase tracking-widest mb-2">Payment Status</p>
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold font-manrope">
            Pending
          </span>
        </div>
      </div>

      {/* Items Table */}
      <div className="p-7 sm:p-9 print:p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left py-5 print:py-3 font-heading font-bold text-secondary uppercase text-base">Description</th>
                <th className="text-center py-5 print:py-3 font-heading font-bold text-secondary uppercase text-base w-20 sm:w-24">Qty</th>
                <th className="text-right py-5 print:py-3 font-heading font-bold text-secondary uppercase text-base w-32 sm:w-40">Price</th>
                <th className="text-right py-5 print:py-3 font-heading font-bold text-secondary uppercase text-base w-32 sm:w-40">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, index) => (
                <tr key={index} className="border-b border-border">
                  <td className="py-5 print:py-3 font-manrope text-gray-700 text-lg print:text-sm">{item.description}</td>
                  <td className="py-5 print:py-3 text-center font-manrope text-gray-700 text-lg print:text-sm">{item.quantity}</td>
                  <td className="py-5 print:py-3 text-right font-manrope text-gray-700 text-lg print:text-sm">{item.price.toLocaleString()}</td>
                  <td className="py-5 print:py-3 text-right font-semibold text-secondary font-manrope text-lg print:text-sm">
                    {(item.quantity * item.price).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Section */}
        <div className="mt-8 sm:mt-10 print:mt-6 flex justify-end">
          <div className="w-full sm:w-96 print:w-80">
            <div className="flex justify-between items-center p-5 print:p-4 bg-light rounded-t-xl print:rounded-t-lg">
              <span className="font-heading font-semibold text-secondary text-base print:text-sm">Subtotal:</span>
              <span className="font-manrope text-secondary text-base print:text-sm">KES {data.total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center p-5 print:p-4 bg-light border-t border-border">
              <span className="font-heading font-semibold text-secondary text-base print:text-sm">Tax (0%):</span>
              <span className="font-manrope text-secondary text-base print:text-sm">KES 0.00</span>
            </div>
            <div className="flex justify-between items-center p-6 sm:p-7 print:p-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-b-xl print:rounded-b-lg">
              <span className="font-heading font-bold text-lg sm:text-xl print:text-base">Total:</span>
              <span className="font-heading font-bold text-3xl sm:text-4xl print:text-2xl">KES {data.total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {data.notes && (
          <div className="mt-6 sm:mt-8 print:mt-6 p-5 sm:p-6 print:p-5 bg-light rounded-lg">
            <h3 className="font-heading font-bold text-secondary mb-3 text-base print:text-sm">Notes:</h3>
            <p className="text-gray-600 font-manrope text-base print:text-sm">{data.notes}</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-10 sm:mt-12 print:mt-8 pt-6 sm:pt-8 print:pt-5 border-t border-border text-center">
          <div className="mb-6 p-5 sm:p-6 bg-light rounded-lg border border-border">
            <h4 className="font-heading font-bold text-secondary mb-3 text-base">Payment Information</h4>
            <div className="space-y-2 text-left sm:max-w-md sm:mx-auto">
              <p className="font-manrope text-sm text-gray-700">
                <span className="font-semibold text-secondary">M-Pesa:</span> Buy Goods Number <span className="font-bold text-primary">1160887</span>
              </p>
              <p className="font-manrope text-sm text-gray-600">Name: Shift-up Auto Detailing</p>
            </div>
          </div>
          <p className="text-gray-500 font-manrope text-base print:text-sm mb-2">
            Thank you for choosing Shift-up Auto Detailing!
          </p>
          <p className="text-gray-400 font-manrope text-sm print:text-xs">
            For any questions regarding this invoice, please contact us at support@autodetail.com
          </p>
        </div>
      </div>
    </div>
  )
}
