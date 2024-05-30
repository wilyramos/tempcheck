export const formatTemperature = (temp: number) => {
    const kelvin = 273.15
    return `${(temp - kelvin).toFixed(2)}°C`
}