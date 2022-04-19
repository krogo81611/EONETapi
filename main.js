const apiKey = 'yuVJzoo2ezBXkHHamalYUOp5ja3GxWTzVDFhEHAb'
const catSelect = document.getElementById('Category')
const catURL =`https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-04-13&end_date=2022-04-19&api_key=${apiKey}`


fetch(catURL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // const catArray = data.categories.map(i => i.title)
        // console.log(catArray)
        // catArray.forEach(a => {
        //     const option = document.createElement('option')
        //     option.value = a
        //     option.innerText = option.value
        //     catSelect.appendChild(option)
        // })
    })

