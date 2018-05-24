new Vue({
  el: '#app',
  data: {
    message: '',
    buttonMsg: 'Show me!',
    imageTest: "",
    imgBtnClick: false,
    celsius: 0,
    fahrenheit: 0,
    scale: 'celsius'
  },
  methods: {
    clearMessage() {
      this.message = ''
    },
    showImage() {
      if (this.imgBtnClick == false) {
        this.imageTest = 'http://nootropicgeek.com/wp-content/uploads/2016/10/Peanut-Butter-Jelly-Banana-e1476475241380-221x300.png'
        this.buttonMsg = 'Hide it!'
        this.imgBtnClick = true
      } else if (this.imgBtnClick == true) {
        this.imageTest = ''
        this.buttonMsg = 'Show me!'
        this.imgBtnClick = false
      }
    },
    swapScale() {
      if (this.scale === 'celsius') {
        this.scale = 'fahrenheit'
      } else {
        this.scale = 'celsius'
      }
    }
  },
  computed: {
    celsiusToFahrenheit() {
      return((this.celsius * 9) /5) + 32
    },
    fahrenheitToCelsius() {
      return((this.fahrenheit -32) *5 ) /9
    }
  }
})