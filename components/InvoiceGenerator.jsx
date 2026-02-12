'use client'

import { useState } from 'react'

const SERVICES = [
  { id: 1, name: 'Exterior Hand Wash & Wax', price: 10000 },
  { id: 2, name: 'Interior Deep Cleaning', price: 10000 },
  { id: 3, name: 'Paint Correction', price: 10000 },
  { id: 4, name: 'Ceramic Coating Protection', price: 10000 },
  { id: 5, name: 'Engine Bay Detailing', price: 10000 },
  { id: 6, name: 'Headlight Restoration', price: 10000 },
]

const generateInvoiceNumber = () => `INV-${Date.now().toString().slice(-6)}`

export default function InvoiceGenerator({ onGenerate }) {
  const [formData, setFormData] = useState({
    invoiceNumber: generateInvoiceNumber(),
    date: new Date().toISOString().split('T')[0],
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: '',
    items: [{ description: '', quantity: 1, price: 10000 }],
    notes: ''
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.items]
    newItems[index][field] = value
    setFormData(prev => ({ ...prev, items: newItems }))
  }

  const handleServiceSelect = (index, serviceName) => {
    const service = SERVICES.find(s => s.name === serviceName)
    if (service) {
      const newItems = [...formData.items]
      newItems[index].description = service.name
      newItems[index].price = service.price
      setFormData(prev => ({ ...prev, items: newItems }))
    }
  }

  const addItem = () => {
    // Validate that the last item has at least a description
    const lastItem = formData.items[0]
    if (!lastItem.description.trim()) {
      setErrors(prev => ({
        ...prev,
        item: 'Please fill in the service description for the current item before adding a new one'
      }))
      return
    }
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors.item
      return newErrors
    })
    setFormData(prev => ({
      ...prev,
      items: [{ description: '', quantity: 1, price: 10000 }, ...prev.items]
    }))
  }

  const removeItem = (index) => {
    if (formData.items.length > 1) {
      setFormData(prev => ({
        ...prev,
        items: prev.items.filter((_, i) => i !== index)
      }))
    }
  }

  const calculateTotal = () => {
    return formData.items.reduce((sum, item) => sum + (item.quantity * item.price), 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    // Validate invoice number
    if (!formData.invoiceNumber.trim()) {
      newErrors.invoiceNumber = 'Invoice number is required'
    }

    // Validate customer name
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer name is required'
    }

    // Validate customer address
    if (!formData.customerAddress.trim()) {
      newErrors.customerAddress = 'Customer address is required'
    }

    // Validate at least one item is filled
    const hasValidItem = formData.items.some(item => item.description.trim() && item.quantity > 0 && item.price > 0)
    if (!hasValidItem) {
      newErrors.items = 'Please add at least one service with description, quantity, and price'
    }

    // Check all items are properly filled
    const allItemsFilled = formData.items.every(item => {
      if (item.description.trim() === '') return true // Empty items are ok if not used
      return item.quantity > 0 && item.price > 0
    })
    if (!allItemsFilled) {
      newErrors.items = 'All added items must have quantity and price filled in'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    onGenerate({ ...formData, total: calculateTotal() })
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-4 sm:px-8 sm:py-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold">Create New Invoice</h2>
          <p className="text-white/90 mt-1 sm:mt-2 font-manrope text-sm sm:text-base">Fill in the details below to generate your invoice</p>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
          {/* Error Summary */}
          {Object.keys(errors).length > 0 && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <h4 className="font-heading font-bold text-red-700 mb-2">Please fix the following errors:</h4>
              <ul className="space-y-1">
                {errors.invoiceNumber && <li className="text-sm text-red-600">• {errors.invoiceNumber}</li>}
                {errors.customerName && <li className="text-sm text-red-600">• {errors.customerName}</li>}
                {errors.customerAddress && <li className="text-sm text-red-600">• {errors.customerAddress}</li>}
                {errors.items && <li className="text-sm text-red-600">• {errors.items}</li>}
                {errors.item && <li className="text-sm text-red-600">• {errors.item}</li>}
              </ul>
            </div>
          )}

          {/* Invoice Info */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-secondary mb-2 font-heading">
                Invoice Number
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="invoiceNumber"
                  value={formData.invoiceNumber}
                  onChange={handleInputChange}
                  className={`flex-1 px-4 py-3 sm:px-4 sm:py-3 text-base sm:text-base rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                    errors.invoiceNumber ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => {
                    const newInvNumber = generateInvoiceNumber()
                    setFormData(prev => ({ ...prev, invoiceNumber: newInvNumber }))
                    setErrors(prev => {
                      const newErrors = { ...prev }
                      delete newErrors.invoiceNumber
                      return newErrors
                    })
                  }}
                  className="px-4 py-3 sm:px-4 sm:py-3 bg-primary text-white rounded-xl font-heading font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-all whitespace-nowrap"
                  title="Regenerate invoice number"
                >
                  New
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-secondary mb-2 font-heading">
                Invoice Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-3 sm:px-4 sm:py-3 text-base sm:text-base rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Customer Details */}
          <div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-secondary mb-4">
              Customer Details
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-secondary mb-2 font-heading">
                  Full Name
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 sm:px-4 sm:py-3 text-base sm:text-base rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                    errors.customerName ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'
                  }`}
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-secondary mb-2 font-heading">
                  Email
                </label>
                <input
                  type="email"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:px-4 sm:py-3 text-base sm:text-base rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-secondary mb-2 font-heading">
                  Phone
                </label>
                <input
                  type="tel"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:px-4 sm:py-3 text-base sm:text-base rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-secondary mb-2 font-heading">
                  Address
                </label>
                <input
                  type="text"
                  name="customerAddress"
                  value={formData.customerAddress}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 sm:px-4 sm:py-3 text-base sm:text-base rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all ${
                    errors.customerAddress ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'
                  }`}
                  required
                />
              </div>
            </div>
          </div>

          {/* Items */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-heading font-bold text-secondary">
                Services / Items
              </h3>
              <button
                type="button"
                onClick={addItem}
                className="px-3 py-2 sm:px-4 bg-primary text-white rounded-lg font-heading font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-all"
              >
                + Add Item
              </button>
            </div>
            {errors.item && (
              <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-700">{errors.item}</p>
              </div>
            )}
            <div className="space-y-4">
              {formData.items.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 p-3 sm:p-4 bg-light rounded-xl">
                  <div className="w-full">
                    <label className="block text-xs font-semibold text-secondary mb-2 font-heading">
                      Service Description
                    </label>
                    <select
                      value={item.description}
                      onChange={(e) => {
                        if (e.target.value) {
                          handleServiceSelect(index, e.target.value)
                        } else {
                          handleItemChange(index, 'description', '')
                        }
                      }}
                      className="w-full px-4 py-3 sm:px-4 sm:py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base sm:text-base bg-white"
                    >
                      <option value="">Select a service or enter custom below...</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name} (KES {service.price.toLocaleString()})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="block text-xs font-semibold text-secondary mb-2 font-heading">
                      Or Custom Service
                    </label>
                    <input
                      type="text"
                      placeholder="Enter custom service name"
                      value={item.description}
                      onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                      className="w-full px-4 py-3 sm:px-4 sm:py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base sm:text-base"
                      required
                    />
                  </div>
                  <div className="flex gap-3 w-full">
                    <div className="flex-1 sm:flex-none sm:w-24">
                      <label className="block text-xs font-semibold text-secondary mb-2 font-heading">
                        Quantity
                      </label>
                      <input
                        type="number"
                        placeholder="Qty"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value) || 1)}
                        className="w-full px-4 py-3 sm:px-4 sm:py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base sm:text-base"
                        min="1"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-secondary mb-2 font-heading">
                        Price (KES)
                      </label>
                      <input
                        type="number"
                        placeholder="Price"
                        value={item.price}
                        onChange={(e) => handleItemChange(index, 'price', parseFloat(e.target.value) || 0)}
                        className="w-full px-4 py-3 sm:px-4 sm:py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base sm:text-base"
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-secondary mb-2 font-heading">
                        Total
                      </label>
                      <div className="px-4 py-3 sm:px-4 sm:py-3 bg-white rounded-lg border border-border text-right font-semibold text-secondary text-base sm:text-base">
                        {(item.quantity * item.price).toLocaleString()}
                      </div>
                    </div>
                    <div className="flex-none">
                      <label className="block text-xs font-semibold text-secondary mb-2 font-heading opacity-0">
                        Del
                      </label>
                      <button
                        type="button"
                        onClick={() => removeItem(index)}
                        className="px-3 py-2 sm:px-4 sm:py-3 text-red-500 hover:bg-red-50 rounded-lg transition-all text-sm border border-border"
                        disabled={formData.items.length === 1}
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-secondary mb-2 font-heading">
              Additional Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-3 sm:px-4 sm:py-3 text-base sm:text-base rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              placeholder="Add any additional notes or terms..."
            />
          </div>

          {/* Total */}
          <div className="flex items-center justify-between p-4 sm:p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border-2 border-primary/20">
            <span className="text-lg sm:text-2xl font-heading font-bold text-secondary">Total Amount:</span>
            <span className="text-2xl sm:text-4xl font-heading font-bold text-primary">
              KES {calculateTotal().toLocaleString()}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-secondary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-heading font-semibold text-base sm:text-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Generate Invoice
          </button>
        </form>
      </div>
    </div>
  )
}
