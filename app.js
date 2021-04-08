var app = new Vue({
  el: '#app',

  computed: {
    getURL() {
      return (this.customURL || this.url)+(this.autoTrigger ? '?wanted=true' : '');
    },

    getCode() {
      return `<script src="https://gumroad.com/js/gumroad.js">\n<a class="gumroad-button" href="${this.getURL}"${this.singleProductPurchase ? ' data-gumroad-single-product="true"' : ''}>${this.buttonText || this.defaultButtonText}</a>`;
    }
  },

  methods: {
    copy() {
      this.copied = true;
      navigator.clipboard.writeText(this.getCode);
      setTimeout(() => this.copied = false, 1000);
    }
  },

  data: {
    message: 'Hello Vue!',
    defaultButtonText: 'Buy my product',
    buttonText: 'Buy Demo',
    url: 'https://gum.co/demo',
    autoTrigger: false,
    singleProductPurchase: false,
    customURL: '',
    copied: false
  }
})