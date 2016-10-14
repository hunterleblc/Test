function scan()
            {
                cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        if(!result.cancelled)
                        {
                            if(result.format == "QR_CODE")
                            {
                               alert(result.text);
                               
                            }
                        }
                    },
                    function (error) {
                        alert("Scanning failed: " + error);
                    }
               );
            }