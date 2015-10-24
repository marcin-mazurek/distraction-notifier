function DistractionNotifier () {
    this.message = '';
    this.intervalInSeconds = 0;

    var isConfirmationMessageShowing = false;
    var isWindowActive = true;
    var warningInterval = null;

    this.init = function (message, intervalInSeconds) {
        if (this._isIframe()) {
            return;
        }

        this.message = message;
        this.intervalInSeconds = intervalInSeconds;
        this._setUpWindowActivityTracking();
        this._setUpIntervals();
        this._showDistractionWarning();
    }

    this._isIframe = function () {
        return self !== top;
    }

    this._setUpIntervals = function () {
        warningInterval = setInterval(
            this._showDistractionWarning.bind(this),
            this.intervalInSeconds * 1000);

        window.addEventListener('unload', function () {
            clearInterval(warningInterval);
        });
    }

    this._showDistractionWarning = function () {
        if (!isWindowActive || isConfirmationMessageShowing) {
            return;
        }
        isConfirmationMessageShowing = true;

        if (window.confirm(this.message)) {
            window.location = 'about:blank';
        }

        isConfirmationMessageShowing = false;
    }

    this._setUpWindowActivityTracking = function () {
        window.addEventListener('focus', function () {
            isWindowActive = true;
        });

        window.addEventListener('blur', function () {
            isWindowActive = false;
        });
    }
}
