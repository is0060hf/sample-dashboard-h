"use client";

import React from 'react';
import { Box, Typography, Card, CardContent, CardActionArea, styled } from '@mui/material';
import Link from 'next/link';

// Flexboxを使用したグリッドの代替
const FlexContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),
}));

const FlexItem = styled(Box)(({ theme }) => ({
  flex: '1 1 100%',
  [theme.breakpoints.up('md')]: {
    flex: '1 1 calc(50% - 12px)',
  },
}));

// ダッシュボード一覧
const dashboards = [
  {
    id: 'xai',
    title: 'XAI（Explainable AI）指標の可視化',
    description: 'AIの判断根拠を可視化し、透明性と説明可能性を高めるダッシュボード',
    color: '#3f51b5',
    icon: '🧠'
  },
  {
    id: 'brand-safety',
    title: 'ブランドセーフティリスク可視化',
    description: '広告に不適切なサイトのリストをカテゴリ別に可視化',
    color: '#f44336',
    icon: '⚠️'
  },
  {
    id: 'tv-digital',
    title: 'テレビ＆デジタル統合効果モニタリング',
    description: 'テレビとデジタル広告の統合効果を可視化するダッシュボード',
    color: '#2196f3',
    icon: '📺'
  },
  {
    id: 'digital-ad',
    title: 'デジタル広告モニタリング',
    description: 'デジタル広告のパフォーマンスを一元管理するダッシュボード',
    color: '#4caf50',
    icon: '📊'
  }
];

export default function Home() {
  return (
    <Box>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          博報堂 AIダッシュボード
        </Typography>
        <Typography variant="h5" color="text.secondary">
          AIの処理を可視化するダッシュボード集
        </Typography>
      </Box>

      <FlexContainer>
        {dashboards.map((dashboard, index) => (
          <FlexItem key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                }
              }}
            >
              <CardActionArea 
                component={Link} 
                href={`/${dashboard.id}`}
                sx={{ height: '100%' }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box 
                      sx={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: '50%', 
                        backgroundColor: dashboard.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        mr: 2
                      }}
                    >
                      {dashboard.icon}
                    </Box>
                    <Typography variant="h5" component="div">
                      {dashboard.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    {dashboard.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </FlexItem>
        ))}
      </FlexContainer>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 博報堂 AIダッシュボード | WCAG 2.2準拠
        </Typography>
      </Box>
    </Box>
  );
}
