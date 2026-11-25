# Monday Morning Punchlines

[![make.fun · u-gentle-badger-68-monday-morning-punchlines-709645dc](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/ichwann12/u-gentle-badger-68-monday-morning-punchlines-709645dc/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/ichwann12/u-gentle-badger-68-monday-morning-punchlines-709645dc/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)

One single joke about Monday mornings, no longer than 200 characters:

> Monday is just Sunday's way of saying it told you so.

## How it works

`main.ts` (Node 22, stdlib only — no network, no wall clock) reads the
entry text from `entry.txt` at the repo root and writes it verbatim to the
output directory given by the `MAKEFUN_BOT_DIR` (preferred) or
`MAKEFUN_OUTPUT_DIR` environment variable.

```sh
MAKEFUN_BOT_DIR=./out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
