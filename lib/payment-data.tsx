import { BanknoteIcon as Bank, CreditCard, Smartphone, Globe } from "lucide-react"

// Payment methods for registration
export const paymentMethods = [
  {
    id: 1,
    name: "Bank Transfer",
    icon: Bank,
    instructions: "Transfer the registration fee to the following bank account:",
    details: {
      bankName: "Indian Bank",
      accountName: "INAMUL HUSSAIN",
      accountNumber: "805108579",
      ifscCode: "IDIB000V067",
      branch: "VELLORE BAZAAR",
      reference: "Please use your Paper ID/ Screenshot (Payment ID) as reference",
    },
  },

  {
    id: 2,
    name: "UPI/Mobile Payment",
    icon: Smartphone,
    instructions: "Scan the QR code or use the UPI ID for a quick payment:",
    details: {
      ReceiverName: "Inamul Hussain",
      Upi_id: "inamulhasan.rz@okicici",
      qrCode: "/payment-qr.jpg",
      supportedApps: "Google Pay, PhonePe, Paytm, BHIM UPI",
    },
  },
]

