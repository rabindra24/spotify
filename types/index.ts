export interface PremiumPlansTypes {
    planType: string;
    initialPrice: string;
    monthlyPrice: string;
    features: {
      accounts: string;
      cancelAnytime: boolean;
      explicitContentControl ?: boolean,
      paymentOptions: string;
    };
    color: string;
  }
  