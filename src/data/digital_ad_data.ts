// デジタル広告モニタリングダッシュボード用モックデータ型定義

// 期間の型定義
export interface Period {
  start: string;
  end: string;
  current: string;
}

// KPIカードの型定義
export interface KpiCard {
  metric: string;
  current: number;
  target: number;
  percentage: number;
  trend: string;
  status: '順調' | '注意' | '危険';
}

// 主要KPIサマリーの型定義
export interface DigitalKpiSummary {
  campaignName: string;
  period: Period;
  kpiCards: KpiCard[];
  lastUpdated: string;
}

// 日次の時系列データの型定義
export interface DailyTimeSeriesData {
  dates: string[];
  impressions: number[];
  clicks: number[];
  conversions: number[];
  cost: number[];
  revenue: number[];
}

// 週次の時系列データの型定義
export interface WeeklyTimeSeriesData {
  weeks: string[];
  impressions: number[];
  clicks: number[];
  conversions: number[];
  cost: number[];
  revenue: number[];
  ctr: number[];
  conversionRate: number[];
  cpm: number[];
  cpc: number[];
  cpa: number[];
  roas: number[];
}

// 月次の時系列データの型定義
export interface MonthlyTimeSeriesData {
  months: string[];
  impressions: number[];
  clicks: number[];
  conversions: number[];
  cost: number[];
  revenue: number[];
  ctr: number[];
  conversionRate: number[];
  cpm: number[];
  cpc: number[];
  cpa: number[];
  roas: number[];
}

// 時系列データの型定義
export interface DigitalTimeSeriesData {
  daily: DailyTimeSeriesData;
  weekly: WeeklyTimeSeriesData;
  monthly: MonthlyTimeSeriesData;
}

// メディア別パフォーマンスの型定義
export interface DigitalMediaPerformance {
  media: string;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  conversionRate: number;
  cost: number;
  cpm: number;
  cpc: number;
  cpa: number;
  roas: number;
  revenue: number;
  budgetUtilization: number;
  targetAchievement: number;
}

// ターゲットオーディエンス別パフォーマンスの型定義
export interface DigitalAudiencePerformance {
  audience: string;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  conversionRate: number;
  cost: number;
  cpm: number;
  cpc: number;
  cpa: number;
  roas: number;
  revenue: number;
  targetRatio: number;
}

// デバイス別パフォーマンスの型定義
export interface DigitalDevicePerformance {
  device: string;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  conversionRate: number;
  cost: number;
  cpm: number;
  cpc: number;
  cpa: number;
  roas: number;
  revenue: number;
  shareOfVoice: number;
}

// クリエイティブ別パフォーマンスの型定義
export interface DigitalCreativePerformance {
  creative: string;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  conversionRate: number;
  cost: number;
  cpm: number;
  cpc: number;
  cpa: number;
  roas: number;
  revenue: number;
  engagement: number;
}

// 地域別パフォーマンスの型定義
export interface DigitalRegionPerformance {
  region: string;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  conversionRate: number;
  cost: number;
  cpm: number;
  cpc: number;
  cpa: number;
  roas: number;
  revenue: number;
  shareOfVoice: number;
}

// 最適化レコメンデーションの期待効果の型定義
export interface ExpectedImpact {
  impressions: number;
  clicks: number;
  conversions: number;
  cost: number;
  revenue: number;
  roi: number | string;
}

// 最適化レコメンデーションの型定義
export interface OptimizationRecommendation {
  id: number;
  title: string;
  description: string;
  expectedImpact: ExpectedImpact;
  priority: string;
  implementationDifficulty: string;
  status: string;
}

// シェアオブボイスの型定義
export interface ShareOfVoice {
  competitor: string;
  share: number;
  trend: string;
}

// キーワードランキングの型定義
export interface KeywordRanking {
  keyword: string;
  ownRanking: number;
  competitorARanking: number;
  competitorBRanking: number;
  competitorCRanking: number;
}

// 広告クリエイティブ比較の型定義
export interface AdCreativeComparison {
  metric: string;
  own: number;
  industryAverage: number;
  topCompetitor: number;
}

// メディア戦略比較の型定義
export interface MediaStrategyComparison {
  own: {
    search: number;
    display: number;
    video: number;
    social: number;
  };
  competitorA: {
    search: number;
    display: number;
    video: number;
    social: number;
  };
  competitorB: {
    search: number;
    display: number;
    video: number;
    social: number;
  };
  industryAverage: {
    search: number;
    display: number;
    video: number;
    social: number;
  };
}

// 競合分析データの型定義
export interface DigitalCompetitiveAnalysis {
  shareOfVoice: ShareOfVoice[];
  keywordRankings: KeywordRanking[];
  adCreativeComparison: AdCreativeComparison[];
  mediaStrategyComparison: MediaStrategyComparison;
}

// モックデータ定義
export const digitalKPISummary: DigitalKpiSummary = {
  campaignName: "2025年夏季キャンペーン",
  period: {
    start: "2025-05-01",
    end: "2025-07-31",
    current: "2025-05-31"
  },
  kpiCards: [
    {
      metric: "インプレッション",
      current: 3500000,
      target: 5000000,
      percentage: 70,
      trend: "+5.2%",
      status: "順調"
    },
    {
      metric: "コンバージョン",
      current: 1250,
      target: 2000,
      percentage: 62.5,
      trend: "+3.8%",
      status: "注意"
    },
    {
      metric: "ROAS",
      current: 320,
      target: 300,
      percentage: 106.7,
      trend: "+8.5%",
      status: "順調"
    },
    {
      metric: "CTR",
      current: 1.8,
      target: 2.5,
      percentage: 72,
      trend: "-0.3%",
      status: "注意"
    }
  ],
  lastUpdated: "2025-06-01 09:30"
};

export const digitalTimeSeriesData: DigitalTimeSeriesData = {
  daily: {
    dates: ["5/25", "5/26", "5/27", "5/28", "5/29", "5/30", "5/31"],
    impressions: [120000, 115000, 125000, 135000, 140000, 118000, 130000],
    clicks: [2400, 2300, 2500, 2700, 2800, 2360, 2600],
    conversions: [48, 46, 50, 54, 56, 47, 52],
    cost: [240000, 230000, 250000, 270000, 280000, 236000, 260000],
    revenue: [720000, 690000, 750000, 810000, 840000, 705000, 780000]
  },
  weekly: {
    weeks: ["5/1-5/7", "5/8-5/14", "5/15-5/21", "5/22-5/28", "5/29-6/4"],
    impressions: [800000, 820000, 850000, 880000, 900000],
    clicks: [16000, 16400, 17000, 17600, 18000],
    conversions: [320, 328, 340, 352, 360],
    cost: [1600000, 1640000, 1700000, 1760000, 1800000],
    revenue: [4800000, 4920000, 5100000, 5280000, 5400000],
    ctr: [2.0, 2.0, 2.0, 2.0, 2.0],
    conversionRate: [2.0, 2.0, 2.0, 2.0, 2.0],
    cpm: [2000, 2000, 2000, 2000, 2000],
    cpc: [100, 100, 100, 100, 100],
    cpa: [5000, 5000, 5000, 5000, 5000],
    roas: [300, 300, 300, 300, 300]
  },
  monthly: {
    months: ["1月", "2月", "3月", "4月", "5月"],
    impressions: [3500000, 3600000, 3800000, 4000000, 4200000],
    clicks: [70000, 72000, 76000, 80000, 84000],
    conversions: [1400, 1440, 1520, 1600, 1680],
    cost: [7000000, 7200000, 7600000, 8000000, 8400000],
    revenue: [21000000, 21600000, 22800000, 24000000, 25200000],
    ctr: [2.0, 2.0, 2.0, 2.0, 2.0],
    conversionRate: [2.0, 2.0, 2.0, 2.0, 2.0],
    cpm: [2000, 2000, 2000, 2000, 2000],
    cpc: [100, 100, 100, 100, 100],
    cpa: [5000, 5000, 5000, 5000, 5000],
    roas: [300, 300, 300, 300, 300]
  }
};

export const digitalMediaPerformance: DigitalMediaPerformance[] = [
  {
    media: "Google検索広告",
    impressions: 1200000,
    clicks: 36000,
    ctr: 3.0,
    conversions: 720,
    conversionRate: 2.0,
    cost: 3600000,
    cpm: 3000,
    cpc: 100,
    cpa: 5000,
    roas: 350,
    revenue: 12600000,
    budgetUtilization: 90,
    targetAchievement: 96
  },
  {
    media: "Google ディスプレイ",
    impressions: 1500000,
    clicks: 15000,
    ctr: 1.0,
    conversions: 300,
    conversionRate: 2.0,
    cost: 1500000,
    cpm: 1000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 4500000,
    budgetUtilization: 85,
    targetAchievement: 90
  },
  {
    media: "YouTube",
    impressions: 800000,
    clicks: 16000,
    ctr: 2.0,
    conversions: 320,
    conversionRate: 2.0,
    cost: 1600000,
    cpm: 2000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 4800000,
    budgetUtilization: 95,
    targetAchievement: 98
  },
  {
    media: "Meta広告",
    impressions: 1000000,
    clicks: 20000,
    ctr: 2.0,
    conversions: 400,
    conversionRate: 2.0,
    cost: 2000000,
    cpm: 2000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 6000000,
    budgetUtilization: 88,
    targetAchievement: 92
  },
  {
    media: "Twitter",
    impressions: 500000,
    clicks: 5000,
    ctr: 1.0,
    conversions: 100,
    conversionRate: 2.0,
    cost: 500000,
    cpm: 1000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 1500000,
    budgetUtilization: 80,
    targetAchievement: 85
  }
];

export const digitalAudiencePerformance: DigitalAudiencePerformance[] = [
  {
    audience: "既存顧客",
    impressions: 1000000,
    clicks: 30000,
    ctr: 3.0,
    conversions: 900,
    conversionRate: 3.0,
    cost: 3000000,
    cpm: 3000,
    cpc: 100,
    cpa: 3333,
    roas: 450,
    revenue: 13500000,
    targetRatio: 120
  },
  {
    audience: "類似オーディエンス",
    impressions: 1500000,
    clicks: 30000,
    ctr: 2.0,
    conversions: 600,
    conversionRate: 2.0,
    cost: 3000000,
    cpm: 2000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 9000000,
    targetRatio: 100
  },
  {
    audience: "インマーケット",
    impressions: 1200000,
    clicks: 24000,
    ctr: 2.0,
    conversions: 480,
    conversionRate: 2.0,
    cost: 2400000,
    cpm: 2000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 7200000,
    targetRatio: 100
  },
  {
    audience: "新規ユーザー",
    impressions: 1300000,
    clicks: 13000,
    ctr: 1.0,
    conversions: 195,
    conversionRate: 1.5,
    cost: 1300000,
    cpm: 1000,
    cpc: 100,
    cpa: 6667,
    roas: 225,
    revenue: 2925000,
    targetRatio: 75
  }
];

export const digitalDevicePerformance: DigitalDevicePerformance[] = [
  {
    device: "スマートフォン",
    impressions: 2500000,
    clicks: 50000,
    ctr: 2.0,
    conversions: 1000,
    conversionRate: 2.0,
    cost: 5000000,
    cpm: 2000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 15000000,
    shareOfVoice: 65
  },
  {
    device: "デスクトップ",
    impressions: 1000000,
    clicks: 25000,
    ctr: 2.5,
    conversions: 625,
    conversionRate: 2.5,
    cost: 2500000,
    cpm: 2500,
    cpc: 100,
    cpa: 4000,
    roas: 375,
    revenue: 9375000,
    shareOfVoice: 25
  },
  {
    device: "タブレット",
    impressions: 500000,
    clicks: 12500,
    ctr: 2.5,
    conversions: 250,
    conversionRate: 2.0,
    cost: 1250000,
    cpm: 2500,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 3750000,
    shareOfVoice: 10
  }
];

export const digitalCreativePerformance: DigitalCreativePerformance[] = [
  {
    creative: "夏季キャンペーンA",
    impressions: 1200000,
    clicks: 36000,
    ctr: 3.0,
    conversions: 900,
    conversionRate: 2.5,
    cost: 3600000,
    cpm: 3000,
    cpc: 100,
    cpa: 4000,
    roas: 375,
    revenue: 13500000,
    engagement: 4.5
  },
  {
    creative: "夏季キャンペーンB",
    impressions: 1100000,
    clicks: 22000,
    ctr: 2.0,
    conversions: 440,
    conversionRate: 2.0,
    cost: 2200000,
    cpm: 2000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 6600000,
    engagement: 3.8
  },
  {
    creative: "商品紹介動画",
    impressions: 800000,
    clicks: 24000,
    ctr: 3.0,
    conversions: 480,
    conversionRate: 2.0,
    cost: 2400000,
    cpm: 3000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 7200000,
    engagement: 5.2
  },
  {
    creative: "顧客事例",
    impressions: 500000,
    clicks: 15000,
    ctr: 3.0,
    conversions: 375,
    conversionRate: 2.5,
    cost: 1500000,
    cpm: 3000,
    cpc: 100,
    cpa: 4000,
    roas: 375,
    revenue: 5625000,
    engagement: 4.9
  },
  {
    creative: "特典紹介",
    impressions: 400000,
    clicks: 8000,
    ctr: 2.0,
    conversions: 160,
    conversionRate: 2.0,
    cost: 800000,
    cpm: 2000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 2400000,
    engagement: 3.5
  }
];

export const digitalRegionPerformance: DigitalRegionPerformance[] = [
  {
    region: "東京",
    impressions: 1500000,
    clicks: 45000,
    ctr: 3.0,
    conversions: 1125,
    conversionRate: 2.5,
    cost: 4500000,
    cpm: 3000,
    cpc: 100,
    cpa: 4000,
    roas: 375,
    revenue: 16875000,
    shareOfVoice: 32
  },
  {
    region: "大阪",
    impressions: 800000,
    clicks: 24000,
    ctr: 3.0,
    conversions: 480,
    conversionRate: 2.0,
    cost: 2400000,
    cpm: 3000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 7200000,
    shareOfVoice: 24
  },
  {
    region: "名古屋",
    impressions: 600000,
    clicks: 12000,
    ctr: 2.0,
    conversions: 240,
    conversionRate: 2.0,
    cost: 1200000,
    cpm: 2000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 3600000,
    shareOfVoice: 18
  },
  {
    region: "福岡",
    impressions: 400000,
    clicks: 8000,
    ctr: 2.0,
    conversions: 160,
    conversionRate: 2.0,
    cost: 800000,
    cpm: 2000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 2400000,
    shareOfVoice: 15
  },
  {
    region: "札幌",
    impressions: 300000,
    clicks: 6000,
    ctr: 2.0,
    conversions: 120,
    conversionRate: 2.0,
    cost: 600000,
    cpm: 2000,
    cpc: 100,
    cpa: 5000,
    roas: 300,
    revenue: 1800000,
    shareOfVoice: 11
  }
];

export const digitalOptimizationRecommendations: OptimizationRecommendation[] = [
  {
    id: 1,
    title: "モバイル入札調整の最適化",
    description: "スマートフォンでのコンバージョン率が低いため、入札単価を10%引き下げ、予算を他のデバイスに再配分することを推奨します。",
    expectedImpact: {
      impressions: -50000,
      clicks: 1000,
      conversions: 25,
      cost: -50000,
      revenue: 375000,
      roi: "+5%"
    },
    priority: "高",
    implementationDifficulty: "低",
    status: "未実施"
  },
  {
    id: 2,
    title: "新規クリエイティブA/Bテスト",
    description: "現在のクリエイティブのCTRが目標を下回っているため、新しいビジュアルと訴求ポイントを設定した2つのバリエーションをテストすることを推奨します。",
    expectedImpact: {
      impressions: 0,
      clicks: 2000,
      conversions: 40,
      cost: 0,
      revenue: 600000,
      roi: "+3%"
    },
    priority: "中",
    implementationDifficulty: "中",
    status: "未実施"
  },
  {
    id: 3,
    title: "検索キーワードの拡張",
    description: "検索クエリレポートに基づいて、高いコンバージョン率を示す新しい30のキーワードを追加することを推奨します。",
    expectedImpact: {
      impressions: 100000,
      clicks: 3000,
      conversions: 60,
      cost: 300000,
      revenue: 900000,
      roi: "+3%"
    },
    priority: "高",
    implementationDifficulty: "低",
    status: "未実施"
  }
];

export const digitalCompetitiveAnalysis: DigitalCompetitiveAnalysis = {
  shareOfVoice: [
    {
      competitor: "自社",
      share: 35,
      trend: "+2%"
    },
    {
      competitor: "競合A",
      share: 28,
      trend: "-1%"
    },
    {
      competitor: "競合B",
      share: 22,
      trend: "+1%"
    },
    {
      competitor: "競合C",
      share: 15,
      trend: "0%"
    }
  ],
  keywordRankings: [
    {
      keyword: "主力商品",
      ownRanking: 1,
      competitorARanking: 3,
      competitorBRanking: 5,
      competitorCRanking: 7
    },
    {
      keyword: "業界 サービス",
      ownRanking: 2,
      competitorARanking: 1,
      competitorBRanking: 4,
      competitorCRanking: 6
    },
    {
      keyword: "人気 製品",
      ownRanking: 4,
      competitorARanking: 2,
      competitorBRanking: 1,
      competitorCRanking: 5
    },
    {
      keyword: "ベスト 選び方",
      ownRanking: 3,
      competitorARanking: 5,
      competitorBRanking: 2,
      competitorCRanking: 8
    },
    {
      keyword: "比較 レビュー",
      ownRanking: 5,
      competitorARanking: 4,
      competitorBRanking: 3,
      competitorCRanking: 2
    }
  ],
  adCreativeComparison: [
    {
      metric: "CTR",
      own: 2.5,
      industryAverage: 2.0,
      topCompetitor: 2.7
    },
    {
      metric: "コンバージョン率",
      own: 2.2,
      industryAverage: 1.8,
      topCompetitor: 2.0
    },
    {
      metric: "CPC",
      own: 95,
      industryAverage: 105,
      topCompetitor: 90
    },
    {
      metric: "品質スコア",
      own: 8,
      industryAverage: 6,
      topCompetitor: 9
    }
  ],
  mediaStrategyComparison: {
    own: {
      search: 40,
      display: 25,
      video: 20,
      social: 15
    },
    competitorA: {
      search: 45,
      display: 20,
      video: 15,
      social: 20
    },
    competitorB: {
      search: 35,
      display: 30,
      video: 25,
      social: 10
    },
    industryAverage: {
      search: 42,
      display: 23,
      video: 18,
      social: 17
    }
  }
}; 