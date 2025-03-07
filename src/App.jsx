// App.jsx
import { useState } from 'react'
import CalculatorForm from './components/CalculatorForm'
import ResultsList from './components/ResultsList'
import useCalculationsStore from './stores/calculationsStore'

const App = () => {
  const { calculations, clearHistory } = useCalculationsStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>CarbonTrackr - Eco Footprint Calculator</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Calculate Emissions</h2>
        <CalculatorForm 
          setLoading={setLoading}
          setError={setError}
          loading={loading}
        />
        
        {loading && <div style={styles.loading}>Calculating...</div>}
        {error && <div style={styles.error}>⚠️ {error}</div>}
      </div>

      {calculations.length > 0 && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Calculation History</h2>
          <ResultsList calculations={calculations} onClear={clearHistory} />
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    minHeight: '100vh',
    backgroundColor: '#f8faf7'
  },
  header: {
    color: '#1a3c27',
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2rem',
    fontWeight: '600'
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '2rem',
    marginBottom: '2rem',
    boxShadow: '0 2px 8px rgba(46, 139, 87, 0.1)',
    border: '1px solid #e2e8e0'
  },
  sectionTitle: {
    color: '#1a3c27',
    marginBottom: '1.5rem',
    fontSize: '1.25rem',
    fontWeight: '500'
  },
  loading: {
    textAlign: 'center',
    color: '#2d5a27',
    margin: '1rem 0'
  },
  error: {
    backgroundColor: '#ffe8e6',
    color: '#c44134',
    padding: '1rem',
    borderRadius: '4px',
    marginTop: '1rem',
    border: '1px solid #ffccc7'
  }
}

export default App