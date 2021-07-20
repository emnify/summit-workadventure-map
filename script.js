let grafanaPopup;

WA.onEnterZone('jealousguy', () => {
  WA.sendChatMessage("I'm so jealous right now.", 'Jealous Guy');
});

grafanaPopup = WA.onEnterZone('dashboard', () => {
  WA.openPopup('grafanaPopup', "Go to Grafana?", [
    {
      label: 'EMnify Prod',
      className: 'success',
      callback: (popup) => {
        WA.openTab('https://grafana.oss-eks.emnify.net');
        popup.close();
      },
    },
    {
      label: 'EMnify Dev',
      className: 'success',
      callback: (popup) => {
        WA.openTab('https://grafana.oss-eks.dev.emnify.io/');
        popup.close();
      },
    },
    {
      label: 'Not now',
      className: 'primary',
      callback: (popup) => {
        popup.close();
      },
    },
  ]);
});

WA.onLeaveZone('dashboard', () => {
  grafanaPopup.close();
});
