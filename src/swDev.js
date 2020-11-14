export default function swDev() {

  if ("serviceWorker" in navigator) {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`

    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register(swUrl)
        .then(response => console.log("Service Worker: Register", response))
        .catch(error => console.log("Service Worker: UnRegister", error))
    })

  }

}
