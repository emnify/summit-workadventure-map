let jealousguyPopup;
let grafanaPopup;

jealousguyPopup = WA.onEnterZone('jealousguy', () => {
  WA.openPopup('jealousguyPopup', "I'm so jealous right now.", []);
});

WA.onLeaveZone('jealousguy', () => {
  jealousguyPopup.close();
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
