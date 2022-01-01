export type ColormeError = {
  status: number;
  error?: any;
  message: string;
};

export type ColormeClient = {
  /** アクセストークン */
  accessToken: string;
};

export type ColormeMeta = {
  /** トータルの件数 */
  total?: number;
  /** 実効limit */
  limit?: number;
  /** 実効offset */
  offset?: number;
};

export type ColormeShopResponse = {
  shop: {
    /** ショップアカウントID */
    id?: string;
    /** アカウント状態 */
    state?: "enabled" | "suspended" | "unsigned";
    /** ドメインプラン */
    domain_plan?: "cmsp_sub_domain" | "own_domain" | "own_sub_domain";
    /** 契約プラン */
    contract_plan?:
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
    /** 契約開始日時 */
    contract_start_date?: number;
    /** 契約終了日時 */
    contract_end_date?: number;
    /** 契約期間 */
    contract_term?: number | null;
    /** 最終ログイン日時 */
    last_login_date?: number;
    /** 申し込み完了日時 */
    setup_date?: number;
    /** アカウント作成日時 */
    make_date?: number;
    /** ショップURL */
    url?: string;
    /** 開店状態 */
    open_state?: "opened" | "closed" | "prepare" | "paused";
    /** モバイルショップ開店状態 */
    mobile_open_state?: "opened" | "closed" | "prepare" | "paused";
    /** ログインID */
    login_id?: string;
    /** 登録者氏名（姓） */
    name1?: string;
    /** 登録者氏名（名） */
    name2?: string;
    /** 登録者氏名カナ（姓） */
    name1_kana?: string;
    /** 登録者氏名カナ（名） */
    name2_kana?: string;
    /** 法人名 */
    hojin?: string | null;
    /** 法人名カナ */
    hojin_kana?: string | null;
    /** 登録者メールアドレス */
    user_mail?: string;
    /** 登録者電話番号 */
    tel?: string;
    /** 登録者FAX番号 */
    fax?: string | null;
    /** 郵便番号 */
    postal?: string;
    /** 都道府県ID */
    pref_id?: number;
    /** 都道府県名 */
    pref_name?: string;
    /** 住所1 */
    address1?: string;
    /** 住所2 */
    address2?: string;
    /** ショップ名 */
    title?: string;
    /** メールタイトル用ショップ名 */
    title_short?: string;
    /** 管理者メールアドレス */
    shop_mail_1?: string;
    /** 管理者携帯メールアドレス */
    shop_mail_2?: string | null;
    /** 消費税の内税・外税設定 */
    tax_type?: "excluded" | "included";
    /** 消費税率 */
    tax?: number;
    /** 消費税の切り捨て、切り上げ設定 */
    tax_rounding_method?: "round_off" | "round_down" | "round_up";
    /** 軽減税率 */
    reduce_tax_rate?: number;
    /** ショップロゴ画像のURL */
    shop_logo_url?: string | null;
  };
};

export type ColormeGetSalesParams = {
  /** 受注IDで検索。カンマ区切りで複数指定可能 */
  ids?: string;
  /**
   * 指定日時以降の受注から検索。
   *
   * `after` 未指定時は `before` の指定日時の7日前の0時、
   *
   * `before` 未指定時は現在から7日前の0時がデフォルト値となります。
   */
  after?: string;
  /** 指定日時以前の受注から検索 */
  before?: string;
  /** `after`と同義 */
  make_date_min?: string;
  /** `before`と同義 */
  make_date_max?: string;
  /** 指定日時以降に更新された受注から検索 */
  update_date_min?: string;
  /** 指定日時以前に更新された受注から検索 */
  update_date_max?: string;
  /** 購入した顧客IDで検索。カンマ区切りにすることで複数検索が可能 */
  customer_ids?: string;
  /** 購入した顧客名で部分一致検索 */
  customer_name?: string;
  /** 購入した顧客フリガナがで部分一致検索 */
  customer_furigana?: string;
  /** 購入した顧客メールアドレスで部分一致検索 */
  customer_mail?: string;
  /**
   * 受注メールの送信状態で検索
   *
   * - `not_yet`: 未送信
   * - `sent`: 送信済み
   * - `pass`: 送信しない
   */
  accepted_mail_state?: "not_yet" | "sent" | "pass";
  /**
   * 入金メールの送信状態で検索
   *
   * - `not_yet`: 未送信
   * - `sent`: 送信済み
   * - `pass`: 送信しない
   */
  paid_mail_state?: "not_yet" | "sent" | "pass";
  /**
   * 配送メールの送信状態で検索
   *
   * - `not_yet`: 未送信
   * - `sent`: 送信済み
   * - `pass`: 送信しない
   */
  delivered_mail_state?: "not_yet" | "sent" | "pass";
  /** `true`なら携帯からの受注のみ取得 */
  mobile?: boolean;
  /** `true`なら入金済みの受注のみ取得 */
  paid?: boolean;
  /** `true`なら配送済みの受注のみ取得 */
  delivered?: boolean;
  /** `true`ならキャンセル済みの受注のみ取得 */
  canceled?: boolean;
  /** 使用された決済のIDで検索。カンマ区切りで複数指定可能 */
  payment_ids?: string;
  /** レスポンスJSONのキーをカンマ区切りで指定 */
  fields?: string;
  /** レスポンスの件数を指定。指定がない場合は10。最大100 */
  limit?: number;
  /** 指定した数値+1件目以降のデータを返す */
  offset?: number;
};

export type ColormeCustomerResponse = {
  /** 顧客ID */
  id?: number;
  /** ショップアカウントID */
  account_id?: string;
  /** 顧客の名前 */
  name?: string | null;
  /** 名前のフリガナ */
  furigana?: string | null;
  /** 法人名 */
  hojin?: string | null;
  /** 部署名 */
  busho?: string | null;
  /** 性別 */
  sex?: ("male" | "female") | null;
  /** 誕生日 */
  birthday?: string | null;
  /** 郵便番号 */
  postal?: string | null;
  /** 都道府県の通し番号。北海道が1、沖縄が47 */
  pref_id?: number | null;
  /** 都道府県名 */
  pref_name?: string | null;
  /** 住所1 */
  address1?: string | null;
  /** 住所2 */
  address2?: string | null;
  /** メールアドレス */
  mail?: string | null;
  /** 電話番号 */
  tel?: string | null;
  /** FAX番号 */
  fax?: string | null;
  /** 携帯電話番号 */
  tel_mobile?: string | null;
  /** 備考 */
  other?: string | null;
  /** 保有ポイント数 */
  points?: number;
  /** 会員登録済みであるか否か */
  member?: boolean;
  /** これまでの購入回数 */
  sales_count?: number;
  /** メルマガ受信可否 */
  receive_mail_magazine?: boolean;
  /** フリー項目1の入力内容 */
  answer_free_form1?: string | null;
  /** フリー項目2の入力内容 */
  answer_free_form2?: string | null;
  /** フリー項目3の入力内容 */
  answer_free_form3?: string | null;
};

export type ColormeDetailResponse = {
  /** 受注明細ID */
  id?: number;
  /** 売上ID */
  sale_id?: number;
  /** ショップアカウントID */
  account_id?: string;
  /** 商品ID */
  product_id?: number;
  /** お届け先ID */
  sale_delivery_id?: number;
  /** オプション1の値(最新の商品情報) */
  option1_value?: string | null;
  /** オプション2の値(最新の商品情報) */
  option2_value?: string | null;
  /** オプション1の値の選択肢中の位置 */
  option1_index?: number | null;
  /** オプション2の値の選択肢中の位置 */
  option2_index?: number | null;
  /** 型番 */
  product_model_number?: string;
  /** 商品名(最新の商品情報) */
  product_name?: string;
  /** 商品名とオプション名(注文時の商品情報) */
  pristine_product_full_name?: string;
  /** 商品原価 */
  product_cost?: number | null;
  /** 商品画像URL */
  product_image_url?: string | null;
  /** サムネイル用商品画像URL */
  product_thumbnail_image_url?: string | null;
  /** モバイル用商品画像URL */
  product_mobile_image_url?: string | null;
  /** 商品販売価格 */
  price?: number;
  /** 税込み商品価格 */
  price_with_tax?: number;
  /** 商品点数 */
  product_num?: number;
  /** 単位 */
  unit?: string | null;
  /** 商品小計。販売価格と点数の積 */
  subtotal_price?: number;
};

export type ColormeSaleDeliveries = {
  /** お届け先ID */
  id?: number;
  /** ショップアカウントID */
  account_id?: string;
  /** 売上ID */
  sale_id?: number;
  /** 使用された配送方法ID */
  delivery_id?: number;
  /** この配送に含まれる受注明細IDの配列 */
  detail_ids?: number[];
  /** 宛名 */
  name?: string;
  /** 宛名のフリガナ */
  furigana?: string;
  /** 郵便番号 */
  postal?: string;
  /** 都道府県の通し番号。北海道が1、沖縄が47 */
  pref_id?: number;
  /** 都道府県名 */
  pref_name?: string;
  /** 住所1 */
  address1?: string | null;
  /** 住所2 */
  address2?: string | null;
  /** 電話番号 */
  tel?: string | null;
  /** 配送希望日 */
  preferred_date?: string | null;
  /** 配送希望時間帯 */
  preferred_period?: string | null;
  /** 配送伝票番号 */
  slip_number?: string | null;
  /** 熨斗の文言 */
  noshi_text?: string | null;
  /** 熨斗の料金 */
  noshi_charge?: number | null;
  /** メッセージカードの表示名 */
  card_name?: string | null;
  /** メッセージカードのテキスト */
  card_text?: string | null;
  /** メッセージカードの料金 */
  card_charge?: number | null;
  /** ラッピングの表示名 */
  wrapping_name?: string | null;
  /** ラッピングの料金 */
  wrapping_charge?: number | null;
  /** 配送料 */
  delivery_charge?: number;
  /** 配送料・手数料の小計 */
  total_charge?: number;
  /** 配送状況確認URL */
  tracking_url?: string | null;
  /** 備考 */
  memo?: string | null;
  /** 発送済みであるか否か */
  delivered?: boolean;
};

export type ColormeSaleResponse = {
  /** 売上ID */
  id?: number;
  /** ショップアカウントID */
  account_id?: string;
  /** 受注日時 */
  make_date?: number;
  /** 受注更新日時 */
  update_date?: number;
  /** 備考 */
  memo?: string | null;
  /** 使用された決済方法ID */
  payment_id?: number;
  /** モバイルからの注文であるか否か */
  mobile?: boolean;
  /** 入金済みであるか否か */
  paid?: boolean;
  /** 発送済みである否か */
  delivered?: boolean;
  /** キャンセル済みであるか否か */
  canceled?: boolean;
  /**
   * 受注メールの送信状態
   *
   * - `not_yet`: 未送信
   * - `sent`: 送信済み
   * - `pass`: 送信しない
   */
  accepted_mail_state?: "not_yet" | "sent" | "pass";
  /**
   * 入金メールの送信状態
   *
   * - `not_yet`: 未送信
   * - `sent`: 送信済み
   * - `pass`: 送信しない
   */
  paid_mail_state?: "not_yet" | "sent" | "pass";
  /**
   * 発送メールの送信状態
   *
   * - `not_yet`: 未送信
   * - `sent`: 送信済み
   * - `pass`: 送信しない
   */
  delivered_mail_state?: "not_yet" | "sent" | "pass";
  /** 受注メールの送信日時 */
  accepted_mail_sent_date?: number | null;
  /** 入金メールの送信日時 */
  paid_mail_sent_date?: number | null;
  /** 発送メールの送信日時 */
  delivered_mail_sent_date?: number | null;
  /**
   * ショップポイント付与状態
   *
   * - `assumed`: 仮付与
   * - `fixed`: 確定済み
   * - `canceled`: キャンセル済み
   */
  point_state?: "assumed" | "fixed" | "canceled";
  /**
   * GMOポイント付与状態
   *
   * - `assumed`: 仮付与
   * - `fixed`: 確定済み
   * - `canceled`: キャンセル済み
   */
  gmo_point_state?: ("assumed" | "fixed" | "canceled") | null;
  /**
   * Yahooポイント付与状態
   *
   * - `assumed`: 仮付与
   * - `fixed`: 確定済み
   * - `canceled`: キャンセル済み
   */
  yahoo_point_state?: ("assumed" | "fixed" | "canceled") | null;
  /** 商品の合計金額 */
  product_total_price?: number;
  /** 配送料 */
  delivery_total_charge?: number;
  /** 決済手数料 */
  fee?: number;
  /** 商品合計金額に対する消費税 */
  tax?: number;
  /** 熨斗料金 */
  noshi_total_charge?: number;
  /** メッセージカード料金 */
  card_total_charge?: number;
  /** ラッピング料金 */
  wrapping_total_charge?: number;
  /** ショップポイントによる割引額 */
  point_discount?: number;
  /** GMOポイントによる割引額 */
  gmo_point_discount?: number;
  /** その他、クーポン等による割引額 */
  other_discount?: number;
  /** その他割引の名称 */
  other_discount_name?: string;
  /** 注文総額 */
  total_price?: number;
  /** 付与されたショップポイント数 */
  granted_points?: number;
  /** 使用されたショップポイント数 */
  use_points?: number;
  /** 付与されたGMOポイント数 */
  granted_gmo_points?: number;
  /** 使用されたGMOポイント数 */
  use_gmo_points?: number;
  /** 付与されたYahooポイント数 */
  granted_yahoo_points?: number;
  /** 使用されたYahooポイント数 */
  use_yahoo_points?: number;
  /**
   * 外部システムで発行された決済識別番号
   *
   * 該当受注の決済が、楽天ペイ（オンライン決済）、LINE Pay、PayPal Commerce Platform、Amazon Pay、Amazon Pay V2のいずれかである場合、その決済の決済識別番号を返します。
   * それ以外の決済に関しては空文字列を返します。
   */
  external_order_id?: string;
  customer?: ColormeCustomerResponse;
  detail?: ColormeDetailResponse[];
  sale_deliveries?: ColormeSaleDeliveries[];
};
