# Optional: cross-device sync with Firebase

The app is fully functional **without** this. Sync only mirrors your **favorites,
personal macros, quiz progress, and recently-viewed list** across devices (phone ↔
workstation). **No patient data is ever stored** — and your AI API keys / report
text are never synced.

## One-time setup (~5 minutes)

1. **Create a project** — [console.firebase.google.com](https://console.firebase.google.com/) → *Add project*.
2. **Enable Google sign-in** — Build → Authentication → Sign-in method → **Google → Enable**.
3. **Create Firestore** — Build → Firestore Database → **Create database** (production mode).
4. **Set security rules** — Firestore → Rules → paste the block below → **Publish**:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /erctUsers/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
     }
   }
   ```

   This guarantees each signed-in user can read/write **only their own** document.

5. **Get your web config** — Project settings (gear) → *Your apps* → **Web (`</>`)** →
   register an app → copy the `firebaseConfig` object (apiKey, authDomain, projectId, appId…).
6. **Authorize your domain** — Authentication → Settings → **Authorized domains** → add your
   GitHub Pages host (e.g. `stephen-12345.github.io`) and `localhost` for testing.

## Turn it on

Open **`/sync.html`** in the app (or the ☁️ Sync link), paste the `firebaseConfig`, click
**Save config**, then **Sign in with Google**. From then on, starring a topic on your phone
shows up on your workstation, and vice-versa.

## Notes

- The Firebase web `apiKey` is **not a secret** — it only identifies the project; the
  security rules above are what protect your data.
- Sync is online-only; offline use is unaffected (changes sync next time you’re online).
- Data lives in a single document per user: `erctUsers/{your-uid}`.
- To stop syncing, just sign out (or clear the config field and Save).
