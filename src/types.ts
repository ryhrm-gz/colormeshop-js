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

export type ColormeGetSaleParams = {
  /** 受注ID */
  sale_id: number;
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

export type ColormeGetCustomerParams = {
  /** 顧客ID */
  customer_id: number;
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

export type ColormeGetProductParams = {
  /** 商品ID */
  product_id: number;
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
