import React from 'react';

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '40px', color: '#c0392b' }}>
          <h2>Something went wrong.</h2>
          <button onClick={() => window.location.reload()} style={{ marginTop: '10px', cursor: 'pointer' }}>
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
