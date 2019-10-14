//% weight=0 color=#3CB371 icon="\uf1b9"
namespace testblock {
    /**
    * 左右馬達同時正轉
    */
    //% blockId="foreward" block="car foreward|speed(0~1023) %power"
    //% blockGap=1 weight=90
    //% power.min=0 power.max=1023
    export function foreward(power: number) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P1, power)
        pins.analogWritePin(AnalogPin.P2, power)
    }
    
}
