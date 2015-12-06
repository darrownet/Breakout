var fixtures = window.fixtures || {};

fixtures.common = {
    reportFirmware: [240, 121, 2, 3, 65, 0, 100, 0, 118, 0, 97, 0, 110, 0, 99,
        0, 101, 0, 100, 0, 70, 0, 105, 0, 114, 0, 109, 0, 97, 0, 116, 0, 97, 0,
        46, 0, 105, 0, 110, 0, 111, 0, 247
    ],
    stringMessage: [240, 113, 72, 0, 101, 0, 108, 0, 108, 0, 111, 0, 32, 0, 87, 0, 111,
        0, 114, 0, 108, 0, 100, 0, 33, 0, 247
    ],
    analogInput: [224, 42, 6], // analog pin 0, 0.79
    digitalInput: [144, 4, 0], // digital pin 2, 1
    sendAnalogData: [235, 50, 1], // pin 11, 0.7
    sendExtendedAnalogData: {
        maxBits: [240, 111, 11, 0, 0, 4, 247],
        maxPins: [240, 111, 128, 127, 1, 247]
    },
    sendDigitalData: [0, 8],
    sendDigitalPort: [144, 8, 0],
    sendString: [
        113,
        [72, 0, 101, 0, 108, 0, 108, 0, 111, 0, 32, 0, 87, 0, 111, 0, 114,
            0, 108, 0, 100, 0, 33, 0
        ]
    ],
    sendSysex: [240, 113, 72, 0, 101, 0, 108, 0, 108, 0, 111, 0, 32, 0, 87, 0,
        111, 0, 114, 0, 108, 0, 100, 0, 33, 0, 247
    ],
    sendServoAttach: [240, 112, 9, 32, 4, 96, 18, 247], // pin 9, default min and max
    sendServoData: [9, 0.5] // pin 8, 90 degrees
};

fixtures.uno = {
    numPins: 20,
    i2cPins: [18, 19],
    pwmPins: [3, 5, 6, 9, 10, 11],
    analogPinCount: 6,
    firstAnalogPinNum: 14,
    lastAnalogPinNum: 19,
    testDigitalPin: 2,
    testAnalogPin: 0,
    testPinStateDout: 2,
    testPinStatePwm: 11,
    defaultPinStates: [undefined, undefined, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        2, 2, 2, 2, 2, 2
    ],
    capabilityResponse: [240, 108, 127, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1,
        3, 8, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127,
        0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14,
        127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1,
        1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127,
        0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127,
        0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 6, 1, 127, 0, 1, 1, 1, 2, 10,
        6, 1, 127, 247
    ],
    analogMapping: [240, 106, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
        127, 127, 127, 127, 0, 1, 2, 3, 4, 5, 247
    ],
    pinStateResponse: {
        digitalOut: [240, 110, 2, 1, 1, 247], // digital out pin 2, 1
        pwm: [240, 110, 11, 3, 88, 1, 247]    // pwm pin 11, 0.85
    }
};

fixtures.mega2560 = {
    numPins: 70,
    i2cPins: [20, 21],
    pwmPins: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    analogPinCount: 16,
    firstAnalogPinNum: 54,
    lastAnalogPinNum: 69,
    testDigitalPin: 2,
    testAnalogPin: 0,
    testPinStateDout: 2,
    testPinStatePwm: 11,
    defaultPinStates: [undefined, undefined, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 2, 2, 2, 2
    ],
    capabilityResponse: [240, 108, 127, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1,
        1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8,
        4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127,
        0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1,
        3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14,
        127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1,
        4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1,
        4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 6, 1, 127, 0, 1,
        1, 1, 4, 14, 6, 1, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127,
        0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127,
        0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127,
        0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127,
        0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127,
        0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127,
        0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127,
        0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14,
        127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1,
        1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1,
        1, 1, 127, 0, 1, 1, 1, 127, 0, 1, 1, 1, 127, 0, 1, 1, 1, 127, 0, 1, 1,
        1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1,
        1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1,
        1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1,
        1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1,
        1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1,
        1, 2, 10, 127, 247
    ],
    analogMapping: [240, 106, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
        127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
        127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
        127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
        127, 127, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 247
    ],
    pinStateResponse: {
        digitalOut: [240, 110, 2, 1, 1, 247], // digital out pin 2, 1
        pwm: [240, 110, 11, 3, 88, 1, 247]    // pwm pin 11, 0.85
    }
};

/*
 * Note that the Leonardo pins are counted differently than other Arduino
 * varients. There are 24 physical pins (4 of these are on the 6-pin ISP
 * header), but 6 of the digital pins (D4, D6, D8, D9, D10, D12) can also be
 * used as analog pins, so these 6 pins are counted twice even though you can
 * only use one mode at a time.
 */
fixtures.leonardo = {
    numPins: 30, // 14 digital + 12 analog + 4 spi (D14-D17 on ISP header)
    i2cPins: [2, 3],
    pwmPins: [3, 5, 6, 9, 10, 11, 13],
    analogPinCount: 12,
    firstAnalogPinNum: 18,
    lastAnalogPinNum: 29,
    testDigitalPin: 2,
    testAnalogPin: 0,
    testPinStateDout: 2,
    testPinStatePwm: 11,
    defaultPinStates: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
    ],
    capabilityResponse: [240, 108, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14,
        127, 0, 1, 1, 1, 4, 14, 6, 1, 127, 0, 1, 1, 1, 3, 8, 4, 14, 6, 1, 127,
        0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8,
        4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1,
        3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14,
        127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1,
        4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1,
        4, 14, 127, 0, 1, 1, 1, 2, 10, 4, 14, 127, 0, 1, 1, 1, 2, 10, 4, 14,
        127, 0, 1, 1, 1, 2, 10, 4, 14, 127, 0, 1, 1, 1, 2, 10, 4, 14, 127, 0, 1,
        1, 1, 2, 10, 4, 14, 127, 0, 1, 1, 1, 2, 10, 4, 14, 127, 0, 1, 1, 1, 2,
        10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2,
        10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 247
    ],
    analogMapping: [240, 106, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
        127, 127, 127, 127, 127, 127, 127, 127, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 247
    ],
    pinStateResponse: {
        digitalOut: [240, 110, 2, 1, 1, 247], // digital out pin 2, 1
        pwm: [240, 110, 11, 3, 88, 1, 247]    // pwm pin 11, 0.85
    }
};

fixtures.fio = {
    numPins: 22,
    i2cPins: [18, 19],
    pwmPins: [3, 5, 6, 9, 10, 11],
    analogPinCount: 8,
    firstAnalogPinNum: 14,
    lastAnalogPinNum: 21,
    testDigitalPin: 2,
    testAnalogPin: 0,
    testPinStateDout: 2,
    testPinStatePwm: 11,
    defaultPinStates: [undefined, undefined, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        2, 2, 2, 2, 2, 2, 2, 2
    ],
    capabilityResponse: [240, 108, 127, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1,
        3, 8, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127,
        0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14,
        127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1,
        1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127,
        0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127,
        0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 6, 1, 127, 0, 1, 1, 1, 2, 10,
        6, 1, 127, 2, 10, 127, 2, 10, 127, 247
    ],
    analogMapping: [240, 106, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
        127, 127, 127, 127, 0, 1, 2, 3, 4, 5, 6, 7, 247
    ],
    pinStateResponse: {
        digitalOut: [240, 110, 2, 1, 1, 247], // digital out pin 2, 1
        pwm: [240, 110, 11, 3, 88, 1, 247]    // pwm pin 11, 0.85
    }
};

fixtures.teensy2 = {
    numPins: 25,
    i2cPins: [5, 6],
    pwmPins: [4, 5, 9, 10, 12, 14, 15],
    analogPinCount: 12,
    firstAnalogPinNum: 21,
    lastAnalogPinNum: 22,
    testDigitalPin: 2,
    testAnalogPin: 0,
    testPinStateDout: 2,
    testPinStatePwm: 14,
    defaultPinStates: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 1, 1
    ],
    capabilityResponse: [240, 108, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14,
        127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 3, 8,
        4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 6, 1, 127, 0, 1, 1, 1, 4, 14, 6, 1,
        127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 3, 8,
        4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 2, 10, 4, 14, 127,
        0, 1, 1, 1, 2, 10, 3, 8, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10,
        3, 8, 127, 0, 1, 1, 1, 2, 10, 3, 8, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1,
        1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1,
        1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1,
        1, 1, 127, 0, 1, 1, 1, 127, 247
    ],
    analogMapping: [240, 106, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
        127, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 127, 127, 247
    ],
    pinStateResponse: {
        digitalOut: [240, 110, 2, 1, 1, 247], // digital out pin 2, 1
        pwm: [240, 110, 14, 3, 88, 1, 247]    // pwm pin 14, 0.85
    }
};

fixtures.teensyPlusPlus2 = {
    numPins: 46,
    i2cPins: [0, 1],
    pwmPins: [0, 1, 14, 15, 16, 24, 25, 26, 27],
    analogPinCount: 8,
    firstAnalogPinNum: 38,
    lastAnalogPinNum: 45,
    testDigitalPin: 2,
    testAnalogPin: 0,
    testPinStateDout: 2,
    testPinStatePwm: 14,
    defaultPinStates: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2,
        2, 2, 2
    ],
    capabilityResponse: [240, 108, 0, 1, 1, 1, 3, 8, 4, 14, 6, 1, 127, 0, 1, 1,
        1, 3, 8, 4, 14, 6, 1, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14,
        127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14,
        127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14,
        127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14,
        127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1,
        3, 8, 4, 14, 127, 0, 1, 1, 1, 3, 8, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127,
        0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127,
        0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127, 0, 1, 1, 1, 4, 14, 127,
        0, 1, 1, 1, 3, 8, 127, 0, 1, 1, 1, 3, 8, 127, 0, 1, 1, 1, 3, 8, 127, 0,
        1, 1, 1, 3, 8, 127, 0, 1, 1, 1, 127, 0, 1, 1, 1, 127, 0, 1, 1, 1, 127,
        0, 1, 1, 1, 127, 0, 1, 1, 1, 127, 0, 1, 1, 1, 127, 0, 1, 1, 1, 127, 0,
        1, 1, 1, 127, 0, 1, 1, 1, 127, 0, 1, 1, 1, 127, 0, 1, 1, 1, 2, 10, 127,
        0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127,
        0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127, 0, 1, 1, 1, 2, 10, 127,
        0, 1, 1, 1, 2, 10, 127, 247
    ],
    analogMapping: [240, 106, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
        127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127,
        127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 0,
        1, 2, 3, 4, 5, 6, 7, 247
    ],
    pinStateResponse: {
        digitalOut: [240, 110, 2, 1, 1, 247], // digital out pin 2, 1
        pwm: [240, 110, 14, 3, 88, 1, 247]    // pwm pin 14, 0.85
    }
};
