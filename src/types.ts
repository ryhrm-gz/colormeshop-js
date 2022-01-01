export type ColormeError = {
  error: {
    status: number;
    error?: any;
    message: string;
  };
};

export type ColormeClient = {
  accessToken: string;
};

export type ColormeShopResponse = {
  shop: {
    id: string;
    state: "enabled" | "suspended" | "unsigned";
    domain_plan: "cmsp_sub_domain" | "own_domain" | "own_sub_domain";
    contract_plan:
      | "unknown"
      | "economy"
      | "small"
      | "regular"
      | "lolipop"
      | "heteml"
      | "platinum"
      | "goope"
      | "large"
      | "free";
    contract_start_date: number;
    contract_end_date: number;
    contract_term: number | null;
    last_login_date: number;
    setup_date: number;
    make_date: number;
    url: string;
    open_state: "opened" | "closed" | "prepare" | "paused";
    mobile_open_state: "opened" | "closed" | "prepare" | "paused";
    login_id: string;
    name1: string;
    name2: string;
    name1_kana: string;
    name2_kana: string;
    hojin: string | null;
    hojin_kana: string | null;
    user_mail: string;
    tel: string;
    fax: string | null;
    postal: string;
    pref_id: number;
    pref_name: string;
    address1: string;
    address2: string;
    title: string;
    title_short: string;
    shop_mail_1: string;
    shop_mail_2: string;
    tax_type: "excluded" | "included";
    tax: number;
    tax_rounding_method: "round_off" | "round_down" | "round_up";
    reduce_tax_rate: number;
    shop_logo_url: string | null;
  };
};

export type ColormeGetSalesRequest = {
  ids?: string;
  after?: string;
  before?: string;
  make_date_min?: string;
  make_date_max?: string;
  update_date_min?: string;
  update_date_max?: string;
  customer_ids?: string;
  customer_name?: string;
  customer_furigana?: string;
  customer_mail?: string;
  accepted_mail_state?: "not_yet" | "sent" | "pass";
  paid_mail_state?: "not_yet" | "sent" | "pass";
  delivered_mail_state?: "not_yet" | "sent" | "pass";
  mobile?: boolean;
  paid?: boolean;
  delivered?: boolean;
  canceled?: boolean;
  payment_ids?: string;
  fields?: string;
  limit?: number;
  offset?: number;
};

export type ColormeGetSalesResponse = {
  id: number;
  account_id: string;
};
