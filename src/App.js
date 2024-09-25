import React from 'react';
import Index from './components/Index';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <AuthProvider>
      <Index />
    </AuthProvider>
  );
}

export default App;
