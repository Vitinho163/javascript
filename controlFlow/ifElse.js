// if...else

let temperature = 36.9
let hightTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37


if(hightTemperature >= 37.5) {
  console.log('Febre Alta')
} else if(mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}