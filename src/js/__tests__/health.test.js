import userHealth from '../health';

test.each([
  ['Маг', 90, 'healthy'],
  ['Маг', 40, 'wounded'],
  ['Маг', 14, 'critical'],
])(
  ('should show health'), (usrName, usrHealth, usrResult) => {
    const recieved = userHealth({ name: usrName, health: usrHealth });
    expect(recieved).toBe(usrResult);
  },
);
