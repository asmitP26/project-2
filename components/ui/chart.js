export class Chart {
  constructor(canvas, config) {
    this.canvas = canvas
    this.config = config
    this.chart = new ChartJs(canvas, config)
  }

  destroy() {
    this.chart.destroy()
  }
}

// Dummy ChartJs class to avoid import
class ChartJs {
  constructor(canvas, config) {
    this.canvas = canvas
    this.config = config
  }
  destroy() {}
}
