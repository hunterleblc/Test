function scan()
            {
                cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        if(!result.cancelled)
                        {
                            if(result.format == "QR_CODE")
                            {
                               
                               
                            }
                        }
                    },
                    function (error) {
                        alert("Scanning failed: " + error);
                    }
               );
            }