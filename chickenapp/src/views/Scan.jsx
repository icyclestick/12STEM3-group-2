import { useState } from "react";
import QrScanner from 'qr-scanner';

export const Scan = () => {

    const qrScanner = new QrScanner(
        result => console.log('decoded qr code:', result),
    )
    return <>
        <h1>Scan from WebCam:</h1>
        <div id="video-container">
            <video id="qr-video"></video>
        </div>
        <div>
            <label>
                Highlight Style
                <select id="scan-region-highlight-style-select">
                    <option value="default-style">Default style</option>
                    <option value="example-style-1">Example custom style 1</option>
                    <option value="example-style-2">Example custom style 2</option>
                </select>
            </label>
            <label>
                <input id="show-scan-region" type="checkbox"></input>
                Show scan region canvas
            </label>
        </div>
        <div>
            <select id="inversion-mode-select">
                <option value="original">Scan original (dark QR code on bright background)</option>
                <option value="invert">Scan with inverted colors (bright QR code on dark background)</option>
                <option value="both">Scan both</option>
            </select>
            <br></br>
        </div>
        <b>Device has camera: </b>
        <span id="cam-has-camera"></span>
        <br></br>
        <div>
            <b>Preferred camera:</b>
            <select id="cam-list">
                <option value="environment" selected>Environment Facing (default)</option>
                <option value="user">User Facing</option>
            </select>
        </div>
        <b>Camera has flash: </b>
        <span id="cam-has-flash"></span>
        <div>
            <button id="flash-toggle">📸 Flash: <span id="flash-state">off</span></button>
        </div>
        <br></br>
        <b>Detected QR code: </b>
        <span id="cam-qr-result">None</span>
        <br></br>
        <b>Last detected at: </b>
        <span id="cam-qr-result-timestamp"></span>
        <br></br>
        <button id="start-button">Start</button>
        <button id="stop-button">Stop</button>
        <hr></hr>

        <h1>Scan from File:</h1>
        <input type="file" id="file-selector">
            <b>Detected QR code: </b>
            <span id="file-qr-result">None</span>
        </input>
    </>
}