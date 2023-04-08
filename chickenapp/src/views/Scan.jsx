import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { getChickenByTag } from "../api"
import "../App.css"
import ScanOverlay from "../components/ScanOverlay.jsx"

export const Scan = () => {

    const [scanResultWebCam, setScanResultWebCam] = useState('no QR Code found');

    // scan retrieve chicken
    // then go to editChicken

    // navigate(`/chicken/update/${response.data}`, { replace: true })

    function filterChickenByQr() {
        getChickenByTag(scanResultWebCam).then((response) => {
            // console.log(response)
            // console.log(scanResultWebCam)
            const protocol = window.location.protocol;
            // const domain = window.location.hostname;
            // const port = window.location.port;

            const full = `${protocol}/chicken/update/${response.data}`
            console.log(response.data)

            window.location.href = full
        })
    }

    const handleError = (err) => {
        console.error(err);
    };


    return <>
        <div className="scan-wrapper">
            <h3 class="text-4xl font-extrabold dark:text-white">Scanned By WebCam Code: {scanResultWebCam}</h3>
            <h3 class="text-4xl font-extrabold dark:text-white">Qr Code Scan by Web Cam</h3>
            <button onClick={filterChickenByQr} class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">CONFIRM</button>
            <QrReader
                className='qr-image-wrapper'
                scanDelay={300}
                videoStyle={{
                    width: '100%',
                    height: '100%',
                    border: "5px red solid"
                }}
                videoContainerStyle={{ border: "5px red solid" }}
                onResult={(result, error) => {
                    if (!!result) {
                        setScanResultWebCam(result?.text);
                        console.log(result?.text)
                    }
                    if (!!error) {
                        console.info(error);
                    }
                }}
                onError={handleError}
                constraints={{ facingmode: 'environment' }}
                ViewFinder={ScanOverlay}
            />
        </div>
    </>
}