import { sendEmail } from "../utility/email.service";
import { RecurrenceRule, scheduleJob } from "node-schedule";
import { User } from "../src/entity/User";

export default async () => {
  const rule = new RecurrenceRule();
  rule.hour = 0;
  rule.tz = "Asia/Baghdad";
  let usersCount = await User.count();
  scheduleJob(rule, async () => {
    await sendEmail(
      "Users Number Today",
      `good morning admin the users no in the system are : [${usersCount}]👩‍💻`,
      ["mohamadfafafa70@gmail.com"]
    );
    console.log("A new day 🌤 has begun in 📍Asia/Baghdad timezone!");
  });
};
