import { JSDOM } from "jsdom"

const { window } = new JSDOM(`<!DOCTYPE html>
<html>
<head><title>TestFascino</title></head>
<body>
<p>p1</p>
<p>p2</p>
<p>p3</p>
<section style="display: none"></section>
</body></html>`)

const document = window.document

export {
    window,
    document
}
