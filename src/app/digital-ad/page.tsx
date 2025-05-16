"use client";

import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Paper, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  digitalKPISummary,
  digitalTimeSeriesData,
  digitalMediaPerformance,
  digitalAudiencePerformance,
  digitalDevicePerformance,
  digitalCreativePerformance,
  digitalRegionPerformance,
  digitalOptimizationRecommendations,
  digitalCompetitiveAnalysis
} from '@/data/digital_ad_data';

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
    flex: '1 1 calc(20% - 18px)',
  },
}));

const FlexItemHalf = styled(Box)(({ theme }) => ({
  flex: '1 1 100%',
  [theme.breakpoints.up('md')]: {
    flex: '1 1 calc(50% - 12px)',
  },
}));

// KPIカードコンポーネント
const KPICard = ({ title, value, target, change, changeType = 'percent', color }: { 
  title: string, 
  value: string | number, 
  target?: string | number,
  change?: number,
  changeType?: 'percent' | 'absolute',
  color?: string
}) => {
  // 変化率の表示形式を決定
  const getChangeDisplay = () => {
    if (change === undefined) return null;
    
    const prefix = change > 0 ? '+' : '';
    const suffix = changeType === 'percent' ? '%' : '';
    const displayValue = `${prefix}${change}${suffix}`;
    const color = change > 0 ? '#4CAF50' : change < 0 ? '#F44336' : 'inherit';
    
    return (
      <Typography variant="body2" sx={{ color }}>
        {displayValue}
      </Typography>
    );
  };

  // 目標達成率の計算と表示
  const getProgressDisplay = () => {
    if (target === undefined) return null;
    
    // 数値に変換
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    const numTarget = typeof target === 'string' ? parseFloat(target) : target;
    
    // 達成率の計算（0-100%の範囲に制限）
    const progress = Math.min(100, Math.max(0, (numValue / numTarget) * 100));
    
    return (
      <Box sx={{ mt: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
          <Typography variant="caption">目標: {target}</Typography>
          <Typography variant="caption">{progress.toFixed(1)}%</Typography>
        </Box>
        <Box sx={{ 
          height: 4, 
          backgroundColor: '#e0e0e0', 
          borderRadius: 2,
          overflow: 'hidden'
        }}>
          <Box sx={{ 
            height: '100%', 
            width: `${progress}%`,
            backgroundColor: progress >= 100 ? '#4CAF50' : progress >= 80 ? '#8BC34A' : progress >= 60 ? '#FFC107' : progress >= 40 ? '#FF9800' : '#F44336',
            borderRadius: 2
          }} />
        </Box>
      </Box>
    );
  };

  return (
    <Card sx={{ height: '100%', backgroundColor: color }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Typography variant="h4" component="div">
            {value}
          </Typography>
          {getChangeDisplay()}
        </Box>
        {getProgressDisplay()}
      </CardContent>
    </Card>
  );
};

// 時系列データチャートコンポーネント
const TimeSeriesChart = ({ data, timeUnit }: { data: any[], timeUnit: 'daily' | 'weekly' | 'monthly' }) => {
  // 時間単位に応じたX軸のキー名を取得
  const getXAxisKey = () => {
    switch (timeUnit) {
      case 'daily': return 'date';
      case 'weekly': return 'week';
      case 'monthly': return 'month';
      default: return 'date';
    }
  };

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>パフォーマンス推移</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={getXAxisKey()} />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="impressions" name="インプレッション" fill="#8884d8" />
          <Bar yAxisId="left" dataKey="clicks" name="クリック数" fill="#82ca9d" />
          <Line yAxisId="right" type="monotone" dataKey="ctr" name="CTR (%)" stroke="#ff7300" />
          <Line yAxisId="right" type="monotone" dataKey="convRate" name="コンバージョン率 (%)" stroke="#387908" />
        </ComposedChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default function DigitalAdDashboard() {
  const [tabValue, setTabValue] = useState(0);
  const [timeUnit, setTimeUnit] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  // タブ切り替え処理
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // 時間単位切り替え処理
  const handleTimeUnitChange = (event: React.SyntheticEvent, newValue: number) => {
    const units: ('daily' | 'weekly' | 'monthly')[] = ['daily', 'weekly', 'monthly'];
    setTimeUnit(units[newValue]);
  };

  // 時間単位に応じたデータの取得
  const getTimeData = () => {
    switch (timeUnit) {
      case 'daily': 
        // 日次データを配列形式に変換
        return digitalTimeSeriesData.daily.dates.map((date, index) => ({
          date,
          impressions: digitalTimeSeriesData.daily.impressions[index],
          clicks: digitalTimeSeriesData.daily.clicks[index],
          ctr: (digitalTimeSeriesData.daily.clicks[index] / digitalTimeSeriesData.daily.impressions[index] * 100).toFixed(2),
          convRate: (digitalTimeSeriesData.daily.conversions[index] / digitalTimeSeriesData.daily.clicks[index] * 100).toFixed(2)
        }));
      case 'weekly':
        // 週次データを配列形式に変換
        return digitalTimeSeriesData.weekly.weeks.map((week, index) => ({
          week,
          impressions: digitalTimeSeriesData.weekly.impressions[index],
          clicks: digitalTimeSeriesData.weekly.clicks[index],
          ctr: digitalTimeSeriesData.weekly.ctr[index],
          convRate: digitalTimeSeriesData.weekly.conversionRate[index]
        }));
      case 'monthly':
        // 月次データを配列形式に変換
        return digitalTimeSeriesData.monthly.months.map((month, index) => ({
          month,
          impressions: digitalTimeSeriesData.monthly.impressions[index],
          clicks: digitalTimeSeriesData.monthly.clicks[index],
          ctr: digitalTimeSeriesData.monthly.ctr[index],
          convRate: digitalTimeSeriesData.monthly.conversionRate[index]
        }));
      default:
        return [];
    }
  };

  // KPIカード用データの取得
  const getKPIData = () => {
    return digitalKPISummary.kpiCards;
  };

  // メディア別パフォーマンスデータの取得
  const getMediaData = () => {
    return digitalMediaPerformance.map(media => ({
      name: media.media,
      impressions: media.impressions,
      clicks: media.clicks,
      ctr: media.ctr,
      conversions: media.conversions,
      convRate: media.conversionRate,
      spend: media.cost,
      color: getMediaColor(media.media)
    }));
  };

  // メディア別の色を取得
  const getMediaColor = (mediaName: string) => {
    const colors: Record<string, string> = {
      "Google検索広告": "#4285F4",
      "Google ディスプレイ": "#34A853",
      "YouTube": "#FF0000",
      "Facebook": "#1877F2",
      "Instagram": "#C13584",
      "Twitter": "#1DA1F2",
      "TikTok": "#000000",
      "LINE広告": "#06C755"
    };
    return colors[mediaName] || "#1976D2";
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        デジタル広告モニタリングダッシュボード
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        デジタル広告のパフォーマンスを一元管理するダッシュボード
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
              キャンペーン: {digitalKPISummary.campaignName}<br />
              期間: {digitalKPISummary.period.start} 〜 {digitalKPISummary.period.end}（現在: {digitalKPISummary.period.current}）<br />
              最終更新: {digitalKPISummary.lastUpdated}
            </Typography>

            {/* KPIセクション */}
            <FlexContainer>
              {getKPIData().slice(0, 5).map((kpi, index) => (
                <FlexItem key={index}>
                  <KPICard 
                    title={kpi.metric} 
                    value={kpi.current}
                    target={kpi.target}
                    change={parseFloat(kpi.trend)}
                  />
                </FlexItem>
              ))}
            </FlexContainer>

            {/* コスト・効率セクション */}
            <FlexContainer>
              {getKPIData().slice(5, 8).map((kpi, index) => (
                <FlexItem key={index}>
                  <KPICard 
                    title={kpi.metric} 
                    value={kpi.current}
                    target={kpi.target}
                    change={parseFloat(kpi.trend)}
                  />
                </FlexItem>
              ))}
            </FlexContainer>

            {/* 時系列トレンドセクション */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>時系列トレンド</Typography>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                <Tabs value={['daily', 'weekly', 'monthly'].indexOf(timeUnit)} onChange={handleTimeUnitChange} aria-label="time unit tabs">
                  <Tab label="日次" id="time-tab-0" />
                  <Tab label="週次" id="time-tab-1" />
                  <Tab label="月次" id="time-tab-2" />
                </Tabs>
              </Box>
              <TimeSeriesChart data={getTimeData()} timeUnit={timeUnit} />
            </Box>

            {/* メディア別パフォーマンスセクション */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>メディア別パフォーマンス</Typography>
              <Paper sx={{ p: 2 }}>
                <Box sx={{ overflowX: 'auto' }}>
                  <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
                    <Box component="thead">
                      <Box component="tr" sx={{ borderBottom: '1px solid #e0e0e0' }}>
                        <Box component="th" sx={{ p: 1, textAlign: 'left' }}>メディア</Box>
                        <Box component="th" sx={{ p: 1, textAlign: 'right' }}>インプレッション</Box>
                        <Box component="th" sx={{ p: 1, textAlign: 'right' }}>クリック数</Box>
                        <Box component="th" sx={{ p: 1, textAlign: 'right' }}>CTR</Box>
                        <Box component="th" sx={{ p: 1, textAlign: 'right' }}>コンバージョン</Box>
                        <Box component="th" sx={{ p: 1, textAlign: 'right' }}>コンバージョン率</Box>
                        <Box component="th" sx={{ p: 1, textAlign: 'right' }}>広告費</Box>
                      </Box>
                    </Box>
                    <Box component="tbody">
                      {getMediaData().map((media) => (
                        <Box component="tr" key={media.name} sx={{ borderBottom: '1px solid #e0e0e0' }}>
                          <Box component="td" sx={{ p: 1 }}>
                            <Chip 
                              label={media.name} 
                              size="small" 
                              sx={{ 
                                backgroundColor: media.color,
                                color: 'white'
                              }} 
                            />
                          </Box>
                          <Box component="td" sx={{ p: 1, textAlign: 'right' }}>{(media.impressions / 1000000).toFixed(2)}M</Box>
                          <Box component="td" sx={{ p: 1, textAlign: 'right' }}>{(media.clicks / 1000).toFixed(1)}K</Box>
                          <Box component="td" sx={{ p: 1, textAlign: 'right' }}>{media.ctr.toFixed(2)}%</Box>
                          <Box component="td" sx={{ p: 1, textAlign: 'right' }}>{media.conversions.toLocaleString()}</Box>
                          <Box component="td" sx={{ p: 1, textAlign: 'right' }}>{media.convRate.toFixed(2)}%</Box>
                          <Box component="td" sx={{ p: 1, textAlign: 'right' }}>{(media.spend / 1000000).toFixed(2)}M</Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Paper>
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
