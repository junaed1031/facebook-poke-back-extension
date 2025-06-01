# Facebook Auto Poke Back Extension

A simple and lightweight Chrome Extension that automatically pokes back anyone on your Facebook Pokes page.

---

## Features

- **Auto Poke Back:** Instantly pokes back every user who pokes you on the Facebook Pokes page.
- **Runs Automatically:** Continuously checks and pokes back every 5 seconds.
- **Easy Setup:** No configuration or Facebook API needed. Just install and open your Pokes page.
- **Lightweight:** Minimal permissions and code.

---

## How It Works

When you visit the Facebook Pokes page (`https://www.facebook.com/pokes`), this extension injects a script that finds all “Poke Back” buttons and clicks them automatically, repeating every 5 seconds.

```javascript
function pokeBackAll() {
    const buttons = document.querySelectorAll('div[aria-label="Poke Back"][role="button"]');
    buttons.forEach(button => {
      button.click();
      console.log("✅ Poked back!");
    });
}
setTimeout(() => {
    pokeBackAll();
    setInterval(pokeBackAll, 5000);
}, 3000);
```

---

## Installation & Setup in Chrome

1. **Download or Clone the Repository**
    - Download as ZIP and extract, or run:
      ```bash
      git clone https://github.com/junaed1031/facebook-poke-back-extension.git
      ```

2. **Open Chrome Extensions Page**
    - Go to: `chrome://extensions/`
    - Enable **Developer mode** (toggle at the top right).

3. **Load the Extension**
    - Click **Load unpacked**.
    - Select the folder where you extracted or cloned this repository.

4. **Using the Extension**
    - Visit: [https://www.facebook.com/pokes](https://www.facebook.com/pokes)
    - The extension will auto-poke back anyone who pokes you, every 5 seconds.
    - No further action is needed!

---

## Permissions

- `"scripting"`: To inject the poke-back script into the Facebook Pokes page.

---

## Manifest

This extension uses Manifest V3.  
Example `manifest.json`:

```json
{
  "manifest_version": 3,
  "name": "Facebook Auto Poke Back",
  "version": "1.0",
  "description": "Automatically pokes back anyone on Facebook Pokes page.",
  "permissions": ["scripting"],
  "content_scripts": [
    {
      "matches": ["https://www.facebook.com/pokes*"],
      "js": ["content.js"],
      "run_at": "document_idle"
    }
  ],
  "icons": {
    "48": "icon.png"
  }
}
```

---

## Disclaimer

- **Use at your own risk.** This extension is for educational purposes only.
- Automated interaction with Facebook may violate their terms of service.
- The author is not responsible for any account or data issues that may result from use.

---

## License

MIT License

---

**Created by [junaed1031](https://github.com/junaed1031)**
