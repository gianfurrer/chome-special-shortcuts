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
