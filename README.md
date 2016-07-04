# gulpfile

my gulp set.

## Breakpoints

| device | display resolution |
| --- | --- |
| PC | 1366px (HD FWXGA) |
| Tablet | 1024px (iPad) |
| Mobile | 568px (iPhone5 / iPhone5s) |

| mixin name | PC L | PC S | Tablet | Mobile |
| --- | :---: | :---: | :---: | :---: |
| l-pc-l | **○** | - | - | - |
| l-pc-s | - | **○** | - | - |
| l-tablet | - | - | **○** | - |
| l-mobile | - | - | - | **○** |
| l-pc-all | **○** | **○** | - | - |
| l-pc-and-tablet | - | **○** | **○** | - |
| l-tablet-and-mobile | - | - | **○** | **○** |
| l-more-than-mobile | **○** | **○** | **○** | - |
| l-less-than-pc | - | **○** | **○** | **○** |
