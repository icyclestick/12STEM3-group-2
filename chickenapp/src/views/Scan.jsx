import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { getChickenByTag } from "../api"

export const Scan = () => {

    const [scanResultWebCam, setScanResultWebCam] = useState('no QR Code found');

    // scan retrieve chicken
    // then go to editChicken
    // navigate(`/chicken/update/${response.data}`, { replace: true })




    function filterChickenByQr(tag) {
        getChickenByTag(tag).then((response) => {
            const protocol = window.location.protocol;
            // const domain = window.location.hostname;
            // const port = window.location.port;

            const full = `${protocol}/chicken/update/${response.data}`

            window.location.href = full
        })
    }


    return <>
        <button onClick={filterChickenByQr} class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >PRESS</button>

        <h3>Qr Code Scan by Web Cam</h3>
        <QrReader
            scanDelay={300}
            videoStyle={{
                width: '50%',
                height: '50%',
                border: '5px solid red'
            }}
            onResult={(result, error) => {
                if (!!result) {
                    setScanResultWebCam(result?.text);
                    console.log(result?.text)
                }
                if (!!error) {
                    console.info(error);
                }
            }}
            constraints={{ facingmode: 'environment' }}
        />

        <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
    </>
}