
  document.addEventListener("DOMContentLoaded", function () {
    const user01Games =  JSON.stringify(user01Games) ;

    if (user01Games && user01Games.length > 0) {
      const labels = user01Games.map((game, index) => `Game ${index + 1}`);
      const data = user01Games.map((game) => game.stats_or_score.toFixed(2));

      // Chart.jsの設定
      const ctx = document.getElementById("line-chart-01").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Stats or Score",
              data: data,
              fill: false,
              borderColor: "#c54444", // ラインの色
              tension: 0.1,
            },
          ],
        },
      });
    } else {
      // ゲームがない場合のメッセージ
      const noGamesMessage = document.createElement("p");
      noGamesMessage.textContent = "No games to display.";
      document.body.appendChild(noGamesMessage);
    }
  });