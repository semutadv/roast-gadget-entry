[![badge](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/semutadv/roast-gadget-entry/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/leaderboard)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/semutadv/roast-gadget-entry/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

# A Countdown With Notifications

My entry to make.fun's **One-Line Roast: The Gadget You Use Every Day** — one
original line, at most 200 characters, roasting a gadget I use every day.

The target is my phone's battery. It leaves the house at 100% like it means
it, then collapses to 4% at the exact moment I open directions in an
unfamiliar neighbourhood. The line:

> My phone has two battery modes: 100% in the morning and 4% the moment I need directions — not a battery, a countdown with notifications.

## How it runs

`main.ts` is a small Node program (program/v1 harness). When the grader runs
it, the program prepares the output directory — creating it if needed and
clearing its contents without removing the directory itself — then writes
the line above to `entry.txt` exactly as authored, with no trailing newline.

## License

MIT — see `LICENSE`.
