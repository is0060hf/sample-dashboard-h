import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import MainLayout from '@/components/layout/MainLayout';

// テーマ設定（WCAG 2.2準拠のアクセシビリティ対応）
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // プライマリカラー（青系）
    },
    secondary: {
      main: '#424242', // セカンダリカラー（グレー系）
    },
    error: {
      main: '#F44336', // エラー・危険（赤）
    },
    warning: {
      main: '#FFC107', // 警告・注意（黄）
    },
    success: {
      main: '#4CAF50', // 成功・良好（緑）
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      '"Hiragino Sans"',
      '"Hiragino Kaku Gothic ProN"',
      '"Noto Sans JP"',
      'Meiryo',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 'bold',
          backgroundColor: '#f5f5f5',
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
