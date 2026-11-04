---
title: Video routing
publish: true
---

ProPresenter on the Mac mini is the center of the video system. Everything goes in and out through a Blackmagic DeckLink Duo 2 (four SDI channels, in a Thunderbolt enclosure), plus one camera over the network. All video is run over SDI.

```mermaid
flowchart LR
  CAM1[Main PTZ camera] -- SDI --> D4[DeckLink ch 4 in]
  CAM2[Side PTZ camera] -- NDI --> PP
  D4 --> PP[ProPresenter on Mac mini]
  PP --> D1[DeckLink ch 1] --> SPLIT[Splitter] --> TV[2 audience TVs]
  PP --> D2[DeckLink ch 2] --> CONF[Confidence monitor]
  PP --> D3[DeckLink ch 3] --> UP[Upstairs and hallway TVs]
  PP --> YT[YouTube livestream]
```

| DeckLink channel | Direction | Goes to |
|---|---|---|
| 1 | Out | Audience TVs, through a splitter |
| 2 | Out | Confidence monitor, back of room |
| 3 | Out | Upstairs and hallway TVs |
| 4 | In | Main PTZ camera |

The side camera isn't on the DeckLink. It comes in over NDI on the network.

## No picture?

See [[troubleshooting#No picture on a screen|No picture on a screen]].
