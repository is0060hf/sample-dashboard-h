"use client";

import React from 'react';
import { Box, Typography, Paper, Card, CardContent, Tabs, Tab, Chip, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
import {
  brandSafetyCategories,
  brandSafetySummary,
  unsafeDomainsList,
  // recentlyAddedDomains,
  // recentlyRemovedDomains,
  riskCategoryTrends,
  domainRiskDistribution
} from '@/data/brand_safety_data';

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

// リスクサマリーカードコンポーネント
const RiskSummaryCard = ({ title, value, icon, color }: { title: string, value: number | string, icon?: string, color?: string }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h4" component="div">
            {value}
          </Typography>
          {icon && (
            <Box sx={{ 
              backgroundColor: color || '#1976D2', 
              borderRadius: '50%', 
              width: 40, 
              height: 40, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white'
            }}>
              {icon}
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

// カテゴリ別ドーナツチャートコンポーネント
const CategoryDonutChart = ({ data }: { data: typeof brandSafetySummary.categoryBreakdown }) => {
  // カテゴリ名のマッピングを事前に作成
  const categoryNames = data.map(item => {
    const category = brandSafetyCategories.find(cat => cat.id === item.categoryId);
    return category?.name || '';
  });

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>カテゴリ別ドメイン数</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="count"
            isAnimationActive={false}
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
          >
            {data.map((entry, index) => {
              const category = brandSafetyCategories.find(cat => cat.id === entry.categoryId);
              return (
                <Cell key={`cell-${index}`} fill={category?.color || '#000'} />
              );
            })}
          </Pie>
          <Tooltip 
            formatter={(value, name, props) => {
              const categoryId = props.payload.categoryId;
              const category = brandSafetyCategories.find(cat => cat.id === categoryId);
              return [`${value}件`, category?.name || ''];
            }} 
          />
          <Legend 
            formatter={(value, entry, index) => {
              // indexを使用して事前に作成したカテゴリ名の配列から名前を取得
              return categoryNames[index % categoryNames.length];
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

// リスクカテゴリ時系列トレンドチャートコンポーネント
const RiskCategoryTrendChart = ({ data }: { data: typeof riskCategoryTrends }) => {
  // データ変換
  const formattedData = data.map(item => {
    const result = { date: item.date } as Record<string, string | number>;
    item.categoryBreakdown.forEach((count, index) => {
      const category = brandSafetyCategories[index];
      if (category) {
        result[category.name] = count;
      }
    });
    return result;
  });

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>リスクカテゴリ推移</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={formattedData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {brandSafetyCategories.map((category) => (
            <Area 
              key={category.id}
              type="monotone" 
              dataKey={category.name} 
              stackId="1"
              fill={category.color} 
              stroke={category.color}
              isAnimationActive={false}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
};

// ドメインリスクスコア分布バーチャートコンポーネント
const DomainRiskDistributionChart = ({ data }: { data: typeof domainRiskDistribution }) => {
  // リスクレベルに応じた色の設定
  const getBarColor = (riskRange: string) => {
    if (riskRange.startsWith('90')) return '#F44336'; // 赤（高リスク）
    if (riskRange.startsWith('80')) return '#FF5722'; // 橙（中高リスク）
    if (riskRange.startsWith('70')) return '#FFC107'; // 黄（中リスク）
    if (riskRange.startsWith('60')) return '#8BC34A'; // 黄緑（中低リスク）
    return '#4CAF50'; // 緑（低リスク）
  };

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>ドメインリスクスコア分布</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="riskRange" type="category" />
          <Tooltip formatter={(value) => [`${value}件`, 'ドメイン数']} />
          <Legend />
          <Bar 
            dataKey="count" 
            name="ドメイン数" 
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.riskRange)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

// 不適切サイトリストコンポーネント
const UnsafeDomainsList = ({ data }: { data: typeof unsafeDomainsList }) => {
  // 表示用に最初の10件のみ使用
  const displayData = data.slice(0, 10);

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>不適切サイトリスト（上位10件）</Typography>
      <Box sx={{ overflowX: 'auto' }}>
        <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
          <Box component="thead">
            <Box component="tr" sx={{ borderBottom: '1px solid #e0e0e0' }}>
              <Box component="th" sx={{ p: 1, textAlign: 'left' }}>ドメイン</Box>
              <Box component="th" sx={{ p: 1, textAlign: 'left' }}>カテゴリ</Box>
              <Box component="th" sx={{ p: 1, textAlign: 'left' }}>リスクスコア</Box>
              <Box component="th" sx={{ p: 1, textAlign: 'left' }}>検出日</Box>
            </Box>
          </Box>
          <Box component="tbody">
            {displayData.map((domain) => {
              const category = brandSafetyCategories.find(cat => cat.id === domain.categoryId);
              return (
                <Box component="tr" key={domain.id} sx={{ borderBottom: '1px solid #e0e0e0' }}>
                  <Box component="td" sx={{ p: 1 }}>{domain.domain}</Box>
                  <Box component="td" sx={{ p: 1 }}>
                    <Chip 
                      label={category?.name || ''} 
                      size="small" 
                      sx={{ 
                        backgroundColor: category?.color || '#1976D2',
                        color: 'white'
                      }} 
                    />
                  </Box>
                  <Box component="td" sx={{ p: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body2" sx={{ mr: 1 }}>{domain.riskScore}</Typography>
                      <LinearProgress 
                        variant="determinate" 
                        value={domain.riskScore} 
                        sx={{ 
                          width: 50, 
                          height: 8, 
                          borderRadius: 4,
                          backgroundColor: '#e0e0e0',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: domain.riskScore >= 90 ? '#F44336' : 
                                            domain.riskScore >= 80 ? '#FF5722' : 
                                            domain.riskScore >= 70 ? '#FFC107' : 
                                            domain.riskScore >= 60 ? '#8BC34A' : '#4CAF50',
                          }
                        }} 
                      />
                    </Box>
                  </Box>
                  <Box component="td" sx={{ p: 1 }}>{domain.detectedDate}</Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default function BrandSafetyDashboard() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ブランドセーフティリスク可視化ダッシュボード
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        広告に不適切なサイトのリストをカテゴリ別に可視化
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="dashboard tabs">
          <Tab label="サマリー" id="tab-0" aria-controls="tabpanel-0" />
          <Tab label="詳細分析" id="tab-1" aria-controls="tabpanel-1" />
        </Tabs>
      </Box>

      {/* サマリータブ（第一層） */}
      <Box role="tabpanel" hidden={tabValue !== 0} id="tabpanel-0" aria-labelledby="tab-0">
        {tabValue === 0 && (
          <>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              最終更新: {new Date(brandSafetySummary.updatedAt).toLocaleString('ja-JP')}
            </Typography>

            {/* リスクサマリーセクション */}
            <Box sx={{ mb: 4, mt: 1 }}>
              <FlexContainer>
                <FlexItem>
                  <RiskSummaryCard 
                    title="総ドメイン数" 
                    value={brandSafetySummary.totalDomains} 
                    icon="🌐" 
                  />
                </FlexItem>
                <FlexItem>
                  <RiskSummaryCard 
                    title="最近追加" 
                    value={brandSafetySummary.recentChanges.added} 
                    icon="+" 
                    color="#F44336"
                  />
                </FlexItem>
                <FlexItem>
                  <RiskSummaryCard 
                    title="最近除外" 
                    value={brandSafetySummary.recentChanges.removed} 
                    icon="-" 
                    color="#4CAF50"
                  />
                </FlexItem>
                <FlexItem>
                  <RiskSummaryCard 
                    title="全体リスクレベル" 
                    value={brandSafetySummary.riskLevel} 
                    icon="⚠️" 
                    color="#FFC107"
                  />
                </FlexItem>
              </FlexContainer>
            </Box>

            {/* チャートセクション */}
            <Box sx={{ mb: 4 }}>
              <FlexContainer>
                <FlexItemHalf>
                  <CategoryDonutChart data={brandSafetySummary.categoryBreakdown} />
                </FlexItemHalf>
                <FlexItemHalf>
                  <DomainRiskDistributionChart data={domainRiskDistribution} />
                </FlexItemHalf>
              </FlexContainer>
            </Box>

            {/* 時系列トレンドとリスト */}
            <Box>
              <FlexContainer>
                <FlexItemHalf>
                  <RiskCategoryTrendChart data={riskCategoryTrends} />
                </FlexItemHalf>
                <FlexItemHalf>
                  <UnsafeDomainsList data={unsafeDomainsList} />
                </FlexItemHalf>
              </FlexContainer>
            </Box>
          </>
        )}
      </Box>

      {/* 詳細分析タブ（第二層） */}
      <Box role="tabpanel" hidden={tabValue !== 1} id="tabpanel-1" aria-labelledby="tab-1">
        {tabValue === 1 && (
          <Typography variant="h6">
            詳細分析画面（実装中）
          </Typography>
        )}
      </Box>
    </Box>
  );
}
