// This file is responsible for the renderer process
// It handles the UI interactions and communicates with the main process

document.addEventListener('DOMContentLoaded', () => {
    // Display version information
    if (window.versions) {
        document.getElementById('node-version').textContent = window.versions.node;
        document.getElementById('electron-version').textContent = window.versions.electron;
        document.getElementById('chrome-version').textContent = window.versions.chrome;
    }

    // Handle button click
    const demoBtn = document.getElementById('demo-btn');
    const output = document.getElementById('output');
    
    demoBtn.addEventListener('click', () => {
        output.innerHTML = '<p>Button clicked! Electron is working properly.</p>';
        
        // Example of using the exposed API (if available)
        if (window.electronAPI && window.electronAPI.ping) {
            window.electronAPI.ping().then(result => {
                output.innerHTML += `<p>Ping result: ${result}</p>`;
            }).catch(err => {
                console.log('Ping not implemented in main process:', err);
            });
        }
    });

    console.log('Renderer process loaded successfully');
});