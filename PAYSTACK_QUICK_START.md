# 🚀 Paystack Quick Start (3 Minutes)

Perfect for Nigerian NGOs and African donors!

## ⚡ 3 Quick Steps

### Step 1: Get Public Key
1. Go to [Paystack.com](https://paystack.com)
2. Sign up or login
3. Dashboard → **Settings** → **Developer**
4. Copy **Test Public Key** (starts with `pk_test_`)

### Step 2: Add to `.env`
Edit `.env` file:
```env
VITE_PAYSTACK_PUBLIC_KEY=pk_test_YOUR_KEY_HERE
```

Replace with your actual key!

### Step 3: Test & Go!
```bash
npm run dev
```

Click **Donate Now** → Enter details → Use test card → Done! ✓

---

## 🧪 Test Card
```
Card: 4111 1111 1111 1111
CVV: 123
Date: Any future date (e.g., 12/26)
```

---

## 💡 Why Paystack?

✓ Built for Africa (Nigeria, Kenya, Ghana, etc)  
✓ Multiple payment methods (cards, mobile money, bank transfer)  
✓ Fast settlement (24 hours)  
✓ Low fees (1.5% - 2.9%)  
✓ Excellent support  

---

## 🔄 Go Live

When ready for real money:
1. Dashboard → **Settings** → **Developer**
2. Switch to **Live Keys**
3. Copy **Live Public Key** (`pk_live_...`)
4. Update `.env` with live key
5. **Done!** Real payments now work

---

## 📊 Monitor Payments

Dashboard → **Transactions** shows all donations in real-time

---

## 🔗 Full Setup Guide

See [PAYSTACK_SETUP_GUIDE.md](PAYSTACK_SETUP_GUIDE.md) for:
- Detailed setup instructions
- Bank account verification
- Live mode switching
- Support for NGN (Naira)
- Webhook setup
- FAQ & troubleshooting

---

**Your website now accepts Paystack payments! 🎉**
