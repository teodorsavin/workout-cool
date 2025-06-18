import { generatePushupSchedule } from '../src/shared/lib/schedule/pushup-schedule';

const [initialStr, goalStr, weeksStr] = process.argv.slice(2);

if (!initialStr || !goalStr || !weeksStr) {
  console.log('Usage: tsx scripts/generate-pushup-schedule.ts <initialMax> <goal> <weeks>');
  process.exit(1);
}

const initialMax = parseInt(initialStr, 10);
const goal = parseInt(goalStr, 10);
const weeks = parseInt(weeksStr, 10);

const schedule = generatePushupSchedule(initialMax, goal, weeks);
console.log(JSON.stringify(schedule, null, 2));
