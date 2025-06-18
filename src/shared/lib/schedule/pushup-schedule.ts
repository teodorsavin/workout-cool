export interface ScheduleSession {
  day: number;
  sets: number[];
}

export function generatePushupSchedule(initialMax: number, goal = 100, weeks = 6): ScheduleSession[] {
  const sessionsPerWeek = 3;
  const totalSessions = weeks * sessionsPerWeek;
  const plan: ScheduleSession[] = [];

  const increment = Math.ceil((goal - initialMax) / totalSessions);
  let currentTarget = initialMax;

  for (let i = 0; i < totalSessions; i++) {
    currentTarget = Math.min(goal, currentTarget + increment);
    const sets = [
      Math.round(currentTarget * 0.5),
      Math.round(currentTarget * 0.6),
      Math.round(currentTarget * 0.6),
      Math.round(currentTarget * 0.7),
      currentTarget,
    ];
    plan.push({ day: i + 1, sets });
  }

  return plan;
}
