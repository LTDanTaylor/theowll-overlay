
The Owll - Stream Overlay Package (Animated)
-------------------------------------------
Files:
- starting.html      (Starting Soon screen)
- intermission.html  (Intermission / Just Chatting screen)
- ending.html        (Stream Ending screen)
- style.css          (styles & animations)
- script.js          (small JS for countdown & subtle animation)
- assets/owl_intermission.png  (owl + smoke asset)

How to use:
1. Upload all files to a GitHub repository (root).
2. Enable GitHub Pages (Settings → Pages → Source: main branch / root).
3. Use the generated URL(s) in OBS as Browser Sources:
   https://YOUR-USERNAME.github.io/REPO-NAME/starting.html
   https://YOUR-USERNAME.github.io/REPO-NAME/intermission.html
   https://YOUR-USERNAME.github.io/REPO-NAME/ending.html

Notes:
- The included owl_intermission.png came from an earlier generated asset; replace it with any PNG/WebM you prefer by overwriting assets/owl_intermission.png.
- For lighter CPU usage in OBS, prefer using a static PNG + CSS animation rather than heavy video files.
