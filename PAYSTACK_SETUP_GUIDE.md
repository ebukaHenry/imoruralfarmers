# 💳 Paystack Integration Setup (Nigeria)

Paystack is the fastest and most reliable payment processor for Africa. Perfect for NgO donations in Nigeria!

## 🔑 Step 1: Create Paystack Account

1. Go to [Paystack.com](https://paystack.com)
2. Click **Get Started** and sign up
3. Verify your email
4. Complete your organization details
5. You'll get test and live keys

## 📋 Step 2: Get Your Public Key

1. Login to [Paystack Dashboard](https://dashboard.paystack.com)
2. Go to **Settings** → **Developer**
3. You'll see two sections:
   - **Test Keys** (for testing)
   - **Live Keys** (for real payments)

4. Copy your **Public Key** from Test section (looks like: `pk_test_abc123...`)

## ✏️ Step 3: Update `.env` File

Edit `.env` in your project root:

```env
VITE_PAYSTACK_PUBLIC_KEY=pk_test_YOUR_PUBLIC_KEY_HERE
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

Replace `pk_test_YOUR_PUBLIC_KEY_HERE` with your actual Test Public Key

Example:
```env
VITE_PAYSTACK_PUBLIC_KEY=pk_test_a1b2c3d4e5f6g7h8i9j0
```

## 🧪 Step 4: Test Donations

### Test Cards (Sandbox Mode)

Use these test card numbers:

| Card Type | Number | CVV | Date |
|-----------|--------|-----|------|
| Visa (Success) | `4111 1111 1111 1111` | `123` | Any future |
| Mastercard (Success) | `5555 5555 5555 4444` | `123` | Any future |
| Verve (Success) | `5061 0212 3456 7890` | `123` | Any future |
| Visa (3D Secure) | `4012 8888 8888 1881` | `123` | Any future |

### Run and Test

```bash
npm run dev
```

Then:
1. Click **Donate Now** button
2. Enter test details:
   - Name: `John Doe`
   - Email: `test@example.com`
   - Amount: `$50`
3. Click **Pay**
4. Use test card from table above
5. Click **Pay** and complete
6. You'll see success message ✓

## 📊 Monitor Test Donations

View transactions:
1. Login to [Paystack Dashboard](https://dashboard.paystack.com)
2. Go to **Transactions**
3. You'll see all test payments here

## ✅ Step 5: Get Live Keys (Production)

When ready for real donations:

1. In Paystack Dashboard, go to **Settings** → **Developer**
2. Switch to **Live Keys** tab
3. Copy your **Live Public Key** (starts with `pk_live_`)
4. Update `.env`:
   ```env
   VITE_PAYSTACK_PUBLIC_KEY=pk_live_YOUR_LIVE_KEY
   ```

## 🔄 Live Payment Details

Before going live, you need:

✓ **Bank Account** - Verify your bank account in Paystack  
✓ **Business Info** - Complete your organization details  
✓ **Tax ID** (if applicable)  
✓ **Payment Route** - Control where donations go  

### Setup Bank Account

1. Paystack Dashboard → **Settings** → **Payment Route**
2. Add your NGO bank account
3. Verify with deposits (Paystack will deposit small amounts)
4. Confirm the amounts to verify

## 💰 Paystack Rates (Nigeria)

- **Standard**: 1.5% + ₦6 (NGN) or 2.9% + $0.20 (USD)
- **Enterprise**: Custom rates available
- Check dashboard for exact rates

## 📝 Frequently Asked Questions

**Q: What currencies does Paystack support?**
- NGN (Nigerian Naira) is primary
- USD, GBP, EUR also supported
- Automatic conversion available

**Q: Can I receive payments internationally?**
- Yes, Paystack works for donors worldwide
- Payments settle in your preferred currency

**Q: How long until I see payments?**
- Test: Immediate (test account)
- Live: Usually 24 hours to your bank account

**Q: What payment methods can donors use?**
- Credit/Debit Cards (Visa, Mastercard, Verve)
- Mobile Money (MTN, Airtel, Vodafone - Africa)
- Bank Transfers (all banks)
- USSD codes capable

**Q: Is there a minimum or maximum donation?**
- Minimum: ₦100 (NGN) or minimum currency equivalent
- Maximum: Depends on card/account limits

**Q: Can I customize the payment form?**
- Yes, Paystack allows custom branding
- Check Dashboard → **Settings** → **Appearance**

**Q: What about webhooks for notifications?**
- Paystack can notify you of payments
- Setup in Dashboard → **API Logs & Webhooks**
- Notifications sent to your email automatically

## 🔒 Security

✓ **PCI Compliant** - Meets all security standards  
✓ **SSL Encrypted** - All data encrypted in transit  
✓ **No Card Storage** - Cards never stored on your server  
✓ **Fraud Protection** - Built-in fraud detection  

## 📚 Useful Links

- [Paystack Dashboard](https://dashboard.paystack.com)
- [API Documentation](https://paystack.com/docs)
- [Paystack Help Center](https://support.paystack.com)
- [Developer Community](https://developer.paystack.co)

## ✅ Pre-Launch Checklist

- [ ] Create Paystack account
- [ ] Get Test Public Key
- [ ] Update `.env` with Test key
- [ ] Test donation with test cards
- [ ] Verify payment in Dashboard
- [ ] Setup bank account verification
- [ ] Get Live Public Key
- [ ] Update `.env` with Live key
- [ ] Test live donation (small amount)
- [ ] Monitor first real payments
- [ ] Promote donation link

---

**Your website now accepts payments via Paystack! 🎉**

For more details, visit [Paystack Developer Docs](https://paystack.com/docs).
