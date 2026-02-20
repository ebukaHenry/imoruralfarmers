import React, { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'

export default function DonationModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState(50) // in USD
  const [customAmount, setCustomAmount] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Exchange rate (USD to NGN) - Update this as needed
  const USD_TO_NGN_RATE = 1550 // 1 USD = ~1550 NGN (update based on current rate)

  const presetAmounts = [10, 25, 50, 100, 250, 500]

  // Load Paystack SDK only once
  useEffect(() => {
    if (!window.PaystackPop) {
      const script = document.createElement('script')
      script.src = 'https://js.paystack.co/v1/inline.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  const handlePaystackPayment = async () => {
    // Validate inputs
    if (!name.trim()) {
      setError('Please enter your name')
      return
    }

    if (!email.trim()) {
      setError('Please enter your email')
      return
    }

    const finalAmount = customAmount ? parseFloat(customAmount) : amount

    if (!finalAmount || finalAmount < 1) {
      setError('Please enter a valid amount (minimum $1)')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Get Paystack public key from environment
      const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY

      if (!publicKey) {
        setError('Payment configuration error. Please contact support.')
        setLoading(false)
        return
      }

      // Convert USD to NGN
      const amountInNGN = Math.round(finalAmount * USD_TO_NGN_RATE)

      // Initialize Paystack payment
      const handler = window.PaystackPop.setup({
        key: publicKey,
        email: email,
        amount: amountInNGN * 100, // Paystack expects amount in kobo (multiply by 100)
        currency: 'NGN',
        ref: `RURAL-FARMERS-${Date.now()}`, // Generate unique reference
        onClose: () => {
          setError('Payment window closed.')
          setLoading(false)
        },
        onSuccess: (response) => {
          setError('')
          alert(`Thank you for your donation of $${finalAmount} (₦${amountInNGN})! Your support helps us empower farmers.`)
          setLoading(false)
          onClose()
          resetForm()
        },
      })

      handler.openIframe()
    } catch (err) {
      setError('An error occurred during payment. Please try again.')
      console.error(err)
      setLoading(false)
    }
  }

  const handleAmountSelect = (value) => {
    setAmount(value)
    setCustomAmount('')
    setError('')
  }

  const handleCustomAmount = (e) => {
    const value = e.target.value
    setCustomAmount(value)
    setError('')
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setAmount(50)
    setCustomAmount('')
  }

  if (!isOpen) return null

  const finalAmountUSD = customAmount ? parseFloat(customAmount) : amount
  const finalAmountNGN = Math.round(finalAmountUSD * USD_TO_NGN_RATE)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-center p-6 border-b bg-white">
          <h2 className="text-2xl font-bold text-primary">Make a Donation</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            {/* Preset Amounts */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Amount (USD)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleAmountSelect(preset)}
                    className={`py-2 px-3 rounded-lg font-semibold transition ${
                      amount === preset && !customAmount
                        ? 'bg-primary text-white'
                        : 'bg-light text-primary border border-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Custom Amount (USD)
              </label>
              <div className="flex items-center">
                <span className="text-lg font-semibold text-gray-700">$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmount}
                  placeholder="Enter custom amount"
                  min="1"
                  step="0.01"
                  className="flex-1 ml-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Display Total in Both Currencies */}
            <div className="bg-light p-4 rounded-lg space-y-2">
              <div>
                <p className="text-sm text-gray-600">Amount (USD):</p>
                <p className="text-2xl font-bold text-primary">${finalAmountUSD.toFixed(2)}</p>
              </div>
              <div className="border-t pt-2">
                <p className="text-sm text-gray-600">Amount (NGN) - Charged to your account:</p>
                <p className="text-2xl font-bold text-secondary">₦{finalAmountNGN.toLocaleString()}</p>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
                {error}
              </div>
            )}

            {/* Pay Button */}
            <button
              type="button"
              onClick={handlePaystackPayment}
              disabled={loading}
              className={`w-full bg-primary text-white font-bold py-3 px-4 rounded-lg transition ${
                loading
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-secondary cursor-pointer'
              }`}
            >
              {loading ? 'Processing...' : `Pay ₦${finalAmountNGN.toLocaleString()}`}
            </button>

            {/* Note */}
            <p className="text-xs text-gray-500 text-center">
              💳 Your payment will be securely processed by Paystack in Nigerian Naira
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
