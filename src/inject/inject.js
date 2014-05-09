var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);

        setInterval(function() {
            $(".mam.pam a.selected").each(function() {
                if (this.innerText === "Poke Back")
                    this.click();
            });
        }, 100);

    }
}, 10);
