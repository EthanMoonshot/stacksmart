import { parseCSV } from '../lib/csv-parser.ts';
const cases = {
  valid: 'Tool Name,Cost,Billing Frequency,Category\nSlack,12.50,monthly,Communication\nFigma,90,annual,Design\n',
  malformed: 'Tool Name,Cost,Billing Frequency,Category\nSlack,"12.50,monthly,Communication\n',
  missingCols: 'Tool Name,Cost,Category\nSlack,12.5,Communication\n',
  oddHeaders: 'Service Name,Total Spend,Billing Cycle,Dept\nSlack,12.5,monthly,Comms\n',
  empty: '\n\n',
  invalidType: 'Tool Name,Cost,Billing Frequency,Category\nSlack,12.5,monthly,Communication\n'
};
for (const [name, csv] of Object.entries(cases)) {
  const res = parseCSV(csv);
  console.log(name, JSON.stringify(res));
}
