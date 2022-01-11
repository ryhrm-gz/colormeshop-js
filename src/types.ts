export type ColormeError = {
  status?: number;
  error?: any;
  message: string;
};

export type ColormeClient = {
  /** アクセストークン */
  accessToken: string;
};

/*

Response

*/
export type ColormeMeta = {
  /** トータルの件数 */
  total?: number;
  /** 実効limit */
  limit?: number;
  /** 実効offset */
  offset?: number;
};

export type ColormeShopResponse = {
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

export type ColormeSalesStatResponse = {
  sales_stat: {
    /** ショップアカウントID */
    account_id?: string;
    /** 集計対象とする売上の作成日 */
    date?: number;
    /** 合計売上金額 */
    amount_today?: number;
    /** 合計件数 */
    count_today?: number;
    /** `date`を含む過去7日間の合計売上金額 */
    amount_last_7days?: number;
    /** `date`を含む過去7日間の合計件数 */
    count_last_7days?: number;
    /** `date`が含まれる月の合計売上金額 */
    amount_this_month?: number;
    /** `date`が含まれる月の合計件数 */
    count_this_month?: number;
  };
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

export type ColormeSaleDeliveryResponse = {
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
  sale_deliveries?: ColormeSaleDeliveryResponse[];
};

export type ColormeProductResponse = {
  /** ショップアカウントID */
  account_id?: string;
  /** 商品ID */
  id?: number;
  /** 商品名 */
  name?: string;
  /** 在庫数 */
  stocks?: number | null;
  /** 在庫管理するか否か */
  stock_managed?: boolean;
  /** 残りわずかとなる在庫数 */
  few_num?: number | null;
  /** 型番 */
  model_number?: string | null;
  category?: {
    /** 大カテゴリーID */
    id_big?: number;
    /** 小カテゴリーID */
    id_small?: number;
  } | null;
  /** 商品が属するグループのIDの配列 */
  group_ids?: number[];
  /**
   * 掲載設定
   *
   *  - `showing`: 掲載状態
   *  - `hidden`: 非掲載状態
   *  - `showing_for_members`: 会員にのみ掲載
   *  - `sale_for_members`: 掲載状態だが購入は会員のみ可能
   */
  display_state?:
    | "showing"
    | "hidden"
    | "showing_for_members"
    | "sale_for_members";
  /** 販売価格 */
  sales_price?: number | null;
  /** 消費税込販売価格 */
  sales_price_including_tax?: number;
  /** 消費税額 */
  sales_price_tax?: number;
  /** 定価 */
  price?: number | null;
  /** 会員価格 */
  members_price?: number | null;
  /** 消費税込会員価格 */
  members_price_including_tax?: number;
  /** 会員価格の消費税額 */
  members_price_tax?: number;
  /** 原価 */
  cost?: number | null;
  /** 個別送料 */
  delivery_charge?: number | null;
  /** クール便の追加料金 */
  cool_charge?: number | null;
  /** 利用不可決済方法の配列 */
  unavailable_payment_ids?: number[];
  /** 利用不可配送方法の配列 */
  unavailable_delivery_ids?: number[];
  /** 最小購入数量 */
  min_num?: number | null;
  /** 最大購入数量 */
  max_num?: number | null;
  /** 掲載開始時刻 */
  sale_start_date?: number | null;
  /** 掲載終了時刻 */
  sale_end_date?: number | null;
  /** 単位 */
  unit?: string | null;
  /** 重量(グラム単位) */
  weight?: number | null;
  /** 売り切れているときもショップに表示するか */
  soldout_display?: boolean;
  /** 表示順 */
  sort?: number | null;
  /** 簡易説明 */
  simple_expl?: string | null;
  /** 商品説明 */
  expl?: string | null;
  /** フィーチャーフォン向けショップの商品説明 */
  mobile_expl?: string | null;
  /** スマホ向けショップの商品説明 */
  smartphone_expl?: string | null;
  /** 商品作成日時 */
  make_date?: number;
  /** 商品更新日時 */
  update_date?: number;
  /** 備考 */
  memo?: string;
  /** メインの商品画像URL */
  image_url?: string | null;
  /** メインの商品画像のモバイル用URL */
  mobile_image_url?: string | null;
  /** メインの商品画像のサムネイルURL */
  thumbnail_image_url?: string | null;
  /** メインの商品画像以外の3つの画像に関する、PC用とモバイル用の画像URL */
  images?: {
    /** 画像URL */
    src?: string;
    /** 表示順 */
    position?: number;
    /** モバイル用であるか否か */
    mobile?: boolean;
  }[];
  /** 選択できるオプションの一覧 */
  options?: {
    /** オプションID */
    id?: number;
    /** 商品ID */
    product_id?: number;
    /** ショップアカウントID */
    account_id?: string;
    /** オプション名 */
    name?: string;
    /** オプション値の配列 */
    values?: string[];
    /** オプション作成日時 */
    make_date?: number;
    /** オプション更新日時 */
    update_date?: number;
  }[];
  /** オプションのバリエーション一覧 */
  variants?: {
    /** 商品ID */
    product_id?: number;
    /** ショップアカウントID */
    account_id?: string;
    /** オプション1の値 */
    option1_value?: string | null;
    /** オプション2の値 */
    option2_value?: string | null;
    /** オプション1とオプション2の名前を"　x　"で結合した表示名。オプションが1つしか設定されていない場合はそのオプションの名前に等しい */
    title?: string;
    /** 在庫数 */
    stocks?: number | null;
    /** 残りわずかとなる在庫数 */
    few_num?: number | null;
    /** 型番 */
    model_number?: string | null;
    /** 販売価格 */
    option_price?: number | null;
    /** 消費税込販売価格 */
    option_price_including_tax?: number;
    /** 消費税額 */
    option_price_tax?: number;
    /** 会員価格 */
    option_members_price?: number | null;
    /** 消費税込会員価格 */
    option_members_price_including_tax?: number;
    /** 会員価格の消費税額 */
    option_members_price_tax?: number;
    /** オプション作成日時 */
    make_date?: number;
    /** オプション更新日時 */
    update_date?: number;
  }[];
  /**
   * おすすめ商品情報
   *
   * ※おすすめ商品種別が「3: 新着商品」の情報は、「[新着商品管理](https://shop-pro.jp/manual/new_item_lst)」が「手動モード」の場合のみ取得できます。
   */
  pickups?: {
    /** おすすめ商品情報種別 */
    pickup_type?: number;
    /** 商品の表示順 */
    order_num?: number | null;
    /** 作成日時 */
    make_date?: number;
    /** 更新日時 */
    update_date?: number;
  }[];
  /** デジタルコンテンツ商品かどうか */
  digital_conent?: boolean;
  /** 定期購入商品かどうか */
  regular_purchase?: boolean;
  /** 軽減税率対象なら `true` */
  tax_reduced?: boolean;
  /** 配送不要商品なら `true` */
  without_shipping?: boolean;
};

export type ColormeStockResponse = {
  /** ショップアカウントID */
  account_id?: string;
  /** 商品ID */
  product_id?: number;
  /** 商品名 */
  name?: string;
  /** オプション1の値 */
  option1_value?: string | null;
  /** オプション2の値 */
  option2_value?: string | null;
  /** 在庫数 */
  stocks?: number | null;
  /** 残りわずかとなる在庫数 */
  few_num?: number | null;
  /** 型番 */
  model_number?: string | null;
  /** オプションの型番 */
  variant_model_number?: string | null;
  category?: {
    /** 大カテゴリーID */
    id_big?: number;
    /** 小カテゴリーID */
    id_small?: number;
  } | null;
  /**
   * 掲載設定
   *
   * - `showing`: 掲載状態
   * - `hidden`: 非掲載状態
   * - `showing_for_members`: 会員にのみ掲載
   * - `sale_for_members`: 掲載状態だが購入は会員のみ可能
   */
  display_state?:
    | "showing"
    | "hidden"
    | "showing_for_members"
    | "sale_for_members";
  /** 販売価格 */
  sales_price?: number | null;
  /** 定価 */
  price?: number | null;
  /** 会員価格 */
  members_price?: number | null;
  /** 原価 */
  cost?: number | null;
  /** 個別送料 */
  delivery_charge?: number | null;
  /** クール便の追加料金 */
  cool_charge?: number | null;
  /** 最小購入数量 */
  min_num?: number | null;
  /** 最大購入数量 */
  max_num?: number | null;
  /** 掲載開始時刻 */
  sale_start_date?: number | null;
  /** 掲載終了時刻 */
  sale_end_date?: number | null;
  /** 単位 */
  unit?: string | null;
  /** 重量(グラム単位) */
  weight?: number | null;
  /** 売り切れているときもショップに表示するか */
  soldout_display?: boolean;
  /** 表示順 */
  sort?: number | null;
  /** 簡易説明 */
  simple_expl?: string | null;
  /** 商品説明 */
  expl?: string | null;
  /** フィーチャーフォン向けショップの商品説明 */
  mobile_expl?: string | null;
  /** スマホ向けショップの商品説明 */
  smartphone_expl?: string | null;
  /** 商品作成日時 */
  make_date?: number;
  /** 商品更新日時 */
  update_date?: number;
  /** 備考 */
  memo?: string;
  /** メインの商品画像URL */
  image_url?: string | null;
  /** メインの商品画像のモバイル用URL */
  mobile_image_url?: string | null;
  /** メインの商品画像のサムネイルURL */
  thumbnail_image_url?: string | null;
  /** メインの商品画像以外の3つの画像に関する、PC用とモバイル用の画像URL */
  images?: {
    /** 画像URL */
    src?: string;
    /** 表示順 */
    position?: number;
    /** モバイル用であるか否か */
    mobile?: boolean;
  }[];
};

export type ColormeGroupResponse = {
  /** 商品グループID */
  id?: number;
  /** ショップアカウントID */
  account_id?: string;
  /** 商品グループ名 */
  name?: string;
  /** 商品グループ画像URL */
  image_url?: string | null;
  /** 商品グループ説明 */
  expl?: string | null;
  /** 表示順 */
  sort?: number | null;
  /**
   * 掲載設定
   *
   * - `showing`: 掲載状態
   * - `hidden`: 非掲載状態
   * - `showing_for_members`: 会員にのみ掲載
   * - `sale_for_members`: 掲載状態だが購入は会員のみ可能
   */
  display_state?:
    | "showing"
    | "hidden"
    | "showing_for_members"
    | "sale_for_members";
  /** 親の商品グループID */
  parent_group_id?: number;
};

export type ColormeCategoryResponse = {
  /** 大カテゴリーID */
  id_big?: number;
  /** 小カテゴリーID。大カテゴリーのことを表している場合は0 */
  id_small?: number;
  /** ショップアカウントID */
  account_id?: string;
  /** 商品カテゴリー名 */
  name?: string;
  /** 商品カテゴリー画像URL */
  image_url?: string | null;
  /** 商品カテゴリー説明 */
  expl?: string | null;
  /** 表示順 */
  sort?: number | null;
  /**
   * 掲載設定
   *
   * - `showing`: 掲載状態
   * - `hidden`: 非掲載状態
   * - `members_only`: 会員にのみ掲載
   */
  display_state?: "showing" | "hidden" | "members_only";
  /** 商品カテゴリー作成日時 */
  make_date?: number;
  /** 商品カテゴリー更新日時 */
  update_date?: number;
  /** 子カテゴリー */
  children?: {
    /** 大カテゴリーID */
    id_big?: number;
    /** 小カテゴリーID。大カテゴリーのことを表している場合は0 */
    id_small?: number;
    /** ショップアカウントID */
    account_id?: string;
    /** 商品カテゴリー名 */
    name?: string;
    /** 商品カテゴリー画像URL */
    image_url?: string | null;
    /** 商品カテゴリー説明 */
    expl?: string | null;
    /** 表示順 */
    sort?: number | null;
    /**
     * 掲載設定
     *
     * - `showing`: 掲載状態
     * - `hidden`: 非掲載状態
     * - `members_only`: 会員にのみ掲載
     */
    display_state?: "showing" | "hidden" | "members_only";
    /** 商品カテゴリー作成日時 */
    make_date?: number;
    /** 商品カテゴリー更新日時 */
    update_date?: number;
  }[];
};

export type ColormePaymentResponse = {
  /** 決済方法ID */
  id?: number;
  /** ショップアカウントID */
  account_id?: string;
  /** 決済名 */
  name?: string;
  /** 決済手数料 */
  fee?: number | null;
  /** GMOイプシロン等との契約コード */
  ip_code?: string | null;
  /** 説明 */
  memo?: string | null;
  /** 説明 */
  order_end_note?: string | null;
  /** フィーチャーフォン向けショップ用の説明 */
  memo_mobile?: string | null;
  /** 表示順 */
  sort?: number | null;
  /** 決済画像URL */
  image_url?: string | null;
  /**
   * 決済タイプを表す数値。
   *
   * |type|決済|
   * |---|---|
   * |0|代引き|
   * |1|銀行振込|
   * |2|郵便振替|
   * |3|クレジット（ZEUS）|
   * |4|クロネコ@ペイメント|
   * |5|NP後払い|
   * |6|クレジット（イプシロン）|
   * |7|コンビニ決済（イプシロン）|
   * |8|カラーミークレジット|
   * |9|その他決済|
   * |10|ウェブマネー|
   * |11|イーバンクデビット|
   * |12|ネット銀行（イプシロン）|
   * |13|電子マネー（イプシロン）|
   * |14|ATM・コンビニ・ネット銀行決済（ペイジェント）|
   * |15|Do-Link決済（イプシロン）|
   * |16|ペイジー（イプシロン）|
   * |17|後払い.com|
   * |18|ジャパンネット銀行（送料無料キャンペーン）|
   * |19|クロネコwebコレクト|
   * |20|PayPal（イプシロン）|
   * |21|Yahoo!ウォレット（イプシロン）|
   * |22|全額ポイント利用|
   * |23|スマートフォンキャリア決済（イプシロン）|
   * |24|GMO PG マルチペイメントクレジットカード|
   * |25|住信SBIネット銀行（イプシロン）|
   * |26|GMO後払い（イプシロン）|
   * |27|GMO後払い（GMOペイメントサービス）|
   * |28| - |
   * |29|ATM（ペイジー）（ペイジェント）|
   * |30|カード（ペイジェント）|
   * |31|コンビニ番号方式（ペイジェント）|
   * |32|インターネットバンキング（ペイジェント）|
   * |33|PayPal（ペイパル）|
   * |34|SMBC GMO PAYMENTクレジットカード|
   * |35|Amazon Pay（イプシロン）|
   * |36|楽天ペイ（オンライン決済）|
   * |37|銀行振込（バーチャル口座）（イプシロン）|
   * |38|Amazon Pay（アマゾンペイ）|
   * |39|クレジットカード（SGシステム）|
   * |40|LINE Pay（イプシロン）|
   * |41|PayPal Commerce Platform（ペイパル）|
   * |42|PayPay（イプシロン）|
   * |43|Amazon Pay V2（アマゾンペイ）|
   * |44|Amazon Pay V2（イプシロン）|
   */
  type?: number;
  /** 表示設定。`true`なら表示される */
  display?: boolean;
  /** フィーチャーフォン向けショップでの表示設定 */
  use_mobile?: boolean;
  /** 決済作成日時 */
  make_date?: number;
  /** 決済更新日時 */
  update_date?: number;
  /** 代引き決済の設定情報。代引き決済の場合のみ存在する */
  cod?: {
    /** 手数料が決済金額によって変わるか否か */
    changeable?: boolean;
    /**
     * 手数料が変わる決済金額の区分
     *
     * `[3000, 100]`であれば、3000円以下の場合、手数料は100円であることを表す
     */
    fees?: number[][];
    /** `fees`に設定されている区分以上の金額の場合の手数料 */
    fee_max?: number;
    /**
     * 手数料計算に用いる決済総額を用いるか否か
     *
     * - `true`: 決済総額で計算
     * - `false`: 商品合計額で計算
     */
    changeable_by_total?: boolean;
  };
  /** クレジットカードの設定情報。クレジットカード決済の場合のみ存在する */
  card?: {
    brands?: {
      /** ブランドID */
      id?: number;
      /** ブランド名 */
      name?: string;
    }[];
  };
  /** 銀行振り込みの設定情報。銀行振り込み決済の場合のみ存在する */
  financial?: {
    /** 金融機関名 */
    name?: string;
    /** 支店名 */
    branch_name?: string;
    /**
     * 講座種別
     *
     * - `saving`: 普通
     * - `checking`: 当座
     */
    kouza_type?: "saving" | "checking";
    /** 口座番号 */
    kouza_number?: string;
    /** 口座名義 */
    kouza_name?: string;
  };
};

export type ColormeDeliveryResponse = {
  /** 配送方法ID */
  id?: number;
  /** ショップアカウントID */
  account_id?: string;
  /** 配送方法名 */
  name?: string;
  /**
   * 配送方法区分
   *
   * - `other`: そのほか
   * - `yamato`: クロネコヤマト
   * - `yamato_pickup`: ヤマト自宅外受け取り
   * - `sagawa`: 佐川急便
   * - `jp`: 日本郵便
   */
  method_type?: "other" | "yamato" | "yamato_pickup" | "sagawa" | "jp";
  /** 配送方法画像URL */
  image_url?: string | null;
  /**
   * 配送料が無料になる基準
   *
   * - `not_free`: 有料
   * - `free`: 無料
   * - `free_to_limit`: 注文金額が一定以上の場合は無料
   */
  charge_free_type?: "not_free" | "free" | "free_to_limit";
  /** 配送料が無料になる金額。`charge_free_type`が`free_to_limit`の場合のみ意味を持つ */
  charge_free_limit?: number | null;
  /**
   * 配送料の計算方法
   *
   * - `fixed`: 固定額
   * - `by_price`: 注文金額によって決定
   * - `by_area`: 配送先都道府県によって決定
   * - `by_weight`: 商品重量によって決定
   */
  charge_type?: "fixed" | "by_price" | "by_area" | "by_weight";
  /** 配送料設定の詳細。上記の`charge_free_type`や`charge_type`に基づいて、この中から配送料が決定される */
  charge?: {
    /** 配送方法ID */
    delivery_id?: number;
    /** ショップアカウントID */
    account_id?: string;
    /** 配送料が固定の場合の金額 */
    charge_fixed?: number | null;
    /**
     * 配送料が変わる決済金額の区分
     *
     * `[3000, 100]`であれば、3000円以下の場合、手数料は100円であることを表す
     */
    charge_ranges_by_price?: number[][];
    /** `charge_ranges_by_price`に設定されている区分以上の金額の場合の手数料 */
    charge_max_price?: number | null;
    /** 都道府県ごとの配送料 */
    charge_ranges_by_area?: {
      /** 都道府県の通し番号。北海道が1、沖縄が47、海外が48 */
      pref_id?: number;
      /** 都道府県名 */
      pref_name?: string;
      /** 配送料 */
      charge?: number;
    }[];
    /**
     * 配送料が変わる重量の区分
     *
     * 以下の値の場合、
     *
     * - 1000g未満の商品を青森県に届ける際の配送料は300円
     * - 3000g未満の商品を青森県に届ける際の配送料は500円
     *
     * であることを表す。
     *
     * ```json
     * [
     *   [
     *     1000,
     *     [
     *       {
     *         "pref_id": 2,
     *         "pref_name": "青森県",
     *         "charge": 300
     *       }
     *     ]
     *   ],
     *   [
     *     3000,
     *     [
     *       {
     *         "pref_id": 2,
     *         "pref_name": "青森県",
     *         "charge": 500
     *       }
     *     ]
     *   ]
     * ]
     * ```
     */
    charge_ranges_by_weight?: (
      | number
      | {
          /** 都道府県の通し番号。北海道が1、沖縄が47、海外が48 */
          pref_id?: number;
          /** 都道府県名 */
          pref_name?: string;
          /** 配送料 */
          charge?: number;
        }
    )[][];
    /** `charge_ranges_by_weight`に設定されている区分以上の重量の場合の手数料 */
    charge_ranges_max_weight?: {
      /** 都道府県の通し番号。北海道が1、沖縄が47、海外が48 */
      pref_id?: number;
      /** 都道府県名 */
      pref_name?: string;
      /** 配送料 */
      charge?: number;
    }[];
  };
  /** 送料が税込み料金であるか否か */
  tax_included?: boolean;
  /** 配送伝票番号設定を使用するか否か */
  slip_number_use?: boolean;
  /** 配送伝票番号確認URL */
  slip_number_url?: string | null;
  /** 配送方法の説明 */
  memo?: string | null;
  /** フィーチャーフォン向けショップ用の配送方法説明 */
  memo2?: string | null;
  /** 表示順 */
  sort?: number | null;
  /** 表示状態 */
  display_state?: "showing" | "hidden";
  /** 配送希望日を指定可能か */
  preferred_date_use?: boolean;
  /** 配送時間帯を指定可能か */
  preferred_period_use?: boolean;
  /** 利用不可決済方法の配列 */
  unavailable_payment_ids?: number[];
  /** 配送方法作成日時 */
  make_date?: number;
  /** 配送方法更新日時 */
  update_date?: number;
};

export type ColormeGiftResponse = {
  /** ショップアカウントID */
  account_id?: string;
  enabled?: boolean;
  noshi?: {
    enabled?: boolean;
    text_enabled?: boolean;
    text_charge?: number | null;
    types?: {
      name?: string;
      charge?: number;
    }[];
    comment?: string;
  };
  card?: {
    enabled?: boolean;
    types?: {
      name?: string;
      charge?: number;
    }[];
    comment?: string;
  };
  wrapping?: {
    enabled?: boolean;
    types?: {
      name?: string;
      charge?: number;
    }[];
    comment?: string;
  };
  make_date?: number;
  update_date?: number;
};

export type ColormeCouponResponse = {
  /** Coupon ID */
  id?: number;
  /** クーポン名 */
  name?: string;
  /** クーポンコード */
  code?: string;
  /**
   * クーポン種別
   *
   * - `amount`: 定額
   * - `rate`: 定率
   * - `delivery_charge`: 送料無料
   */
  coupon_type?: "amount" | "rate" | "delivery_charge";
  /** 割引金額または割引率 */
  discount_amount?: number;
  /** 利用最低額 */
  minimum_amount?: number;
  /** 利用開始日 */
  starts_at?: number;
  /** 利用終了日 */
  ends_at?: number;
  /** 総利用可能数 */
  total_usage_limit?: number;
  /**
   * ユーザ毎の利用可能数
   *
   * - `indisposable`: 無制限
   * - `disposable`: 一度のみ
   */
  usage_limit?: "indisposable" | "disposable";
  /**
   * 商品グループによる制限
   *
   * - `none`: 無制限
   * - `including`: 含む
   * - `excluding`: 除外
   */
  group_limit_type?: "none" | "including" | "excluding";
  /**
   * クーポンの利用可否
   *
   * - `unavailable`: 利用不可
   * - `available`: 利用可能
   */
  status?: "unavailable" | "available";
  /** 作成日時 */
  created_at?: number;
  /** 更新日時 */
  updated_at?: number;
};

export type ColormePickupResponse = {
  /** おすすめ商品情報種別 */
  pickup_type?: number;
  /** 商品ID */
  product_id?: number;
  /** ショップアカウントID */
  account_id?: string;
  /** 商品の表示順 */
  order_num?: number | null;
  /** 作成日時 */
  make_date?: number;
  /** 更新日時 */
  update_date?: number;
};

/*

Params

*/
export type ColormeGetSalesParams = {
  /** 受注IDで検索。カンマ区切りで複数指定可能 */
  ids?: string;
  /**
   * 指定日時以降の受注から検索。
   *
   * `after` 未指定時は `before` の指定日時の7日前の0時、`before` 未指定時は現在から7日前の0時がデフォルト値となります。
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

export type ColormeGetStatParams = {
  /** 集計対象とする売上の作成日。形式は"2017-04-12"、"2017/04/12"など。指定しない場合は今日の日付が使われる */
  make_date?: string;
};

export type ColormeGetCustomersParams = {
  /** 顧客IDで検索。カンマ区切りで複数指定可能 */
  ids?: string;
  /** 顧客名で部分一致検索 */
  name?: string;
  /** 顧客フリガナで部分一致検索 */
  furigana?: string;
  /** 顧客メールアドレスで部分一致検索 */
  mail?: string;
  /** 顧客の郵便番号で部分一致検索 */
  postal?: string;
  /** 顧客の電話番号で部分一致検索 */
  tel?: string;
  /**
   * 顧客の性別で検索
   *
   * - `male`: 男性
   * - `female`: 女性
   */
  sex?: "male" | "female";
  /** `true`なら会員登録済みの顧客から検索 */
  member?: boolean;
  /** メルマガ受信可否で検索 */
  receive_mail_magazine?: boolean;
  /** 指定日時以降に登録された顧客から検索 */
  make_date_min?: string;
  /** 指定日時以前に登録された顧客から検索 */
  make_date_max?: string;
  /** 指定日時以降に更新された顧客から検索 */
  update_date_min?: string;
  /** 指定日時以前に更新された顧客から検索 */
  update_date_max?: string;
  /** レスポンスの件数を指定。指定がない場合は10。最大100 */
  limit?: number;
  /** 指定した数値+1件目以降のデータを返す */
  offset?: number;
};

export type ColormeGetProductsParams = {
  /** 商品IDで検索。カンマ区切りにすることで複数検索が可能 */
  ids?: string;
  /** 大カテゴリーIDで検索 */
  category_id_big?: number;
  /** 小カテゴリーIDで検索 */
  category_id_small?: number;
  /** グループIDで検索。カンマ区切りにすることで複数検索が可能 */
  group_ids?: number;
  /** 型番で部分一致検索 */
  model_number?: string;
  /** 商品名で部分一致検索 */
  name?: string;
  /**
   * 掲載設定で検索
   *
   * - `showing`: 掲載状態
   * - `hidden`: 非掲載状態
   * - `showing_for_members`: 会員にのみ掲載
   * - `sale_for_members`: 掲載状態だが購入は会員のみ可能
   */
  display_state?:
    | "showing"
    | "hidden"
    | "showing_for_members"
    | "sale_for_members";
  /** 在庫管理している商品のうち、在庫数が指定した数値以下の商品を検索。オプションごとに在庫管理している商品は、オプションごとの在庫数で検索される */
  stocks?: number;
  /** `true`の場合、在庫管理している商品を検索 */
  stock_managed?: boolean;
  /** `true` の場合、過去1週間以内に更新された商品から検索 */
  recent_zero_stocks?: boolean;
  /** 指定日時以降に作成された商品から検索 */
  make_date_min?: string;
  /** 指定日時以前に作成された商品から検索 */
  make_date_max?: string;
  /** 指定日時以降に更新された商品から検索 */
  update_date_min?: string;
  /** 指定日時以前に更新された商品から検索 */
  update_date_max?: string;
  /** レスポンスJSONのキーをカンマ区切りで指定 */
  fields?: string;
  /** レスポンスの件数を指定。指定がない場合は10。最大50 */
  limit?: number;
  /** 指定した数値+1件目以降のデータを返す */
  offset?: number;
};

export type ColormeGetStocksParams = {
  /** 商品IDで検索。カンマ区切りにすることで複数検索が可能 */
  ids?: string;
  /** 大カテゴリーIDで検索 */
  category_id_big?: number;
  /** 小カテゴリーIDで検索 */
  category_id_small?: number;
  /** 型番で部分一致検索 */
  model_number?: string;
  /** 商品名で部分一致検索 */
  name?: string;
  /**
   * 掲載設定で検索
   *
   * - `showing`: 掲載状態
   * - `hidden`: 非掲載状態
   * - `showing_for_members`: 会員にのみ掲載
   * - `sale_for_members`: 掲載状態だが購入は会員のみ可能
   */
  display_state?:
    | "showing"
    | "hidden"
    | "showing_for_members"
    | "sale_for_members";
  /** 在庫管理している商品のうち、在庫数が指定した数値以下の商品を検索。オプションごとに在庫管理している商品は、オプションごとの在庫数で検索される */
  stocks?: number;
  /** `true` の場合、過去1週間以内に更新された商品から検索 */
  recent_zero_stocks?: boolean;
  /** レスポンスJSONのキーをカンマ区切りで指定 */
  fields?: string;
  /** レスポンスの件数を指定。指定がない場合は10。最大50 */
  limit?: number;
  /** 指定した数値+1件目以降のデータを返す */
  offset?: number;
};

export type ColormeUpdateSaleParams = {
  /** 入金済みであるか否か */
  paid?: boolean;
  /**
   * ショップポイントの付与状態。`fixed`へ変更すると、購入者にショップポイントが付与される。`fixed`から別のステータスには変更できない
   *
   * - `assumed`: 仮付与
   * - `fixed`: 確定済み
   * - `cenceled`: キャンセル済み
   */
  point_state?: "assumed" | "fixed" | "cenceled";
  sale_deliveries?: {
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
  }[];
};

export type ColormeCancelSaleParams = {
  /** `true`の場合、在庫管理している商品について、購入された分の在庫数を充当する */
  restock: boolean;
};

export type ColormeSendMailParams = {
  /**
   * 送信するメールの種類
   *
   * - `accepted`: 受注メールを送信する
   * - `paid`: 入金確認メールを送信する
   * - `delivered`: 商品発送メールを送信する
   */
  type?: "accepted" | "paid" | "delivered";
};

export type ColormeAddCustomerParams = {
  /** 購入者氏名 */
  name: string;
  /** メールアドレス */
  mail: string;
  /** 都道府県id */
  pref_id: number;
  /** 住所 */
  address1: string;
  /** 住所（建物名など） */
  address2?: string;
  /** 電話番号 */
  tel: string;
  /** 郵便番号 */
  postal: string;
  /** 会員登録をするか否か */
  add_member?: boolean;
};

export type ColormeAddProductParams = {
  /** 商品名 */
  name: string;
  /** 大カテゴリーID */
  category_id_big: number;
  /**
   * 販売価格
   * フリープランを利用しているショップの場合、最低価格は100円です。
   */
  sales_price?: number;
  /**
   * 掲載設定
   *
   * - `showing`: 掲載状態
   * - `hidden`: 非掲載状態
   * - `showing_for_members`: 会員にのみ掲載
   * - `sale_for_members`: 掲載状態だが購入は会員のみ可能
   */
  display_state?:
    | "showing"
    | "hidden"
    | "showing_for_members"
    | "sale_for_members";
  /** `true` の場合は軽減税率対象 */
  tax_reduced?: boolean;
};

export type ColormeUpdateProductParams = {
  /** 商品名 */
  name?: string;
  /** 定価 */
  price?: number;
  /** 大カテゴリーID */
  category_id_big?: number;
  /** 小カテゴリーID */
  category_id_small?: number;
  /** 原価 */
  cost?: number;
  /**
   * 販売価格
   * フリープランを利用しているショップの場合、最低価格は100円です。
   */
  sales_price?: number;
  /**
   * 会員価格
   * フリープランを利用しているショップの場合、最低価格は100円です。
   */
  members_price?: number;
  /** 型番 */
  model_number?: string;
  /** 商品説明 */
  expl?: string;
  /** 簡易説明 */
  simple_expl?: string;
  /** スマホ向けショップの商品説明 */
  smartphone_expl?: string;
  /**
   * 掲載設定
   *
   * - `showing`: 掲載状態
   * - `hidden`: 非掲載状態
   * - `showing_for_members`: 会員にのみ掲載
   * - `sale_for_members`: 掲載状態だが購入は会員のみ可能
   */
  display_state?:
    | "showing"
    | "hidden"
    | "showing_for_members"
    | "sale_for_members";
  /** 在庫管理する場合は `true` */
  stock_managed?: boolean;
  /**
   * 数値を指定した場合は、在庫数をその数値で更新します。(商品オプションごとに在庫管理している場合、このパラメータは無視されます)
   *
   * 以下のように`increment`を利用すると、その数値だけ在庫数を増減させることが可能です。(負の値も指定可)
   * ```json
   * "stocks": {
   *   "increment": 3
   * }
   * ```
   */
  stocks?:
    | {
        /** 在庫数の増減値 */
        increment?: number;
      }
    | number;
  /** グループIDの配列 */
  group_ids?: number[];
  /** 商品オプションによるバリエーションごとに更新 */
  variants?: {
    /** オプション1の値 */
    option1_value?: string;
    /** オプション2の値 */
    option2_value?: string;
    /** 上記`stocks`と同様に、数値、または増減値を用いて在庫数を更新できます。 */
    stocks?:
      | {
          /** 在庫数の増減値 */
          increment?: number;
        }
      | number;
  }[];
  /** `true` の場合は軽減税率対象 */
  tax_reduced?: boolean;
};

export type ColormeAddPickupParams = {
  /** おすすめ商品情報種別（0:おすすめ商品, 1:売れ筋商品, 3:新着商品, 4:イチオシ商品） */
  pickup_type?: 0 | 1 | 3 | 4;
  /** 商品の表示順 0以上 */
  order_num?: number;
};

export type ColormeDeletePickupParams = {
  /** 商品ID */
  product_id: number;
  /** おすすめ商品情報種別（0:おすすめ商品, 1:売れ筋商品, 3:新着商品, 4:イチオシ商品） */
  pickup_type?: 0 | 1 | 3 | 4;
};
