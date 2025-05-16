"use client";

import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Paper, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import {
  overallCampaignSummary,
  tvAdvertisingDetails,
  digitalAdvertisingDetails,
  tvDigitalOverlap,
  integratedEffectAnalysis
} from '@/data/tv_digital_data';

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
const KPICard = ({ title, value, subValue, icon, color }: { title: string, value: string | number, subValue?: string, icon?: string, color?: string }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h4" component="div">
              {value}
            </Typography>
            {subValue && (
              <Typography variant="body2" color="text.secondary">
                {subValue}
              </Typography>
            )}
          </Box>
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

// リーチ推移チャートコンポーネント
const ReachTrendChart = ({ tvData, digitalData }: { tvData: any[], digitalData: any[] }) => {
  // テレビとデジタルのリーチデータを作成
  const tvReachData = tvAdvertisingDetails.weeklyTrend;
  const digitalReachData = digitalAdvertisingDetails.weeklyTrend;

  // データの結合
  const combinedData = tvReachData.map((item, index) => {
    return {
      date: item.week,
      tvReach: item.reach,
      digitalReach: digitalReachData[index]?.reach || 0,
      totalReach: item.reach + (digitalReachData[index]?.reach || 0)
    };
  });

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>リーチ推移</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={combinedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value.toLocaleString()}人`, '']} />
          <Legend />
          <Line type="monotone" dataKey="tvReach" name="テレビリーチ" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="digitalReach" name="デジタルリーチ" stroke="#82ca9d" />
          <Line type="monotone" dataKey="totalReach" name="総合リーチ" stroke="#ff7300" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

// クロスデバイスリーチ分析チャートコンポーネント
const CrossDeviceReachChart = ({ data }: { data: any[] }) => {
  // クロスデバイスデータを作成
  const crossDeviceData = [
    { name: 'テレビのみ', value: tvDigitalOverlap.overallOverlap.tvOnly },
    { name: 'デジタルのみ', value: tvDigitalOverlap.overallOverlap.digitalOnly },
    { name: '両方', value: tvDigitalOverlap.overallOverlap.both }
  ];

  // 円グラフ用のカラー設定
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>クロスデバイスリーチ分析</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={crossDeviceData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
          >
            {crossDeviceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value.toLocaleString()}人`, '']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

// メディア効果分析チャートコンポーネント
const MediaEffectChart = ({ data }: { data: any[] }) => {
  // メディア効果データを作成
  const mediaEffectData = [
    { name: 'テレビのみ', awareness: 65, consideration: 45, purchase: 25 },
    { name: 'デジタルのみ', awareness: 55, consideration: 40, purchase: 20 },
    { name: '両方', awareness: 85, consideration: 70, purchase: 45 }
  ];

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>メディア効果分析</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={mediaEffectData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value}%`, '']} />
          <Legend />
          <Bar dataKey="awareness" name="認知率" fill="#8884d8" />
          <Bar dataKey="consideration" name="検討率" fill="#82ca9d" />
          <Bar dataKey="purchase" name="購入率" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

// オーディエンス分析チャートコンポーネント
const AudienceAnalysisChart = ({ data }: { data: any[] }) => {
  // オーディエンスデータを作成
  const audienceData = [
    { name: 'F1（20-34歳女性）', value: tvDigitalOverlap.demographicOverlap[0].totalUniqueReach, color: '#FF6384' },
    { name: 'F2（35-49歳女性）', value: tvDigitalOverlap.demographicOverlap[1].totalUniqueReach, color: '#36A2EB' },
    { name: 'F3（50-64歳女性）', value: tvDigitalOverlap.demographicOverlap[2].totalUniqueReach, color: '#FFCE56' },
    { name: 'M1（20-34歳男性）', value: tvDigitalOverlap.demographicOverlap[3].totalUniqueReach, color: '#4BC0C0' },
    { name: 'M2（35-49歳男性）', value: tvDigitalOverlap.demographicOverlap[4].totalUniqueReach, color: '#9966FF' },
    { name: 'M3（50-64歳男性）', value: tvDigitalOverlap.demographicOverlap[5].totalUniqueReach, color: '#FF9F40' }
  ];

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>オーディエンス分析</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={audienceData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
          >
            {audienceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value.toLocaleString()}人`, '']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default function TvDigitalDashboard() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        テレビ＆デジタル統合効果モニタリング
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        テレビとデジタル広告の統合効果を可視化するダッシュボード
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
              キャンペーン: {overallCampaignSummary.campaignName}<br />
              期間: {overallCampaignSummary.period.start} 〜 {overallCampaignSummary.period.end}<br />
              最終更新: {overallCampaignSummary.lastUpdated}
            </Typography>

            {/* KPIセクション */}
            <FlexContainer>
              <FlexItem>
                <KPICard 
                  title="テレビリーチ" 
                  value={`${(overallCampaignSummary.mediaBreakdown.tv.reachContribution / 10000).toFixed(1)}万人`} 
                  subValue={`前週比 +5.2%`}
                  icon="📺" 
                  color="#8884d8"
                />
              </FlexItem>
              <FlexItem>
                <KPICard 
                  title="デジタルリーチ" 
                  value={`${(overallCampaignSummary.mediaBreakdown.digital.reachContribution / 10000).toFixed(1)}万人`} 
                  subValue={`前週比 +7.8%`}
                  icon="💻" 
                  color="#82ca9d"
                />
              </FlexItem>
              <FlexItem>
                <KPICard 
                  title="総合リーチ" 
                  value={`${(overallCampaignSummary.kpi.integratedReach.current / 10000).toFixed(1)}万人`} 
                  subValue={`前週比 +6.3%`}
                  icon="🔄" 
                  color="#ff7300"
                />
              </FlexItem>
              <FlexItem>
                <KPICard 
                  title="重複リーチ" 
                  value={`${(tvDigitalOverlap.overallOverlap.both / 10000).toFixed(1)}万人`} 
                  subValue={`総合リーチの${((tvDigitalOverlap.overallOverlap.both / overallCampaignSummary.kpi.integratedReach.current) * 100).toFixed(1)}%`}
                  icon="🔍" 
                  color="#FF8042"
                />
              </FlexItem>
            </FlexContainer>

            {/* チャートセクション */}
            <FlexContainer>
              <FlexItemHalf>
                <ReachTrendChart tvData={[]} digitalData={[]} />
              </FlexItemHalf>
              <FlexItemHalf>
                <CrossDeviceReachChart data={[]} />
              </FlexItemHalf>
            </FlexContainer>

            <FlexContainer>
              <FlexItemHalf>
                <MediaEffectChart data={[]} />
              </FlexItemHalf>
              <FlexItemHalf>
                <AudienceAnalysisChart data={[]} />
              </FlexItemHalf>
            </FlexContainer>
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
