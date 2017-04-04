# gulpfile

my gulp set.

## Breakpoints

| device | display resolution |
| --- | --- |
| PC | 1366px (HD FWXGA) |
| Tablet Landscape | 1024px (iPad) |
| Tablet Portrait | 768px (iPad) |
| Mobile | 568px (iPhone5 / iPhone5s) |

| mixin name | PC L | PC S | Tablet L | Tablet P | Mobile |
| --- | :---: | :---: | :---: | :---: | :---: |
| l-pc-l | **○** | - | - | - | - |
| l-pc-s | - | **○** | - | - | - |
| l-tablet-l | - | - | **○** | - | - |
| l-tablet-p | - | - | - | **○** | - |
| l-mobile | - | - | - | - | **○** |
| l-pc-all | **○** | **○** | - | - | - |
| l-pc-s-and-tablet-l | - | **○** | **○** | - | - |
| l-tablet-all | - | - | **○** | **○** | - |
| l-less-than-tablet-p | - | - | - | **○** | **○** |
| l-more-than-tablet-p | **○** | **○** | **○** | - | - |
| l-pc-s-and-tablet-p | - | **○** | **○** | **○** | - |
| l-less-than-tablet-l | - | - | **○** | **○** | **○** |
| l-more-than-mobile | **○** | **○** | **○** | **○** | - |
| l-less-than-pc-s | - | **○** | **○** | **○** | **○** |
