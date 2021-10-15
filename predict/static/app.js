document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput')
    const predictionResult = document.getElementById('predictionResult')

    textInput.addEventListener('input', async (e) => {
        const response = await fetch('/api/predict', {
            method: 'POST',
            body: e.target.value
        })

        const data = await response.json()
            predictionResult.innerHTML = `<em class="font${Math.round(data.probability*10)}">${Math.round(data.probability*10000)/100}%</em> kans dat de bovenstaande tekst een <em class="${data.label}">${data.label}</em> is`
    })
})
