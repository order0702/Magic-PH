
browser.storage.local.get((storedConfig) => {
let $form = document.querySelector('form'),
config = {
    altplayers: false,
    autoscroll: true,
    blurimg: false,
    comments: true,
    topbutton: false,
    fasttravel: true,
    header1: 'separate',
    ...storedConfig
  }

  for (let prop in config) {
    if (prop in $form.elements) {
      if ($form.elements[prop].type == 'checkbox') {
        $form.elements[prop].checked = config[prop]
      }
      else {
        $form.elements[prop].value = config[prop]
      }
    }
  }

  $form.addEventListener('change', (e) => {
    let $el = (/** @type {HTMLInputElement} */ (e.target))
    if ($el.type == 'checkbox') {
      config[$el.name] = $el.checked
    }
    else {
      config[$el.name] = $el.value
    }
    browser.storage.local.set(config)
  })
})
