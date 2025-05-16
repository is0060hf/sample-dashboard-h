// テレビ＆デジタル統合効果モニタリング（テレデジライブモニタリング）用モックデータ

// 期間の型定義
export interface CampaignPeriod {
  start: string;
  end: string;
  current: string;
}

// 予算の型定義
export interface Budget {
  total: number;
  spent: number;
  remaining: number;
  spentPercentage: number;
}

// KPI項目の型定義
export interface KpiItem {
  target: number;
  current: number;
  percentage: number;
  status: '順調' | '注意' | '危険';
}

// KPIの型定義
export interface Kpi {
  integratedReach: KpiItem;
  frequency: KpiItem;
  conversion: KpiItem;
  brandLift: KpiItem;
}

// ビジネスKGIの型定義
export interface BusinessKgi {
  sales: KpiItem;
  marketShare: KpiItem;
  customerAcquisition: KpiItem;
}

// メディア別内訳の型定義
export interface MediaItem {
  budget: number;
  spent: number;
  reachContribution: number;
}

// メディア内訳の型定義
export interface MediaBreakdown {
  tv: MediaItem;
  digital: MediaItem;
}

// 全体サマリーの型定義
export interface OverallCampaignSummary {
  campaignName: string;
  period: CampaignPeriod;
  budget: Budget;
  kpi: Kpi;
  businessKGI: BusinessKgi;
  mediaBreakdown: MediaBreakdown;
  lastUpdated: string;
}

// テレビ広告サマリー項目の型定義
export interface TvSummaryItem {
  target: number;
  current: number;
  percentage: number;
}

// テレビ広告サマリーの型定義
export interface TvSummary {
  grp: TvSummaryItem;
  reach: TvSummaryItem;
  frequency: TvSummaryItem;
  cost: TvSummaryItem;
  cpm: TvSummaryItem;
}

// テレビチャンネル内訳の型定義
export interface TvChannelBreakdown {
  channel: string;
  grp: number;
  reach: number;
  frequency: number;
  cost: number;
  cpm: number;
}

// 時間帯パフォーマンスの型定義
export interface TimeSlotPerformance {
  timeSlot: string;
  grp: number;
  reach: number;
  frequency: number;
  cost: number;
  cpm: number;
}

// 番組ジャンルパフォーマンスの型定義
export interface ProgramGenrePerformance {
  genre: string;
  grp: number;
  reach: number;
  frequency: number;
  cost: number;
  cpm: number;
}

// デモグラフィックパフォーマンスの型定義
export interface TvDemographicPerformance {
  demographic: string;
  grp: number;
  reach: number;
  frequency: number;
  targetRatio: number;
}

// 週間トレンドの型定義
export interface TvWeeklyTrend {
  week: string;
  grp: number;
  reach: number;
  frequency: number;
  cost: number;
}

// クリエイティブパフォーマンスの型定義
export interface TvCreativePerformance {
  creative: string;
  grp: number;
  reach: number;
  frequency: number;
  cost: number;
  likability: number;
}

// テレビ広告詳細データの型定義
export interface TvAdvertisingDetails {
  summary: TvSummary;
  channelBreakdown: TvChannelBreakdown[];
  timeSlotPerformance: TimeSlotPerformance[];
  programGenrePerformance: ProgramGenrePerformance[];
  demographicPerformance: TvDemographicPerformance[];
  weeklyTrend: TvWeeklyTrend[];
  creativePerformance: TvCreativePerformance[];
}

// デジタル広告サマリー項目の型定義
export interface DigitalSummaryItem {
  target: number;
  current: number;
  percentage: number;
}

// デジタル広告サマリーの型定義
export interface DigitalSummary {
  impressions: DigitalSummaryItem;
  reach: DigitalSummaryItem;
  clicks: DigitalSummaryItem;
  ctr: DigitalSummaryItem;
  conversions: DigitalSummaryItem;
  conversionRate: DigitalSummaryItem;
  cost: DigitalSummaryItem;
  cpm: DigitalSummaryItem;
  cpc: DigitalSummaryItem;
  cpa: DigitalSummaryItem;
}

// プラットフォーム内訳の型定義
export interface PlatformBreakdown {
  platform: string;
  impressions: number;
  reach: number;
  clicks: number;
  ctr: number;
  conversions: number;
  conversionRate: number;
  cost: number;
  cpm: number;
  cpc: number;
  cpa: number;
}

// 広告フォーマットパフォーマンスの型定義
export interface AdFormatPerformance {
  format: string;
  impressions: number;
  reach: number;
  clicks: number;
  ctr: number;
  conversions: number;
  conversionRate: number;
  cost: number;
  cpm: number;
  cpc: number;
  cpa: number;
}

// デバイス内訳の型定義
export interface DeviceBreakdown {
  device: string;
  impressions: number;
  reach: number;
  clicks: number;
  ctr: number;
  conversions: number;
  conversionRate: number;
  cost: number;
  cpm: number;
  cpc: number;
  cpa: number;
}

// デジタルデモグラフィックパフォーマンスの型定義
export interface DigitalDemographicPerformance {
  demographic: string;
  impressions: number;
  reach: number;
  clicks: number;
  ctr: number;
  conversions: number;
  conversionRate: number;
  targetRatio: number;
}

// デジタル週間トレンドの型定義
export interface DigitalWeeklyTrend {
  week: string;
  impressions: number;
  reach: number;
  clicks: number;
  ctr: number;
  conversions: number;
  cost: number;
}

// デジタルクリエイティブパフォーマンスの型定義
export interface DigitalCreativePerformance {
  creative: string;
  impressions: number;
  reach: number;
  clicks: number;
  ctr: number;
  conversions: number;
  conversionRate: number;
  cost: number;
  engagement: number;
}

// デジタル広告詳細データの型定義
export interface DigitalAdvertisingDetails {
  summary: DigitalSummary;
  platformBreakdown: PlatformBreakdown[];
  adFormatPerformance: AdFormatPerformance[];
  deviceBreakdown: DeviceBreakdown[];
  demographicPerformance: DigitalDemographicPerformance[];
  weeklyTrend: DigitalWeeklyTrend[];
  creativePerformance: DigitalCreativePerformance[];
}

// 重複視聴データの全体の型定義
export interface OverallOverlap {
  tvOnly: number;
  digitalOnly: number;
  both: number;
  totalUniqueReach: number;
  overlapPercentage: number;
}

// デモグラフィック別重複視聴の型定義
export interface DemographicOverlap {
  demographic: string;
  tvOnly: number;
  digitalOnly: number;
  both: number;
  totalUniqueReach: number;
  overlapPercentage: number;
}

// プラットフォーム別重複視聴の型定義
export interface PlatformOverlap {
  platform: string;
  tvOverlap: number;
  overlapPercentage: number;
}

// 週間重複視聴トレンドの型定義
export interface WeeklyOverlapTrend {
  week: string;
  tvOnly: number;
  digitalOnly: number;
  both: number;
  totalUniqueReach: number;
  overlapPercentage: number;
}

// テレビとデジタルの重複視聴データの型定義
export interface TvDigitalOverlap {
  overallOverlap: OverallOverlap;
  demographicOverlap: DemographicOverlap[];
  platformOverlap: PlatformOverlap[];
  weeklyOverlapTrend: WeeklyOverlapTrend[];
}

// メディア貢献度の型定義
export interface MediaContribution {
  tv: {
    reachContribution: number;
    reachPercentage: number;
    conversionContribution: number;
    conversionPercentage: number;
    costPercentage: number;
  };
  digital: {
    reachContribution: number;
    reachPercentage: number;
    conversionContribution: number;
    conversionPercentage: number;
    costPercentage: number;
  };
}

// 相乗効果の型定義
export interface SynergisticEffect {
  incrementalReach: number;
  incrementalConversions: number;
  incrementalROI: number;
}

// 最適化推奨の影響の型定義
export interface ExpectedImpact {
  reachChange: number;
  conversionChange: number;
  costChange: number;
  roiChange: number;
}

// 最適化推奨の型定義
export interface OptimizationRecommendation {
  recommendation: string;
  expectedImpact: ExpectedImpact;
}

// ビジネスインパクト予測の型定義
export interface BusinessImpactProjection {
  currentTrajectory: {
    projectedSales: number;
    projectedMarketShare: number;
    projectedROI: number;
  };
  withOptimization: {
    projectedSales: number;
    projectedMarketShare: number;
    projectedROI: number;
  };
}

// 統合効果分析の型定義
export interface IntegratedEffectAnalysis {
  mediaContribution: MediaContribution;
  synergisticEffect: SynergisticEffect;
  optimizationRecommendations: OptimizationRecommendation[];
  businessImpactProjection: BusinessImpactProjection;
}

// 全体サマリー（第一層データ）
export const overallCampaignSummary: OverallCampaignSummary = {
  campaignName: "2025年春夏新商品プロモーション",
  period: {
    start: "2025-04-01",
    end: "2025-06-30",
    current: "2025-05-16"
  },
  budget: {
    total: 250000000,
    spent: 125600000,
    remaining: 124400000,
    spentPercentage: 50.24
  },
  kpi: {
    integratedReach: {
      target: 45000000,
      current: 28500000,
      percentage: 63.3,
      status: "順調" // "順調", "注意", "危険"
    },
    frequency: {
      target: 5.2,
      current: 4.8,
      percentage: 92.3,
      status: "順調"
    },
    conversion: {
      target: 850000,
      current: 420000,
      percentage: 49.4,
      status: "注意"
    },
    brandLift: {
      target: 15,
      current: 12.8,
      percentage: 85.3,
      status: "順調"
    }
  },
  businessKGI: {
    sales: {
      target: 1500000000,
      current: 720000000,
      percentage: 48,
      status: "注意"
    },
    marketShare: {
      target: 28.5,
      current: 26.2,
      percentage: 91.9,
      status: "順調"
    },
    customerAcquisition: {
      target: 120000,
      current: 68000,
      percentage: 56.7,
      status: "順調"
    }
  },
  mediaBreakdown: {
    tv: {
      budget: 150000000,
      spent: 82500000,
      reachContribution: 18200000
    },
    digital: {
      budget: 100000000,
      spent: 43100000,
      reachContribution: 10300000
    }
  },
  lastUpdated: "2025-05-16T08:30:00"
};

// テレビ広告詳細データ（第二層データ）
export const tvAdvertisingDetails: TvAdvertisingDetails = {
  summary: {
    grp: {
      target: 3000,
      current: 1850,
      percentage: 61.7
    },
    reach: {
      target: 25000000,
      current: 18200000,
      percentage: 72.8
    },
    frequency: {
      target: 4.8,
      current: 4.2,
      percentage: 87.5
    },
    cost: {
      target: 150000000,
      current: 82500000,
      percentage: 55
    },
    cpm: {
      target: 6000,
      current: 4533,
      percentage: 132.4 // 低いほど良い
    }
  },
  channelBreakdown: [
    { channel: "日本テレビ", grp: 420, reach: 4100000, frequency: 3.8, cost: 19500000, cpm: 4756 },
    { channel: "テレビ朝日", grp: 380, reach: 3800000, frequency: 3.5, cost: 17200000, cpm: 4526 },
    { channel: "TBS", grp: 350, reach: 3500000, frequency: 3.2, cost: 15800000, cpm: 4514 },
    { channel: "フジテレビ", grp: 410, reach: 4000000, frequency: 3.7, cost: 18500000, cpm: 4625 },
    { channel: "テレビ東京", grp: 290, reach: 2800000, frequency: 2.8, cost: 11500000, cpm: 4107 }
  ],
  timeSlotPerformance: [
    { timeSlot: "ゴールデン（19-22時）", grp: 850, reach: 8500000, frequency: 2.8, cost: 42500000, cpm: 5000 },
    { timeSlot: "プライム（17-19時）", grp: 420, reach: 4200000, frequency: 2.2, cost: 16800000, cpm: 4000 },
    { timeSlot: "デイタイム（9-17時）", grp: 380, reach: 3800000, frequency: 1.8, cost: 15200000, cpm: 4000 },
    { timeSlot: "レイトナイト（23-25時）", grp: 200, reach: 1700000, frequency: 1.5, cost: 8000000, cpm: 4706 }
  ],
  programGenrePerformance: [
    { genre: "ドラマ", grp: 520, reach: 5200000, frequency: 2.5, cost: 26000000, cpm: 5000 },
    { genre: "バラエティ", grp: 480, reach: 4800000, frequency: 2.3, cost: 21600000, cpm: 4500 },
    { genre: "ニュース・情報", grp: 350, reach: 3500000, frequency: 1.8, cost: 14000000, cpm: 4000 },
    { genre: "スポーツ", grp: 280, reach: 2800000, frequency: 1.6, cost: 11200000, cpm: 4000 },
    { genre: "アニメ", grp: 220, reach: 1900000, frequency: 1.4, cost: 9700000, cpm: 5105 }
  ],
  demographicPerformance: [
    { demographic: "F1（20-34歳女性）", grp: 420, reach: 2100000, frequency: 3.2, targetRatio: 1.2 },
    { demographic: "F2（35-49歳女性）", grp: 380, reach: 1900000, frequency: 2.8, targetRatio: 1.1 },
    { demographic: "F3（50-64歳女性）", grp: 320, reach: 1600000, frequency: 2.5, targetRatio: 0.9 },
    { demographic: "M1（20-34歳男性）", grp: 350, reach: 1750000, frequency: 2.6, targetRatio: 1.0 },
    { demographic: "M2（35-49歳男性）", grp: 310, reach: 1550000, frequency: 2.4, targetRatio: 0.9 },
    { demographic: "M3（50-64歳男性）", grp: 280, reach: 1400000, frequency: 2.2, targetRatio: 0.8 }
  ],
  weeklyTrend: [
    { week: "4/1-4/7", grp: 280, reach: 2800000, frequency: 1.8, cost: 12600000 },
    { week: "4/8-4/14", grp: 310, reach: 3100000, frequency: 2.0, cost: 13950000 },
    { week: "4/15-4/21", grp: 290, reach: 2900000, frequency: 1.9, cost: 13050000 },
    { week: "4/22-4/28", grp: 320, reach: 3200000, frequency: 2.1, cost: 14400000 },
    { week: "4/29-5/5", grp: 350, reach: 3500000, frequency: 2.3, cost: 15750000 },
    { week: "5/6-5/12", grp: 300, reach: 3000000, frequency: 2.0, cost: 13500000 }
  ],
  creativePerformance: [
    { creative: "新商品紹介30秒", grp: 620, reach: 6200000, frequency: 2.5, cost: 27900000, likability: 78 },
    { creative: "ブランドイメージ15秒", grp: 580, reach: 5800000, frequency: 2.3, cost: 23200000, likability: 72 },
    { creative: "キャンペーン告知15秒", grp: 420, reach: 4200000, frequency: 1.7, cost: 16800000, likability: 65 },
    { creative: "タレント起用30秒", grp: 230, reach: 2300000, frequency: 0.9, cost: 10350000, likability: 82 }
  ]
};

// デジタル広告詳細データ（第二層データ）
export const digitalAdvertisingDetails: DigitalAdvertisingDetails = {
  summary: {
    impressions: {
      target: 500000000,
      current: 285000000,
      percentage: 57
    },
    reach: {
      target: 20000000,
      current: 10300000,
      percentage: 51.5
    },
    clicks: {
      target: 7500000,
      current: 3950000,
      percentage: 52.7
    },
    ctr: {
      target: 1.5,
      current: 1.39,
      percentage: 92.7
    },
    conversions: {
      target: 850000,
      current: 420000,
      percentage: 49.4
    },
    conversionRate: {
      target: 11.3,
      current: 10.6,
      percentage: 93.8
    },
    cost: {
      target: 100000000,
      current: 43100000,
      percentage: 43.1
    },
    cpm: {
      target: 200,
      current: 151,
      percentage: 132.5 // 低いほど良い
    },
    cpc: {
      target: 13.3,
      current: 10.9,
      percentage: 122 // 低いほど良い
    },
    cpa: {
      target: 117.6,
      current: 102.6,
      percentage: 114.6 // 低いほど良い
    }
  },
  platformBreakdown: [
    { platform: "YouTube", impressions: 85000000, reach: 3100000, clicks: 1200000, ctr: 1.41, conversions: 125000, conversionRate: 10.4, cost: 12800000, cpm: 150.6, cpc: 10.7, cpa: 102.4 },
    { platform: "Twitter", impressions: 65000000, reach: 2400000, clicks: 850000, ctr: 1.31, conversions: 89000, conversionRate: 10.5, cost: 9750000, cpm: 150, cpc: 11.5, cpa: 109.6 },
    { platform: "Facebook/Instagram", impressions: 75000000, reach: 2800000, clicks: 1050000, ctr: 1.4, conversions: 110000, conversionRate: 10.5, cost: 11250000, cpm: 150, cpc: 10.7, cpa: 102.3 },
    { platform: "TikTok", impressions: 35000000, reach: 1300000, clicks: 520000, ctr: 1.49, conversions: 55000, conversionRate: 10.6, cost: 5250000, cpm: 150, cpc: 10.1, cpa: 95.5 },
    { platform: "ディスプレイ広告", impressions: 25000000, reach: 700000, clicks: 330000, ctr: 1.32, conversions: 41000, conversionRate: 12.4, cost: 4050000, cpm: 162, cpc: 12.3, cpa: 98.8 }
  ],
  adFormatPerformance: [
    { format: "動画広告", impressions: 120000000, reach: 4400000, clicks: 1680000, ctr: 1.4, conversions: 176000, conversionRate: 10.5, cost: 18000000, cpm: 150, cpc: 10.7, cpa: 102.3 },
    { format: "静止画広告", impressions: 95000000, reach: 3500000, clicks: 1330000, ctr: 1.4, conversions: 140000, conversionRate: 10.5, cost: 14250000, cpm: 150, cpc: 10.7, cpa: 101.8 },
    { format: "ネイティブ広告", impressions: 45000000, reach: 1650000, clicks: 630000, ctr: 1.4, conversions: 66000, conversionRate: 10.5, cost: 6750000, cpm: 150, cpc: 10.7, cpa: 102.3 },
    { format: "検索広告", impressions: 25000000, reach: 750000, clicks: 310000, ctr: 1.24, conversions: 38000, conversionRate: 12.3, cost: 4100000, cpm: 164, cpc: 13.2, cpa: 107.9 }
  ],
  deviceBreakdown: [
    { device: "スマートフォン", impressions: 185000000, reach: 6700000, clicks: 2570000, ctr: 1.39, conversions: 273000, conversionRate: 10.6, cost: 28000000, cpm: 151.4, cpc: 10.9, cpa: 102.6 },
    { device: "タブレット", impressions: 45000000, reach: 1650000, clicks: 630000, ctr: 1.4, conversions: 66000, conversionRate: 10.5, cost: 6750000, cpm: 150, cpc: 10.7, cpa: 102.3 },
    { device: "デスクトップ", impressions: 55000000, reach: 1950000, clicks: 750000, ctr: 1.36, conversions: 81000, conversionRate: 10.8, cost: 8350000, cpm: 151.8, cpc: 11.1, cpa: 103.1 }
  ],
  demographicPerformance: [
    { demographic: "F1（20-34歳女性）", impressions: 65000000, reach: 2400000, clicks: 910000, ctr: 1.4, conversions: 95000, conversionRate: 10.4, targetRatio: 1.2 },
    { demographic: "F2（35-49歳女性）", impressions: 60000000, reach: 2200000, clicks: 840000, ctr: 1.4, conversions: 88000, conversionRate: 10.5, targetRatio: 1.1 },
    { demographic: "F3（50-64歳女性）", impressions: 45000000, reach: 1650000, clicks: 630000, ctr: 1.4, conversions: 66000, conversionRate: 10.5, targetRatio: 0.9 },
    { demographic: "M1（20-34歳男性）", impressions: 50000000, reach: 1800000, clicks: 700000, ctr: 1.4, conversions: 74000, conversionRate: 10.6, targetRatio: 1.0 },
    { demographic: "M2（35-49歳男性）", impressions: 40000000, reach: 1450000, clicks: 560000, ctr: 1.4, conversions: 59000, conversionRate: 10.5, targetRatio: 0.9 },
    { demographic: "M3（50-64歳男性）", impressions: 25000000, reach: 900000, clicks: 350000, ctr: 1.4, conversions: 37000, conversionRate: 10.6, targetRatio: 0.8 }
  ],
  weeklyTrend: [
    { week: "4/1-4/7", impressions: 42000000, reach: 1550000, clicks: 590000, ctr: 1.4, conversions: 62000, cost: 6400000 },
    { week: "4/8-4/14", impressions: 45000000, reach: 1650000, clicks: 630000, ctr: 1.4, conversions: 66000, cost: 6800000 },
    { week: "4/15-4/21", impressions: 48000000, reach: 1750000, clicks: 670000, ctr: 1.4, conversions: 70000, cost: 7200000 },
    { week: "4/22-4/28", impressions: 50000000, reach: 1850000, clicks: 700000, ctr: 1.4, conversions: 74000, cost: 7500000 },
    { week: "4/29-5/5", impressions: 52000000, reach: 1900000, clicks: 730000, ctr: 1.4, conversions: 77000, cost: 7800000 },
    { week: "5/6-5/12", impressions: 48000000, reach: 1750000, clicks: 670000, ctr: 1.4, conversions: 70000, cost: 7200000 }
  ],
  creativePerformance: [
    { creative: "新商品紹介動画15秒", impressions: 75000000, reach: 2750000, clicks: 1050000, ctr: 1.4, conversions: 110000, conversionRate: 10.5, cost: 11250000, engagement: 82 },
    { creative: "ブランドイメージバナー", impressions: 65000000, reach: 2400000, clicks: 910000, ctr: 1.4, conversions: 95000, conversionRate: 10.4, cost: 9750000, engagement: 75 },
    { creative: "キャンペーン告知動画10秒", impressions: 55000000, reach: 2000000, clicks: 770000, ctr: 1.4, conversions: 81000, conversionRate: 10.5, cost: 8250000, engagement: 78 },
    { creative: "インフルエンサーコラボ", impressions: 45000000, reach: 1650000, clicks: 630000, ctr: 1.4, conversions: 66000, conversionRate: 10.5, cost: 6750000, engagement: 88 },
    { creative: "商品特徴紹介カルーセル", impressions: 45000000, reach: 1650000, clicks: 630000, ctr: 1.4, conversions: 66000, conversionRate: 10.5, cost: 6750000, engagement: 80 }
  ]
};

// テレビとデジタルの重複視聴データ
export const tvDigitalOverlap: TvDigitalOverlap = {
  overallOverlap: {
    tvOnly: 10500000,
    digitalOnly: 2600000,
    both: 7700000,
    totalUniqueReach: 20800000,
    overlapPercentage: 37
  },
  demographicOverlap: [
    { demographic: "F1（20-34歳女性）", tvOnly: 1200000, digitalOnly: 500000, both: 1600000, totalUniqueReach: 3300000, overlapPercentage: 48.5 },
    { demographic: "F2（35-49歳女性）", tvOnly: 1100000, digitalOnly: 400000, both: 1500000, totalUniqueReach: 3000000, overlapPercentage: 50 },
    { demographic: "F3（50-64歳女性）", tvOnly: 1000000, digitalOnly: 250000, both: 1350000, totalUniqueReach: 2600000, overlapPercentage: 51.9 },
    { demographic: "M1（20-34歳男性）", tvOnly: 950000, digitalOnly: 450000, both: 1300000, totalUniqueReach: 2700000, overlapPercentage: 48.1 },
    { demographic: "M2（35-49歳男性）", tvOnly: 900000, digitalOnly: 350000, both: 1200000, totalUniqueReach: 2450000, overlapPercentage: 49 },
    { demographic: "M3（50-64歳男性）", tvOnly: 850000, digitalOnly: 200000, both: 1150000, totalUniqueReach: 2200000, overlapPercentage: 52.3 }
  ],
  platformOverlap: [
    { platform: "YouTube", tvOverlap: 1800000, overlapPercentage: 58.1 },
    { platform: "Twitter", tvOverlap: 1400000, overlapPercentage: 58.3 },
    { platform: "Facebook/Instagram", tvOverlap: 1650000, overlapPercentage: 58.9 },
    { platform: "TikTok", tvOverlap: 750000, overlapPercentage: 57.7 },
    { platform: "ディスプレイ広告", tvOverlap: 400000, overlapPercentage: 57.1 }
  ],
  weeklyOverlapTrend: [
    { week: "4/1-4/7", tvOnly: 1600000, digitalOnly: 350000, both: 1200000, totalUniqueReach: 3150000, overlapPercentage: 38.1 },
    { week: "4/8-4/14", tvOnly: 1750000, digitalOnly: 400000, both: 1250000, totalUniqueReach: 3400000, overlapPercentage: 36.8 },
    { week: "4/15-4/21", tvOnly: 1650000, digitalOnly: 450000, both: 1300000, totalUniqueReach: 3400000, overlapPercentage: 38.2 },
    { week: "4/22-4/28", tvOnly: 1850000, digitalOnly: 500000, both: 1350000, totalUniqueReach: 3700000, overlapPercentage: 36.5 },
    { week: "4/29-5/5", tvOnly: 2000000, digitalOnly: 550000, both: 1350000, totalUniqueReach: 3900000, overlapPercentage: 34.6 },
    { week: "5/6-5/12", tvOnly: 1750000, digitalOnly: 500000, both: 1250000, totalUniqueReach: 3500000, overlapPercentage: 35.7 }
  ]
};

// 統合効果分析
export const integratedEffectAnalysis: IntegratedEffectAnalysis = {
  mediaContribution: {
    tv: {
      reachContribution: 18200000,
      reachPercentage: 63.9,
      conversionContribution: 252000,
      conversionPercentage: 60,
      costPercentage: 65.7
    },
    digital: {
      reachContribution: 10300000,
      reachPercentage: 36.1,
      conversionContribution: 168000,
      conversionPercentage: 40,
      costPercentage: 34.3
    }
  },
  synergisticEffect: {
    incrementalReach: 2500000,
    incrementalConversions: 42000,
    incrementalROI: 18.5
  },
  optimizationRecommendations: [
    {
      recommendation: "テレビCMのゴールデンタイム配分を10%削減し、プライムタイムを15%増加",
      expectedImpact: {
        reachChange: 500000,
        conversionChange: 15000,
        costChange: -3500000,
        roiChange: 5.2
      }
    },
    {
      recommendation: "YouTubeとTikTokの予算配分を20%増加、ディスプレイ広告を15%削減",
      expectedImpact: {
        reachChange: 350000,
        conversionChange: 12000,
        costChange: 1200000,
        roiChange: 3.8
      }
    },
    {
      recommendation: "F1・F2ターゲットへのリーチ強化のためInstagramの予算を25%増加",
      expectedImpact: {
        reachChange: 280000,
        conversionChange: 9500,
        costChange: 2100000,
        roiChange: 2.5
      }
    }
  ],
  businessImpactProjection: {
    currentTrajectory: {
      projectedSales: 1450000000,
      projectedMarketShare: 27.8,
      projectedROI: 11.5
    },
    withOptimization: {
      projectedSales: 1580000000,
      projectedMarketShare: 29.2,
      projectedROI: 12.8
    }
  }
}; 