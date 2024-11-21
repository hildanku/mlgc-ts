export const labelSuggestion = (confidenceScore: number): { label: string; suggestion: string } => {
    const label = confidenceScore > 0.5 ? 'Cancer' : 'Non-cancer';
  
    let suggestion: string;

    if (label === 'Cancer') {
      suggestion = 'Segera periksa ke dokter!';
    } else {
      suggestion = 'Penyakit kanker tidak terdeteksi.';
    }
    return { label, suggestion };
  };