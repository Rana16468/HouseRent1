import React from 'react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

export interface TErrorSource {
  path: string | number;
  message: string;
}

export interface TErrorResponse {
  success?: boolean;
  message?: string;
  errorSources?: TErrorSource[];
  err?: Record<string, unknown> & {
    statusCode?: number;
  };
  stack?: string;
}

// RTK Query Error টাইপ সাপোর্টসহ Props ইন্টারফেস
interface ErrorProps {
  error?:
    | TErrorResponse
    | FetchBaseQueryError
    | SerializedError
    | { data?: TErrorResponse; status?: number }
    | any;
}

const ErrorPage: React.FC<ErrorProps> = ({ error }) => {
  if (!error) return null;

  // RTK Query response (error.data) অথবা সরাসরি error নরম্যালাইজ করা
  const formattedError: TErrorResponse =
    typeof error === 'object' && 'data' in error && error.data
      ? (error.data as TErrorResponse)
      : (error as TErrorResponse);

  const {
    message = 'An unexpected error occurred.',
    errorSources = [],
    err = {},
    stack = '',
  } = formattedError;

  return (
    <div style={styles.container}>
      {/* Header / Status Banner */}
      <div style={styles.header}>
        {typeof err?.statusCode === 'number' && (
          <span style={styles.badge}>{err.statusCode}</span>
        )}
        <h2 style={styles.title}>{message}</h2>
      </div>

      {/* Error Sources Breakdown */}
      {errorSources.length > 0 && (
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Error Details</h4>
          <ul style={styles.list}>
            {errorSources.map((source: TErrorSource, index: number) => (
              <li key={index} style={styles.listItem}>
                {source.path !== '' && <strong>{source.path}: </strong>}
                <span>{source.message}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Stack Trace */}
      {stack && (
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Stack Trace</h4>
          <pre style={styles.stack}>{stack}</pre>
        </div>
      )}
    </div>
  );
};

// Strongly-typed CSS styles
const styles: any = {
  container: {
    maxWidth: '700px',
    margin: '20px auto',
    padding: '24px',
    borderRadius: '8px',
    backgroundColor: '#fff5f5',
    border: '1px solid #feb2b2',
    color: '#2d3748',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderBottom: '1px solid #fed7d7',
    paddingBottom: '12px',
    marginBottom: '16px',
  },
  badge: {
    backgroundColor: '#e53e3e',
    color: '#ffffff',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  title: {
    margin: 0,
    fontSize: '18px',
    color: '#c53030',
  },
  section: {
    marginTop: '16px',
  },
  sectionTitle: {
    margin: '0 0 8px 0',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#742a2a',
  },
  list: {
    margin: 0,
    paddingLeft: '20px',
    color: '#9b2c2c',
  },
  listItem: {
    marginBottom: '4px',
    fontSize: '14px',
  },
  stack: {
    backgroundColor: '#2d3748',
    color: '#f7fafc',
    padding: '14px',
    borderRadius: '6px',
    fontSize: '12px',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    fontFamily: 'Courier New, Courier, monospace',
  },
};

export default ErrorPage;