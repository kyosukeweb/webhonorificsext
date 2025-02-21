(async function () {
    var script = document.createElement('script');
    script.innerHTML = `(function (Keisho) {
        Object.defineProperty(navigator, "honorifics", {
            get: () => Keisho,
            configurable: true,
            enumerable: true,
        });
    })(${
        chrome.honorifics ? await chrome.honorifics.enabled() : true
    });`;

    document.body.appendChild(script);
})();
