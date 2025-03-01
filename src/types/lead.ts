// import { z as zod } from "zod";

export interface AllLeads {
  page: number;
  pages: number;
  count: number;
  leads: Lead[];
}

export const DefaultLead: Lead = {
  _id: undefined,
  lead_id: 0,
  lead_campaign: 0,
  lead_code: "",

  lead_owner_firstname: "",
  lead_owner_lastname: "",
  lead_owner_phone: "",
  lead_owner_email: "",

  lead_owshp_tmln: 0,
  lead_closn_tmln: 0,
  lead_cond_scale: 0,
  lead_motivation: 0,

  lead_sell_reason: 0,
  lead_occupancy: 0,
  lead_listing: 0,
  lead_market_val: 0,
  lead_ask_price: 0,
  lead_mortgage: 0,

  lead_prop_address: "",
  lead_info: "",
};

export interface lead_prop_address_full {
  city?: string;
  state?: string;
  zipCode?: string;
  lat?: number;
  lng?: number;
}

export interface Lead {
  readonly _id?: number;
  readonly lead_id: number;
  readonly lead_campaign?: number;
  readonly lead_code?: string;

  readonly lead_owner_firstname?: string;
  readonly lead_owner_lastname?: string;
  readonly lead_owner_phone?: string;
  readonly lead_owner_email?: string;

  readonly lead_owshp_tmln?: number;
  readonly lead_closn_tmln?: number;
  readonly lead_cond_scale?: number;
  readonly lead_motivation?: number;

  readonly lead_sell_reason?: number;
  readonly lead_occupancy?: number;
  readonly lead_listing?: number;
  readonly lead_market_val?: number;
  readonly lead_ask_price?: number;
  readonly lead_mortgage?: number;

  readonly lead_prop_address?: string;
  readonly lead_prop_address_full?: lead_prop_address_full;

  readonly building_bedrooms?: number;
  readonly building_bathrooms?: number;

  readonly lead_info?: string;
  readonly createdAt?: Date;

  readonly tags?: string[];
}

export const MortgageOptions = ["No", "Yes", "Refused to Disclose"];
export const ListingOptions = ["Not listed", "With a realtor", "By the owner"];
export const OccupancyOptions = [
  "Owner occupied",
  "Rented annually",
  "Rented month to month",
  "Vacant",
];

export const SellReasonOptions = [
  "Downsize",
  "Upgrade",
  "Relocate",
  "Tired of being landlord",
  "Getting old",
  "Retirement",
  "Investing in another property",
  "Liquidate",
  "Can't afford paying taxes",
  "Do not need it",
  "Buy new property",
  "Money factor",
];

export const ClosingTimeline = [
  "Asap",
  "AnyTime",
  "30 Days",
  "60 Days",
  "90 Days",
  "4 Months",
  "5 Months",
  "6 Months",
];

export const NumbersArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];

// export const zodLead = zod.object({
//   lead_id: zod.number(),
//   lead_campaign: zod.number().optional(),
//   lead_code: zod.string().optional(),

//   lead_owner_firstname: zod.string().optional(),
//   lead_owner_lastname: zod.string().optional(),
//   lead_owner_phone: zod.string().optional(),
//   lead_owner_email: zod.string().email().optional(),

//   lead_owshp_tmln: zod.number().optional(),
//   lead_closn_tmln: zod.number().optional(),
//   lead_cond_scale: zod.number().optional(),
//   lead_motivation: zod.number().optional(),

//   lead_sell_reason: zod.number().optional(),
//   lead_occupancy: zod.number().optional(),
//   lead_listing: zod.number().optional(),
//   lead_market_val: zod.number().optional(),
//   lead_ask_price: zod.number().optional(),
//   lead_mortgage: zod.number().optional(),

//   building_bedrooms: zod.number().optional(),
//   building_bathrooms: zod.number().optional(),

//   lead_prop_address: zod.string().optional(),
//   lead_info: zod.string().optional(),
// });
