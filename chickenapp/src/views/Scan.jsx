import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import { getListOfChickens } from "../api"
import { getChickenByQr } from "../api"

export const Scan = () => {

    const [scanResultWebCam, setScanResultWebCam] = useState('no result');
    const [listOfChicken, setListOfChicken] = useState({ chicken: [] })

    useEffect(() => {
        getListOfChickens().then(response => {
            setListOfChicken({
                chicken: response
            })
        }).catch(error => {
            console.log(error)
        })
    }, [])

    function filterChickenByQr(qrCode) {
        getChickenByQr(qrCode).then((response) => console.log(response))
        setListOfChicken({
            chicken: listOfChicken.chicken.filter((el) => el.qrCode !== scanResultWebCam)
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