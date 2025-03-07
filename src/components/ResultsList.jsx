const ResultsList = ({ calculations, onClear }) => {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h3 style={styles.title}>Recent Calculations</h3>
          <button onClick={onClear} style={styles.clearButton}>
            Clear History
          </button>
        </div>
  
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>Vehicle</th>
                <th style={styles.th}>Distance</th>
                <th style={styles.th}>Emissions</th>
                <th style={styles.th}>Recommendations</th>
                <th style={styles.th}>Date</th>
              </tr>
            </thead>
            <tbody>
              {calculations.map((calc) => (
                <tr key={calc.id} style={styles.row}>
                  <td style={styles.td}>{calc.vehicle}</td>
                  <td style={styles.td}>{calc.distance} km</td>
                  <td style={styles.td}>{calc.co2.toFixed(2)} kg</td>
                  <td style={styles.recommendationsCell}>
                    <div style={styles.recommendations}>
                      {calc.recommendations.split('\n').map((line, index) => (
                        <div key={index} style={styles.recommendationItem}>
                          • {line}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td style={styles.td}>
                    {new Date(calc.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  const styles = {
    container: {
      border: '1px solid #e2e8e0',
      borderRadius: '8px',
      overflow: 'hidden'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#f0f5ed',
      borderBottom: '1px solid #e2e8e0'
    },
    title: {
      margin: 0,
      color: '#1a3c27',
      fontSize: '1.1rem'
    },
    clearButton: {
      backgroundColor: '#ffe8e6',
      color: '#c44134',
      border: '1px solid #ffccc7',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: '#ffdbd9'
      }
    },
    tableContainer: {
      overflowX: 'auto'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'white'
    },
    th: {
      padding: '1rem',
      textAlign: 'left',
      backgroundColor: '#f0f5ed',
      color: '#1a3c27',
      fontSize: '0.95rem',
      fontWeight: '600'
    },
    td: {
      padding: '1rem',
      borderBottom: '1px solid #e2e8e0',
      fontSize: '0.9rem',
      color: '#2d3748'
    },
    recommendationsCell: {
      padding: '1rem',
      borderBottom: '1px solid #e2e8e0',
      minWidth: '300px',
      maxWidth: '400px',
        fontSize: '0.9rem',
        color: '#2d3748'
    },
    recommendations: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    recommendationItem: {
      fontSize: '0.9rem',
      lineHeight: '1.4',
      padding: '0.2rem 0'
    },
    row: {
      '&:nth-child(even)': {
        backgroundColor: '#f8faf7'
      }
    }
  }
  
  export default ResultsList