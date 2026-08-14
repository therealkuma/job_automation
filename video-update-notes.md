# Inline Video Update

The About page now embeds `https://www.youtube.com/embed/nd84bJyVwzs?rel=0&modestbranding=1` inside the existing video frame with `allowFullScreen` and responsive 16:9 sizing. The supplied watch URL resolves to the public video titled `job automation tutorial`.

The local preview confirms the frame and overlay render at the intended desktop size. YouTube’s player content may appear blank in the sandbox preview when YouTube presents its automated sign-in challenge; the public embed URL and native YouTube controls remain configured for live visitors.

Direct sandbox navigation to the embed endpoint returned YouTube Error 153, `Video player configuration error`. This can occur when YouTube refuses a direct embed request without a referring website or when the video owner has disabled embedding. The site embed should include the production origin, and the owner should confirm that **Allow embedding** is enabled in YouTube Studio before relying on the in-page player.
