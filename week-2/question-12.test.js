const trafficLightSystem = require('./question-12');

describe('trafficLightSystem function', () => {
  test('should return "Stop" when color is Red', () => {
    expect(trafficLightSystem('Red')).toBe('Stop');
  });

  test('should return "Ready to go" when color is Yellow', () => {
    expect(trafficLightSystem('Yellow')).toBe('Ready to go');
  });

  test('should return "Go" when color is Green', () => {
    expect(trafficLightSystem('Green')).toBe('Go');
  });

  test('should return "Invalid traffic light" when color is unknown', () => {
    expect(trafficLightSystem('Blue')).toBe('Invalid traffic light');
  });
});
