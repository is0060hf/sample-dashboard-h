// ブランドセーフティリスク可視化ダッシュボード（HYTRA）用モックデータ

// リスクカテゴリの型定義
export interface BrandSafetyCategory {
  id: number;
  name: string;
  description: string;
  color: string;
  icon: string;
}

// カテゴリごとのドメイン数サマリーの型定義
export interface CategoryBreakdown {
  categoryId: number;
  count: number;
  percentage: number;
}

export interface RecentChanges {
  added: number;
  removed: number;
  changedCategory: number;
}

export interface BrandSafetySummary {
  totalDomains: number;
  updatedAt: string;
  categoryBreakdown: CategoryBreakdown[];
  recentChanges: RecentChanges;
  riskLevel: string;
}

// 不適切サイトのドメインリスト（カテゴリ別）の型定義
export interface UnsafeDomain {
  id: string;
  domain: string;
  categoryId: number;
  detectedDate: string;
  riskScore: number;
  status: string;
}

// 最近除外されたドメインの型定義
export interface RemovedDomain {
  id: string;
  domain: string;
  categoryId: number;
  removedDate: string;
  previousRiskScore: number;
  removalReason: string;
}

// 時系列でのリスクカテゴリ推移の型定義
export interface RiskCategoryTrend {
  date: string;
  categoryBreakdown: number[];
}

// 広告主別のブランドセーフティ設定の型定義
export interface AdvertiserSafetySetting {
  advertiserId: string;
  advertiserName: string;
  blockedCategories: number[];
  customRiskThreshold: number;
  lastUpdated: string;
  contactPerson: string;
}

// ドメインリスクスコア分布の型定義
export interface DomainRiskRange {
  riskRange: string;
  count: number;
  percentage: number;
}

// リスクカテゴリの定義
export const brandSafetyCategories: BrandSafetyCategory[] = [
  { id: 1, name: "ヘイト", description: "差別的・憎悪表現を含むコンテンツ", color: "#e53935", icon: "warning" },
  { id: 2, name: "アドフラウド", description: "広告詐欺・不正クリック", color: "#d81b60", icon: "gpp_bad" },
  { id: 3, name: "悪質CGM", description: "有害なユーザー生成コンテンツ", color: "#8e24aa", icon: "dangerous" },
  { id: 4, name: "著作権侵害", description: "無許可コンテンツ複製・配信", color: "#5e35b1", icon: "copyright" },
  { id: 5, name: "不適切コンテンツ", description: "性的・暴力的表現", color: "#3949ab", icon: "block" },
  { id: 6, name: "虚偽情報", description: "誤情報・フェイクニュース", color: "#1e88e5", icon: "report_problem" },
  { id: 7, name: "違法行為", description: "違法活動の助長・促進", color: "#039be5", icon: "policy" }
];

// リスクカテゴリごとのドメイン数サマリー
export const brandSafetySummary: BrandSafetySummary = {
  totalDomains: 1248,
  updatedAt: "2025-05-15T14:30:00",
  categoryBreakdown: [
    { categoryId: 1, count: 187, percentage: 15 },
    { categoryId: 2, count: 356, percentage: 28.5 },
    { categoryId: 3, count: 203, percentage: 16.3 },
    { categoryId: 4, count: 165, percentage: 13.2 },
    { categoryId: 5, count: 142, percentage: 11.4 },
    { categoryId: 6, count: 98, percentage: 7.9 },
    { categoryId: 7, count: 97, percentage: 7.7 }
  ],
  recentChanges: {
    added: 42,
    removed: 18,
    changedCategory: 7
  },
  riskLevel: "中"
};

// 不適切サイトのドメインリスト（カテゴリ別）
export const unsafeDomainsList: UnsafeDomain[] = [
  // ヘイトカテゴリ
  { id: "DOM-1001", domain: "hate-speech-blog.jp", categoryId: 1, detectedDate: "2025-05-10", riskScore: 87, status: "active" },
  { id: "DOM-1002", domain: "extreme-opinions.co.jp", categoryId: 1, detectedDate: "2025-05-08", riskScore: 92, status: "active" },
  { id: "DOM-1003", domain: "radical-views-forum.jp", categoryId: 1, detectedDate: "2025-05-12", riskScore: 78, status: "active" },
  { id: "DOM-1004", domain: "discriminatory-content.jp", categoryId: 1, detectedDate: "2025-05-01", riskScore: 85, status: "active" },
  { id: "DOM-1005", domain: "offensive-community.jp", categoryId: 1, detectedDate: "2025-04-28", riskScore: 81, status: "active" },
  
  // アドフラウドカテゴリ
  { id: "DOM-2001", domain: "click-farm-service.jp", categoryId: 2, detectedDate: "2025-05-14", riskScore: 95, status: "active" },
  { id: "DOM-2002", domain: "fake-traffic-generator.co.jp", categoryId: 2, detectedDate: "2025-05-13", riskScore: 97, status: "active" },
  { id: "DOM-2003", domain: "bot-network-hub.jp", categoryId: 2, detectedDate: "2025-05-11", riskScore: 94, status: "active" },
  { id: "DOM-2004", domain: "impression-fraud.jp", categoryId: 2, detectedDate: "2025-05-09", riskScore: 91, status: "active" },
  { id: "DOM-2005", domain: "ad-stacking-site.jp", categoryId: 2, detectedDate: "2025-05-07", riskScore: 89, status: "active" },
  
  // 悪質CGMカテゴリ
  { id: "DOM-3001", domain: "toxic-user-forum.jp", categoryId: 3, detectedDate: "2025-05-15", riskScore: 83, status: "active" },
  { id: "DOM-3002", domain: "harmful-community-posts.co.jp", categoryId: 3, detectedDate: "2025-05-12", riskScore: 79, status: "active" },
  { id: "DOM-3003", domain: "unmoderated-comments.jp", categoryId: 3, detectedDate: "2025-05-10", riskScore: 76, status: "active" },
  { id: "DOM-3004", domain: "anonymous-hate-board.jp", categoryId: 3, detectedDate: "2025-05-08", riskScore: 82, status: "active" },
  { id: "DOM-3005", domain: "problematic-user-content.jp", categoryId: 3, detectedDate: "2025-05-05", riskScore: 77, status: "active" },
  
  // 著作権侵害カテゴリ
  { id: "DOM-4001", domain: "pirated-content-share.jp", categoryId: 4, detectedDate: "2025-05-14", riskScore: 88, status: "active" },
  { id: "DOM-4002", domain: "illegal-download-site.co.jp", categoryId: 4, detectedDate: "2025-05-11", riskScore: 93, status: "active" },
  { id: "DOM-4003", domain: "copyright-violation-hub.jp", categoryId: 4, detectedDate: "2025-05-09", riskScore: 90, status: "active" },
  { id: "DOM-4004", domain: "unauthorized-streaming.jp", categoryId: 4, detectedDate: "2025-05-07", riskScore: 86, status: "active" },
  { id: "DOM-4005", domain: "content-theft-platform.jp", categoryId: 4, detectedDate: "2025-05-04", riskScore: 84, status: "active" },
  
  // 不適切コンテンツカテゴリ
  { id: "DOM-5001", domain: "adult-explicit-content.jp", categoryId: 5, detectedDate: "2025-05-13", riskScore: 89, status: "active" },
  { id: "DOM-5002", domain: "violent-imagery-site.co.jp", categoryId: 5, detectedDate: "2025-05-10", riskScore: 85, status: "active" },
  { id: "DOM-5003", domain: "graphic-content-forum.jp", categoryId: 5, detectedDate: "2025-05-08", riskScore: 82, status: "active" },
  { id: "DOM-5004", domain: "inappropriate-material.jp", categoryId: 5, detectedDate: "2025-05-06", riskScore: 80, status: "active" },
  { id: "DOM-5005", domain: "explicit-media-sharing.jp", categoryId: 5, detectedDate: "2025-05-03", riskScore: 87, status: "active" },
  
  // 虚偽情報カテゴリ
  { id: "DOM-6001", domain: "fake-news-daily.jp", categoryId: 6, detectedDate: "2025-05-15", riskScore: 81, status: "active" },
  { id: "DOM-6002", domain: "misinformation-spread.co.jp", categoryId: 6, detectedDate: "2025-05-12", riskScore: 78, status: "active" },
  { id: "DOM-6003", domain: "conspiracy-theory-hub.jp", categoryId: 6, detectedDate: "2025-05-09", riskScore: 75, status: "active" },
  { id: "DOM-6004", domain: "false-information-blog.jp", categoryId: 6, detectedDate: "2025-05-07", riskScore: 73, status: "active" },
  { id: "DOM-6005", domain: "misleading-news-source.jp", categoryId: 6, detectedDate: "2025-05-04", riskScore: 77, status: "active" },
  
  // 違法行為カテゴリ
  { id: "DOM-7001", domain: "illegal-services-market.jp", categoryId: 7, detectedDate: "2025-05-14", riskScore: 94, status: "active" },
  { id: "DOM-7002", domain: "black-market-forum.co.jp", categoryId: 7, detectedDate: "2025-05-11", riskScore: 96, status: "active" },
  { id: "DOM-7003", domain: "prohibited-items-sale.jp", categoryId: 7, detectedDate: "2025-05-08", riskScore: 92, status: "active" },
  { id: "DOM-7004", domain: "unlawful-activity-promotion.jp", categoryId: 7, detectedDate: "2025-05-06", riskScore: 91, status: "active" },
  { id: "DOM-7005", domain: "criminal-network-hub.jp", categoryId: 7, detectedDate: "2025-05-03", riskScore: 95, status: "active" }
];

// 最近追加されたドメイン
export const recentlyAddedDomains: UnsafeDomain[] = [
  { id: "DOM-2006", domain: "suspicious-traffic-site.jp", categoryId: 2, detectedDate: "2025-05-15", riskScore: 88, status: "active" },
  { id: "DOM-3006", domain: "new-toxic-forum.jp", categoryId: 3, detectedDate: "2025-05-15", riskScore: 79, status: "active" },
  { id: "DOM-1006", domain: "extremist-content-blog.jp", categoryId: 1, detectedDate: "2025-05-14", riskScore: 86, status: "active" },
  { id: "DOM-5006", domain: "new-adult-content-hub.jp", categoryId: 5, detectedDate: "2025-05-14", riskScore: 83, status: "active" },
  { id: "DOM-4006", domain: "fresh-piracy-site.jp", categoryId: 4, detectedDate: "2025-05-13", riskScore: 87, status: "active" }
];

// 最近除外されたドメイン
export const recentlyRemovedDomains: RemovedDomain[] = [
  { id: "DOM-6099", domain: "reformed-news-site.jp", categoryId: 6, removedDate: "2025-05-15", previousRiskScore: 72, removalReason: "コンテンツポリシー改善" },
  { id: "DOM-3098", domain: "improved-community.jp", categoryId: 3, removedDate: "2025-05-14", previousRiskScore: 75, removalReason: "モデレーション強化" },
  { id: "DOM-5097", domain: "content-cleaned.jp", categoryId: 5, removedDate: "2025-05-13", previousRiskScore: 79, removalReason: "不適切コンテンツ削除" },
  { id: "DOM-2096", domain: "legitimate-now.jp", categoryId: 2, removedDate: "2025-05-12", previousRiskScore: 90, removalReason: "広告配信方法改善" },
  { id: "DOM-4095", domain: "licensed-content-now.jp", categoryId: 4, removedDate: "2025-05-11", previousRiskScore: 85, removalReason: "ライセンス取得確認" }
];

// 時系列でのリスクカテゴリ推移
export const riskCategoryTrends: RiskCategoryTrend[] = [
  { date: "2025-01-01", categoryBreakdown: [150, 320, 180, 140, 130, 85, 80] },
  { date: "2025-02-01", categoryBreakdown: [155, 325, 185, 145, 135, 90, 85] },
  { date: "2025-03-01", categoryBreakdown: [165, 335, 190, 150, 140, 92, 88] },
  { date: "2025-04-01", categoryBreakdown: [175, 345, 195, 155, 145, 95, 90] },
  { date: "2025-05-01", categoryBreakdown: [187, 356, 203, 165, 142, 98, 97] }
];

// 広告主別のブランドセーフティ設定
export const advertiserSafetySettings: AdvertiserSafetySetting[] = [
  { 
    advertiserId: "ADV-001", 
    advertiserName: "株式会社東京マーケティング", 
    blockedCategories: [1, 2, 5, 7],
    customRiskThreshold: 75,
    lastUpdated: "2025-05-10",
    contactPerson: "鈴木部長"
  },
  { 
    advertiserId: "ADV-002", 
    advertiserName: "大阪デジタル株式会社", 
    blockedCategories: [1, 2, 3, 4, 5, 6, 7],
    customRiskThreshold: 65,
    lastUpdated: "2025-05-12",
    contactPerson: "田中マネージャー"
  },
  { 
    advertiserId: "ADV-003", 
    advertiserName: "名古屋広告企画", 
    blockedCategories: [1, 5, 7],
    customRiskThreshold: 80,
    lastUpdated: "2025-05-08",
    contactPerson: "佐藤ディレクター"
  },
  { 
    advertiserId: "ADV-004", 
    advertiserName: "福岡メディアパートナーズ", 
    blockedCategories: [1, 2, 3, 5],
    customRiskThreshold: 70,
    lastUpdated: "2025-05-14",
    contactPerson: "高橋チーフ"
  },
  { 
    advertiserId: "ADV-005", 
    advertiserName: "札幌ブランディング", 
    blockedCategories: [1, 2, 4, 5, 7],
    customRiskThreshold: 75,
    lastUpdated: "2025-05-11",
    contactPerson: "伊藤マネージャー"
  }
];

// ドメインリスクスコア分布
export const domainRiskDistribution: DomainRiskRange[] = [
  { riskRange: "90-100", count: 215, percentage: 17.2 },
  { riskRange: "80-89", count: 342, percentage: 27.4 },
  { riskRange: "70-79", count: 385, percentage: 30.8 },
  { riskRange: "60-69", count: 198, percentage: 15.9 },
  { riskRange: "50-59", count: 108, percentage: 8.7 }
]; 