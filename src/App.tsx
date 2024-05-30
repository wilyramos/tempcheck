import styles from './App.module.css'
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import useWeather from './hooks/useWeather'
import Alert from './components/Alert/Alert'


function App() {

  const { weather,loading, notFound, fetchWeather, hasWeatherData } = useWeather()

  console.log(import.meta.env)

  

  return (
    <>
      <h1 className={styles.title}> Clima</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert> No se encontraron resultados </Alert>}
        
      </div>
    </>
  )
}

export default App
