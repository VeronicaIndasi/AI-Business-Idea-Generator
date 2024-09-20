document.getElementById("ideaForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const industry = document.getElementById("industry").value;
  const skills = document.getElementById("skills").value;

  try {
    const response = await fetch('/api/ideas/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ industry, skills }) 
    });

    if (!response.ok) {
      throw new Error('Failed to generate idea');
    }

    const data = await response.json();

    document.getElementById('result').textContent = `Your business idea: ${data.idea}`;
  } catch (error) {
    document.getElementById('result').textContent = `Error: ${error.message}`;
  }
});
