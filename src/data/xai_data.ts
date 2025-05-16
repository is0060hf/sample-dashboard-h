// XAI（Explainable AI）指標の可視化ダッシュボード用モックデータ

// モデル概要の型定義
export interface ModelSummary {
  modelName: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  lastUpdated: string;
  trainingDataSize: number;
  predictionsMade: number;
  confidenceThreshold: number;
}

// AIモデルの判断根拠となる重要特徴量の型定義
export interface FeatureImportance {
  feature: string;
  importance: number;
  direction: 'positive' | 'negative' | 'neutral';
}

// 個別予測の説明データの型定義
export interface Factor {
  factor: string;
  value: string;
  impact: number;
  normalRange: string;
}

export interface PredictionExplanation {
  customerId: string;
  customerName: string;
  prediction: string;
  probability: number;
  topFactors: Factor[];
  recommendedActions: string[];
}

// モデル性能の時系列データの型定義
export interface ModelPerformance {
  date: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
}

// 特徴量の相関関係の型定義
export interface FeatureCorrelation {
  feature1: string;
  feature2: string;
  correlation: number;
}

// 顧客セグメント別のモデル性能の型定義
export interface SegmentPerformance {
  segment: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  sampleSize: number;
}

// 予測結果のカテゴリ分布の型定義
export interface RiskCategory {
  category: string;
  count: number;
  percentage: number;
}

export interface ConfidenceRange {
  confidenceRange: string;
  count: number;
  percentage: number;
}

export interface PredictionDistribution {
  riskCategories: RiskCategory[];
  confidenceDistribution: ConfidenceRange[];
}

// モデルの説明可能性メトリクスの型定義
export interface ExplainabilityMetrics {
  globalExplainabilityScore: number;
  localExplainabilityScore: number;
  featureCoverageRatio: number;
  averageExplanationLength: number;
  userFeedbackScore: number;
  explanationConsistency: number;
}

export const xaiModelSummary: ModelSummary = {
  modelName: "顧客離反予測モデル",
  accuracy: 0.87,
  precision: 0.83,
  recall: 0.79,
  f1Score: 0.81,
  lastUpdated: "2025-05-10T09:30:00",
  trainingDataSize: 25000,
  predictionsMade: 3450,
  confidenceThreshold: 0.75
};

// AIモデルの判断根拠となる重要特徴量
export const xaiFeatureImportance: FeatureImportance[] = [
  { feature: "過去3ヶ月の利用頻度", importance: 0.28, direction: "negative" },
  { feature: "顧客サポート問い合わせ回数", importance: 0.22, direction: "positive" },
  { feature: "契約更新までの残日数", importance: 0.18, direction: "negative" },
  { feature: "平均購入金額の変化率", importance: 0.12, direction: "negative" },
  { feature: "ウェブサイト訪問頻度", importance: 0.08, direction: "negative" },
  { feature: "キャンペーン反応率", importance: 0.06, direction: "negative" },
  { feature: "競合他社サービス利用", importance: 0.04, direction: "positive" },
  { feature: "顧客年齢", importance: 0.02, direction: "neutral" }
];

// 個別予測の説明データ
export const xaiPredictionExplanations: PredictionExplanation[] = [
  {
    customerId: "CUS-10045",
    customerName: "山田太郎",
    prediction: "離反リスク高",
    probability: 0.89,
    topFactors: [
      { factor: "過去3ヶ月の利用頻度", value: "月1回未満", impact: -0.35, normalRange: "月4回以上" },
      { factor: "顧客サポート問い合わせ回数", value: "5回", impact: 0.28, normalRange: "0-1回" },
      { factor: "契約更新までの残日数", value: "15日", impact: -0.22, normalRange: "90日以上" }
    ],
    recommendedActions: [
      "特別更新キャンペーンの案内",
      "カスタマーサクセスチームによる接触",
      "利用促進インセンティブの提供"
    ]
  },
  {
    customerId: "CUS-23456",
    customerName: "佐藤花子",
    prediction: "離反リスク中",
    probability: 0.65,
    topFactors: [
      { factor: "平均購入金額の変化率", value: "-15%", impact: -0.25, normalRange: "±5%" },
      { factor: "ウェブサイト訪問頻度", value: "週1回", impact: -0.18, normalRange: "週3回以上" },
      { factor: "契約更新までの残日数", value: "45日", impact: -0.12, normalRange: "90日以上" }
    ],
    recommendedActions: [
      "パーソナライズドオファーの送信",
      "新機能のご案内メール",
      "ロイヤルティプログラムへの招待"
    ]
  },
  {
    customerId: "CUS-34567",
    customerName: "鈴木一郎",
    prediction: "離反リスク低",
    probability: 0.23,
    topFactors: [
      { factor: "過去3ヶ月の利用頻度", value: "週2回", impact: 0.18, normalRange: "月4回以上" },
      { factor: "平均購入金額の変化率", value: "+8%", impact: 0.15, normalRange: "±5%" },
      { factor: "ウェブサイト訪問頻度", value: "週4回", impact: 0.12, normalRange: "週3回以上" }
    ],
    recommendedActions: [
      "アップセル商品の提案",
      "紹介プログラムの案内",
      "VIPステータスへのアップグレード"
    ]
  }
];

// モデル性能の時系列データ
export const xaiModelPerformanceHistory: ModelPerformance[] = [
  { date: "2025-01-01", accuracy: 0.81, precision: 0.77, recall: 0.72, f1Score: 0.74 },
  { date: "2025-02-01", accuracy: 0.82, precision: 0.78, recall: 0.74, f1Score: 0.76 },
  { date: "2025-03-01", accuracy: 0.84, precision: 0.80, recall: 0.75, f1Score: 0.77 },
  { date: "2025-04-01", accuracy: 0.85, precision: 0.81, recall: 0.77, f1Score: 0.79 },
  { date: "2025-05-01", accuracy: 0.87, precision: 0.83, recall: 0.79, f1Score: 0.81 }
];

// 特徴量の相関関係
export const xaiFeatureCorrelations: FeatureCorrelation[] = [
  { feature1: "過去3ヶ月の利用頻度", feature2: "ウェブサイト訪問頻度", correlation: 0.72 },
  { feature1: "過去3ヶ月の利用頻度", feature2: "平均購入金額の変化率", correlation: 0.65 },
  { feature1: "顧客サポート問い合わせ回数", feature2: "契約更新までの残日数", correlation: -0.58 },
  { feature1: "顧客サポート問い合わせ回数", feature2: "キャンペーン反応率", correlation: -0.42 },
  { feature1: "平均購入金額の変化率", feature2: "キャンペーン反応率", correlation: 0.39 },
  { feature1: "ウェブサイト訪問頻度", feature2: "キャンペーン反応率", correlation: 0.35 },
  { feature1: "競合他社サービス利用", feature2: "契約更新までの残日数", correlation: -0.31 },
  { feature1: "顧客年齢", feature2: "ウェブサイト訪問頻度", correlation: -0.28 }
];

// 顧客セグメント別のモデル性能
export const xaiSegmentPerformance: SegmentPerformance[] = [
  { segment: "新規顧客（1年未満）", accuracy: 0.82, precision: 0.79, recall: 0.75, f1Score: 0.77, sampleSize: 8500 },
  { segment: "中堅顧客（1-3年）", accuracy: 0.88, precision: 0.85, recall: 0.81, f1Score: 0.83, sampleSize: 12000 },
  { segment: "長期顧客（3年以上）", accuracy: 0.91, precision: 0.89, recall: 0.84, f1Score: 0.86, sampleSize: 4500 },
  { segment: "法人顧客", accuracy: 0.86, precision: 0.84, recall: 0.80, f1Score: 0.82, sampleSize: 6200 },
  { segment: "個人顧客", accuracy: 0.85, precision: 0.81, recall: 0.78, f1Score: 0.79, sampleSize: 18800 }
];

// 予測結果の分布
export const xaiPredictionDistribution: PredictionDistribution = {
  riskCategories: [
    { category: "高リスク（離反確率 > 80%）", count: 450, percentage: 13 },
    { category: "中リスク（離反確率 50-80%）", count: 820, percentage: 24 },
    { category: "低リスク（離反確率 20-50%）", count: 1280, percentage: 37 },
    { category: "最小リスク（離反確率 < 20%）", count: 900, percentage: 26 }
  ],
  confidenceDistribution: [
    { confidenceRange: "90-100%", count: 620, percentage: 18 },
    { confidenceRange: "80-90%", count: 950, percentage: 28 },
    { confidenceRange: "70-80%", count: 1100, percentage: 32 },
    { confidenceRange: "60-70%", count: 580, percentage: 17 },
    { confidenceRange: "< 60%", count: 200, percentage: 5 }
  ]
};

// モデルの説明可能性メトリクス
export const xaiExplainabilityMetrics: ExplainabilityMetrics = {
  globalExplainabilityScore: 0.85,
  localExplainabilityScore: 0.78,
  featureCoverageRatio: 0.92,
  averageExplanationLength: 3.5,
  userFeedbackScore: 4.2,
  explanationConsistency: 0.88
}; 