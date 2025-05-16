"use client";

import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Paper, Card, CardContent, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';

// モックデータのインポート
import { xaiModelSummary, xaiFeatureImportance, xaiPredictionExplanations, xaiModelPerformanceHistory } from '@/data/xai_data';

// Flexboxを使用したグリッドの代替
const FlexContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),
}));

const FlexItem = styled(Box)(({ theme }) => ({
  flex: '1 1 100%',
  [theme.breakpoints.up('sm')]: {
    flex: '1 1 calc(50% - 12px)',
  },
  [theme.breakpoints.up('md')]: {
    flex: '1 1 calc(25% - 18px)',
  },
}));

const FlexItemHalf = styled(Box)(({ theme }) => ({
  flex: '1 1 100%',
  [theme.breakpoints.up('md')]: {
    flex: '1 1 calc(50% - 12px)',
  },
}));

// KPIカードコンポーネント
const KPICard = ({ title, value, status, description, color }: { 
  title: string, 
  value: string | number, 
  status?: 'good' | 'warning' | 'danger', 
  description?: string,
  color?: string
}) => {
  // ステータスに基づく色の決定
  const getStatusColor = () => {
    if (!status) return 'inherit';
    switch (status) {
      case 'good': return '#4caf50';
      case 'warning': return '#ff9800';
      case 'danger': return '#f44336';
      default: return 'inherit';
    }
  };

  return (
    <Card sx={{ height: '100%', backgroundColor: color }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div" sx={{ color: getStatusColor() }}>
          {value}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

// 特徴量重要度チャートコンポーネント
const FeatureImportanceChart = ({ data }: { data: typeof xaiFeatureImportance }) => {
  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>特徴量重要度</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="feature" />
          <Tooltip formatter={(value) => [`${value}`, '重要度']} />
          <Legend />
          <Bar dataKey="importance" fill="#8884d8" name="重要度" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

// 混同行列コンポーネント
const ConfusionMatrixChart = () => {
  // 混同行列のデータ
  const confusionMatrix = {
    labels: ["離反なし", "離反あり"],
    matrix: [
      [850, 150],
      [200, 800]
    ]
  };

  // 混同行列のデータ変換
  const matrixData = [];
  for (let i = 0; i < confusionMatrix.labels.length; i++) {
    for (let j = 0; j < confusionMatrix.labels.length; j++) {
      matrixData.push({
        actual: confusionMatrix.labels[i],
        predicted: confusionMatrix.labels[j],
        value: confusionMatrix.matrix[i][j]
      });
    }
  }

  // 色のスケール（値に応じて色の濃さを変える）
  const getColor = (value: number) => {
    const maxValue = Math.max(...confusionMatrix.matrix.flat());
    const intensity = Math.round((value / maxValue) * 255);
    return `rgb(${255 - intensity}, ${255 - intensity}, 255)`;
  };

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>混同行列</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <Box sx={{ display: 'flex', mb: 1 }}>
          <Box sx={{ width: 100 }}></Box>
          {confusionMatrix.labels.map((label, index) => (
            <Box key={index} sx={{ width: 80, textAlign: 'center' }}>
              <Typography variant="body2" fontWeight="bold">予測: {label}</Typography>
            </Box>
          ))}
        </Box>
        {confusionMatrix.labels.map((actualLabel, i) => (
          <Box key={i} sx={{ display: 'flex', mb: 1 }}>
            <Box sx={{ width: 100, display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" fontWeight="bold">実際: {actualLabel}</Typography>
            </Box>
            {confusionMatrix.labels.map((predictedLabel, j) => (
              <Box 
                key={j} 
                sx={{ 
                  width: 80, 
                  height: 80, 
                  backgroundColor: getColor(confusionMatrix.matrix[i][j]),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e0e0e0'
                }}
              >
                <Typography variant="body1" fontWeight="bold">
                  {confusionMatrix.matrix[i][j]}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

// 予測説明コンポーネント
const PredictionExplanationChart = ({ data }: { data: typeof xaiPredictionExplanations }) => {
  // 選択された予測インデックス
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // 選択された予測データ
  const selectedPrediction = data[selectedIndex];
  
  // 特徴量の寄与度データ
  const contributionData = selectedPrediction.topFactors.map((item) => ({
    feature: item.factor,
    contribution: item.impact,
    fill: item.impact >= 0 ? '#4caf50' : '#f44336'
  })).sort((a, b) => Math.abs(b.contribution) - Math.abs(a.contribution));

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">予測説明</Typography>
        <Box>
          <Button 
            size="small" 
            disabled={selectedIndex === 0}
            onClick={() => setSelectedIndex(prev => prev - 1)}
          >
            前へ
          </Button>
          <Button 
            size="small" 
            disabled={selectedIndex === data.length - 1}
            onClick={() => setSelectedIndex(prev => prev + 1)}
          >
            次へ
          </Button>
        </Box>
      </Box>
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          顧客ID: {selectedPrediction.customerId}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Chip 
            label={`顧客名: ${selectedPrediction.customerName}`} 
            color="primary" 
          />
          <Chip 
            label={`予測: ${selectedPrediction.prediction}`} 
            color={selectedPrediction.prediction.includes("低") ? "success" : selectedPrediction.prediction.includes("中") ? "warning" : "error"} 
          />
          <Chip 
            label={`確率: ${(selectedPrediction.probability * 100).toFixed(1)}%`} 
            variant="outlined" 
          />
        </Box>
      </Box>
      
      <Typography variant="subtitle2" gutterBottom>
        特徴量の寄与度
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={contributionData.slice(0, 10)}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="feature" />
          <Tooltip formatter={(value) => {
            // 数値型の場合のみtoFixedを適用
            const formattedValue = typeof value === 'number' ? value.toFixed(4) : value;
            return [`${formattedValue}`, '寄与度'];
          }} />
          <Bar dataKey="contribution" name="寄与度" fill="#8884d8">
            {contributionData.slice(0, 10).map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

// モデルパフォーマンス履歴チャートコンポーネント
const ModelPerformanceHistoryChart = ({ data }: { data: typeof xaiModelPerformanceHistory }) => {
  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>モデルパフォーマンス履歴</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="accuracy" name="精度" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="f1Score" name="F1スコア" stroke="#82ca9d" />
          <Line type="monotone" dataKey="precision" name="適合率" stroke="#ffc658" />
          <Line type="monotone" dataKey="recall" name="再現率" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default function XAIDashboard() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        XAI（Explainable AI）指標の可視化
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        AIの判断根拠を可視化し、透明性と説明可能性を高めるダッシュボード
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="dashboard tabs">
          <Tab label="モデル概要" id="tab-0" aria-controls="tabpanel-0" />
          <Tab label="予測説明" id="tab-1" aria-controls="tabpanel-1" />
        </Tabs>
      </Box>

      {/* モデル概要タブ（第一層） */}
      <Box role="tabpanel" hidden={tabValue !== 0} id="tabpanel-0" aria-labelledby="tab-0">
        {tabValue === 0 && (
          <>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              モデル名: {xaiModelSummary.modelName}<br />
              最終更新: {xaiModelSummary.lastUpdated}
            </Typography>

            {/* KPIカードセクション */}
            <FlexContainer>
              <FlexItem>
                <KPICard 
                  title="精度 (Accuracy)" 
                  value={xaiModelSummary.accuracy} 
                  status={xaiModelSummary.accuracy >= 0.9 ? 'good' : xaiModelSummary.accuracy >= 0.8 ? 'warning' : 'danger'}
                  description="正しく分類されたサンプルの割合"
                />
              </FlexItem>
              <FlexItem>
                <KPICard 
                  title="F1スコア" 
                  value={xaiModelSummary.f1Score} 
                  status={xaiModelSummary.f1Score >= 0.9 ? 'good' : xaiModelSummary.f1Score >= 0.8 ? 'warning' : 'danger'}
                  description="適合率と再現率の調和平均"
                />
              </FlexItem>
              <FlexItem>
                <KPICard 
                  title="適合率 (Precision)" 
                  value={xaiModelSummary.precision} 
                  status={xaiModelSummary.precision >= 0.9 ? 'good' : xaiModelSummary.precision >= 0.8 ? 'warning' : 'danger'}
                  description="陽性と予測したもののうち実際に陽性だった割合"
                />
              </FlexItem>
              <FlexItem>
                <KPICard 
                  title="再現率 (Recall)" 
                  value={xaiModelSummary.recall} 
                  status={xaiModelSummary.recall >= 0.9 ? 'good' : xaiModelSummary.recall >= 0.8 ? 'warning' : 'danger'}
                  description="実際の陽性のうち陽性と予測できた割合"
                />
              </FlexItem>
            </FlexContainer>

            {/* チャートセクション */}
            <FlexContainer>
              <FlexItemHalf>
                <FeatureImportanceChart data={xaiFeatureImportance} />
              </FlexItemHalf>
              <FlexItemHalf>
                <ConfusionMatrixChart />
              </FlexItemHalf>
            </FlexContainer>

            <FlexContainer>
              <Box sx={{ width: '100%' }}>
                <ModelPerformanceHistoryChart data={xaiModelPerformanceHistory} />
              </Box>
            </FlexContainer>
          </>
        )}
      </Box>

      {/* 予測説明タブ（第二層） */}
      <Box role="tabpanel" hidden={tabValue !== 1} id="tabpanel-1" aria-labelledby="tab-1">
        {tabValue === 1 && (
          <PredictionExplanationChart data={xaiPredictionExplanations} />
        )}
      </Box>
    </Box>
  );
}
