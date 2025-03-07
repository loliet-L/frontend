import { useState } from 'react'
import useCalculationsStore from '../stores/calculationsStore'
import { calculateEmissions, getRecommendations } from '../services/carbonService'

const CalculatorForm = () => {
  const [vehicle, setVehicle] = useState('car')
  const [distance, setDistance] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const addCalculation = useCalculationsStore((state) => state.addCalculation)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      
      const co2 = await calculateEmissions(vehicle, distance)
      const recommendations = await getRecommendations( vehicle, distance,co2)
    
      
      addCalculation({
        vehicle,
        distance: Number(distance),
        co2,
        recommendations,
        createdAt: new Date().toISOString()
      })
      
      setDistance('')
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to calculate carbon footprint. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Vehicle Type</label>
        <select
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          disabled={loading}
          style={styles.select}
        >
          <option style={styles.option} value="car">Car</option>
          <option style={styles.option} value="bus">Bus</option>
          <option style={styles.option} value="train">Train</option>
          <option  style={styles.option} value="plane">Plane</option>
        </select>
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Distance (km)</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="Enter distance in kilometers"
          required
          disabled={loading}
          style={styles.input}
          min="1"
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        style={styles.button}
      >
        {loading ? 'Calculating...' : 'Calculate Footprint'}
      </button>
    </form>
  )
}

const styles = {
  form: {
    display: 'grid',
    gap: '1.5rem'
  },
  option: {
   backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#1a3c27',
  },
  inputGroup: {
    display: 'grid',
    gap: '0.5rem'
  },
  label: {
    color: '#1a3c27',
    fontWeight: '500'
  },
  select: {
    padding: '0.8rem',
    border: '2px solid #c8d6c5',
    borderRadius: '6px',
    fontSize: '1rem',
    backgroundColor: 'white',
    color: 'black',
  },
  input: {
    padding: '0.8rem',
    border: '2px solid #c8d6c5',
    borderRadius: '6px',
    fontSize: '1rem'
  },
  button: {
    padding: '1rem',
    backgroundColor: '#2d5a27',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer'
  }
}

export default CalculatorForm