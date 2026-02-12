import { BanknoteIcon as Bank, CreditCard, Smartphone, Globe } from "lucide-react"

// Payment methods for registration
export const paymentMethods = [
  {
    id: 1,
    name: "Bank Transfer",
    icon: Bank,
    instructions: "Transfer the registration fee to the following bank account:",
    details: {
      bankName: "City Union Bank",
      accountName: "M MOHAMED RAFEE ",
      accountNumber: "316001001788510",
      ifscCode: "CIUB0000316",
      branch: "MELVISHARAM",
      reference: "Please use your Paper ID/ Screenshot (Payment ID) as reference",
    },
  },

  {
    id: 2,
    name: "UPI/Mobile Payment",
    icon: Smartphone,
    instructions: "Scan the QR code or use the UPI ID for a quick payment:",
    details: {
      ReceiverName: "mohammed rafee",
      Upi_id: "mdrafee@okicici",
      qrCode: "/payment-qr-rafeee.jpeg",
      supportedApps: "Google Pay, PhonePe, Paytm, BHIM UPI",
    },
  },
]

