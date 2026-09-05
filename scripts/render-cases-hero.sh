#!/bin/sh
set -eu
# One full cosine motion cycle across 300 frames: smooth 10-second loop.
ffmpeg -hide_banner -loglevel error -n \
  -i img/joylink-wire-mesh-agentic.png \
  -vf "scale=3840:2160:force_original_aspect_ratio=increase,crop=3840:2160,zoompan=z='1.02+0.06*(1-cos(2*PI*on/300))/2':x='(iw-iw/zoom)*(0.5+0.18*sin(2*PI*on/300))':y='(ih-ih/zoom)/2':d=300:s=1920x1080:fps=30,setsar=1,format=yuv420p" \
  -an -frames:v 300 -c:v libx264 -preset medium -crf 23 -movflags +faststart \
  video/sunshine-cases-hero-10s.mp4
