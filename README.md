# chrome-special-shortcuts
To set special extension shortcuts like "Ctrl + Tab"

## How it works

This script only works on the chrome://extensions/shortcuts page.

Open the developer console (F12 -> Console) and execute the following script:

```js
document.querySelector("extensions-manager").shadowRoot
.querySelector("cr-view-manager").querySelector("extensions-keyboard-shortcuts").shadowRoot
.querySelectorAll("extensions-shortcut-input").forEach(i => {
i.onclick = e => {
    e.preventDefault()
    chrome.developerPrivate.updateExtensionCommand({
        extensionId: i.item,
        commandName: i.commandName,
        keybinding: prompt("Special Keybinding:")
    })
}
});
```

After that you can click on the shortcut input you'd like to set the special binding on.
A prompt with an input should show up.

There you can type in the shortcut you want. Here are a few input examples:
* Ctrl+Tab
* Ctrl+Shift+Tab

As soon as you click "OK", the shortcut should be set and ready to use.
