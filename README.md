# gulpfile

my gulp set.

## Breakpoints

| device | display resolution |
| --- | --- |
| PC | 1366px (HD FWXGA) |
| Tablet Landscape | 1024px (XGA / iPad Landscape) |
| Tablet Portrait | 768px (iPad Portrait) |

| mixin name | PC L | PC S | Tablet L | Tablet P | Mobile L | Mobile P |
| --- | :---: | :---: | :---: | :---: | :---: | :---: |
| l-pc | **○** | **○** | - | - | - | - |
| l-pc-l | **○** | - | - | - | - | - |
| l-pc-s | - | **○** | - | - | - | - |
| l-tablet | - | - | **○** | **○** | - | - |
| l-tablet-l | - | - | **○** | - | - | - |
| l-tablet-p | - | - | - | **○** | - | - |
| l-mobile | - | - | - | - | **○** | **○** |
| l-mobile-l | - | - | - | - | **○** | - |
| l-mobile-p | - | - | - | - | - | **○** |
| l-tablet-and-mobile | - | - | **○** | **○** | **○** | **○** |
| l-more-than-mobile | **○** | **○** | **○** | **○** | - | - |
| l-less-than-pc-s | - | **○** | **○** | **○** | **○** | **○** |
