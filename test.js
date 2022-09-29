// Just a test for a vulnerability I've found on my website.

const div = document.createElement("div");
div.innerHTML = `
<h1 style="color: red; font-weight: red; font-size: 6em">You got hacked!!111!!!111!</h1>
`
