const votingData = {
    labels: ['Socialistas', 'Liberales', 'Animalistas', 'Centristas', 'Ecologistas'],
    votes: [0, 0, 0, 0, 0],
    colors: ['#ff6b6b', '#4dabf7', '#ffd43b', '#ae3ec9', '#69db7c']
  };


  const ctx = document.getElementById('votingChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: votingData.labels,
      datasets: [{
        data: votingData.votes,
        backgroundColor: votingData.colors,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.raw;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = total === 0 ? 0 : ((value / total) * 100).toFixed(1);
              return `${context.label}: ${value} votos (${percentage}%)`;
            }
          }
        }
      }
    }
  });


  function vote(partyIndex) {
    votingData.votes[partyIndex]++;
    updateChart();
  }


  function resetVotes() {
    votingData.votes = [0, 0, 0, 0, 0];
    updateChart();
  }


  function updateChart() {
    chart.data.datasets[0].data = [...votingData.votes];
    chart.update();
  }