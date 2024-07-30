import VisaDefault from "@/assets/20 - CardWallet/visa.svg";
import VisaOutline from "@/assets/20 - CardWallet/visa-outline.svg";
import VisaCard from "@/assets/20 - CardWallet/visa-card.svg";

import MastercardDefault from "@/assets/20 - CardWallet/mastercard.svg";
import MastercardOutline from "@/assets/20 - CardWallet/mastercard-outline.svg";
import MastercardCard from "@/assets/20 - CardWallet/mastercard-card.svg";

import DiscoverDefault from "@/assets/20 - CardWallet/discover.svg";
import DiscoverOutline from "@/assets/20 - CardWallet/discover-outline.svg";
import DiscoverCard from "@/assets/20 - CardWallet/discover-card.svg";

import AmexDefault from "@/assets/20 - CardWallet/amex.svg";
import AmexOutline from "@/assets/20 - CardWallet/amex-outline.svg";
import AmexCard from "@/assets/20 - CardWallet/amex-card.svg";

export const detectCard = (cardNumber: string) => {
  if (/^5[1-5]/.test(cardNumber)) {
    return "Mastercard";
  }
  if (/^4/.test(cardNumber)) {
    return "Visa";
  }
  if (/^3[47]/.test(cardNumber)) {
    return "American Express";
  }
  if (/^6(011|221|44|5)/.test(cardNumber)) {
    return "Discover";
  }
  return "unknown";
};

export const CardImage = {
  Mastercard: {
    default: MastercardDefault,
    outline: MastercardOutline,
    card: MastercardCard,
  },
  Visa: {
    default: VisaDefault,
    outline: VisaOutline,
    card: VisaCard,
  },
  Discover: {
    default: DiscoverDefault,
    outline: DiscoverOutline,
    card: DiscoverCard,
  },
  "American Express": {
    default: AmexDefault,
    outline: AmexOutline,
    card: AmexCard,
  },
  unknown: { default: "", outline: "", card: "" },
};

export type CardImageType = keyof typeof CardImage;
export const CardImageKeys = Object.keys(CardImage);
