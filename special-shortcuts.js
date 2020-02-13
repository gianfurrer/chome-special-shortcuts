// Copy & paste this into the developer console on chrome://extensions/shortcuts

document.querySelector("extensions-manager").shadowRoot
    .querySelector("cr-view-manager")
    .querySelector("extensions-keyboard-shortcuts").shadowRoot
    .querySelectorAll("extensions-shortcut-input").forEach(i => {
        i.onclick = e => {
            // Abort if clicked on remove shortcut icon
            if (e.path[0].id == "icon") {
                return
            }
            e.preventDefault()
            let sc = prompt("Special Shortcut:")

            // Format shortcut into PascalCase
            sc = sc.replace(/\w+/g, (w) => {
                return w[0].toUpperCase() + w.slice(1).toLowerCase();
            });

            // Set Keybinding            
            chrome.developerPrivate.updateExtensionCommand({
                extensionId: i.item,
                commandName: i.commandName,
                keybinding: sc
            });
        };
    });
console.log("Running Special Shortcuts\nTo remove the script reload the page");