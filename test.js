// Just a test for a vulnerability I've found on my website.

const div = document.createElement("div");
div.innerHTML = `
<h1 style="color: red; font-weight: red; font-size: 6em; background: black; position: fixed; top: 0; left: 0; width: 100%; height: 100%; text-align: center;">Primo utente registrato!<sub>Questa è una vulnerabilità che ho trovato e sistemato</sub></h1>
`
document.body.appendChild(div)
