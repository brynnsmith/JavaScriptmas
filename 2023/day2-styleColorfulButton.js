<style>
html, body {
    margin: 0;
    padding: 0;
    background: var(--body-bg);
    display: flex;
    height: 100vh;
    align-items:center;
    justify-content: center;
}

:root {
    --font-family: 'Karla', sans-serif;
    --body-bg: #1E1F25;
    --btn-bg: #000;
    --btn-color: #cbcbcb;
    --btn-color-hover: #fff;
    --grad-color1: #eeaf61;
    --grad-color2: #fb9062;
    --grad-color3: #ee5d6c;
    --grad-color4: #ce4993;
    --grad-color5: #6a0d83;
}
.container {
    background: linear-gradient(115deg, var(--grad-color1), var(--grad-color2), var(--grad-color3), var(--grad-color4), var(--grad-color5));
    padding: 2px;
}
.container:hover {
    background: linear-gradient(115deg, var(--grad-color4), var(--grad-color5), var(--grad-color3), var(--grad-color2), var(--grad-color1));
}
button {
    background: var(--btn-bg);
    color: var(--btn-color);
    font: var(--font-family);
    padding: 20px;
    border: none;
}
button:hover {
    color: var(--btn-color-hover);
    padding: 22px;
}
</style>