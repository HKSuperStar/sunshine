#!/bin/sh
set -eu
# Four existing product illustrations, 10 seconds with crossfades.
ffmpeg -hide_banner -loglevel error -n \
  -loop 1 -i img/sunshine-growth.jpg \
  -loop 1 -i img/sunshine-intelligence.jpg \
  -loop 1 -i img/sunshine-agent-os.jpg \
  -loop 1 -i img/sunshine-engineering.jpg \
  -filter_complex_threads 1 -filter_complex '
  [0:v]scale=1920:1080,zoompan=z=1.02+0.0003*on:x=iw/2-iw/zoom/2:y=ih/2-ih/zoom/2:d=1:s=1920x1080:fps=30,trim=duration=2.875,setpts=PTS-STARTPTS,setsar=1[a];
  [1:v]scale=1920:1080,zoompan=z=1.02+0.0003*on:x=iw/2-iw/zoom/2:y=ih/2-ih/zoom/2:d=1:s=1920x1080:fps=30,trim=duration=2.875,setpts=PTS-STARTPTS,setsar=1[b];
  [2:v]scale=1920:1080,zoompan=z=1.02+0.0003*on:x=iw/2-iw/zoom/2:y=ih/2-ih/zoom/2:d=1:s=1920x1080:fps=30,trim=duration=2.875,setpts=PTS-STARTPTS,setsar=1[c];
  [3:v]scale=1920:1080,zoompan=z=1.02+0.0003*on:x=iw/2-iw/zoom/2:y=ih/2-ih/zoom/2:d=1:s=1920x1080:fps=30,trim=duration=2.875,setpts=PTS-STARTPTS,setsar=1[d];
  [a][b]xfade=transition=fade:duration=0.5:offset=2.375[ab];
  [ab][c]xfade=transition=fade:duration=0.5:offset=4.75[abc];
  [abc][d]xfade=transition=fade:duration=0.5:offset=7.125,fade=t=in:st=0:d=0.25,fade=t=out:st=9.75:d=0.25,format=yuv420p[v]' \
  -map '[v]' -an -t 10 -r 30 -c:v libx264 -preset medium -crf 23 -movflags +faststart video/sunshine-products-hero-10s.mp4
