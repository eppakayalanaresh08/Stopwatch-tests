import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timeInSeconds: 0,
    statusTime: false,
  }

  componentWillUnmount() {
    clearInterval(this.timerStart)
  }

  onClickStop = () => {
    clearInterval(this.timerStart)
    this.setState({statusTime: false})
  }

  onClickReset = () => {
    clearInterval(this.timerStart)
    this.setState({statusTime: false, timeInSeconds: 0})
  }

  updateTimeTick = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  onClickStart = () => {
    this.timerStart = setInterval(this.updateTimeTick, 1000)
    this.setState({statusTime: true})
  }

  getSeconds = () => {
    const {timeInSeconds} = this.state
    const Seconds = Math.floor(timeInSeconds % 60)
    if (Seconds < 10) {
      return `0${Seconds}`
    }
    return Seconds
  }

  getMinuets = () => {
    const {timeInSeconds} = this.state
    const Minuets = Math.floor(timeInSeconds / 60)
    if (Minuets < 10) {
      return `0${Minuets}`
    }
    return Minuets
  }

  render() {
    const {statusTime} = this.state
    const time = `${this.getMinuets()}:${this.getSeconds()}`
    return (
      <div className="bg-container">
        <div className="container-stop-watch">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="card-timer-container">
            <div className="timer-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="button-container">
              <button
                className="Start-button button"
                type="button"
                onClick={this.onClickStart}
                disabled={statusTime}
              >
                Start
              </button>
              <button
                className="Stop-button button"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="Reset-button button"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
