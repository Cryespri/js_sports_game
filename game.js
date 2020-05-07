
let resetbutton = document.querySelector('#reset-button')
let numreset = document.querySelector('#num-resets')

//   Team One   //
let teamone = document.querySelector('#teamone-shoot-button')
let teamonenumshots = document.querySelector('#teamone-numshots')
let teamonenumgoal = document.querySelector('#teamone-numgoals')

//   Team Two   //
let teamtwo = document.querySelector('#teamtwo-shoot-button')
let teamtwonumshots = document.querySelector('#teamtwo-numshots')
let teamtwonumgoal = document.querySelector('#teamtwo-numgoals')


//  Reset Button    //

resetbutton.addEventListener('click', function () {
    console.log('reset')
    let newReset = Number(numreset.innerHTML) + 1
    numreset.innerHTML = newReset
    teamonenumshots.innerHTML = 0
    teamtwonumshots.innerHTML = 0
    teamonenumgoal.innerHTML = 0
    teamtwonumgoal.innerHTML = 0

})

//  Team One    //

teamone.addEventListener('click', function () {
    console.log('team one shots')
    let teamoneshotstaken = Number(teamonenumshots.innerHTML) + 1
    teamonenumshots.innerHTML = teamoneshotstaken
    let d = Math.random()
    if (d < 0.5) {
        console.log('if successful')
        let goalnumber1 = Number(teamonenumgoal.innerHTML) + 1
        teamonenumgoal.innerHTML = goalnumber1
    }
})
//  Team Two //

teamtwo.addEventListener('click', function () {
    console.log('team two shot')
    let teamtwoshotstaken = Number(teamtwonumshots.innerHTML) + 1
    teamtwonumshots.innerHTML = teamtwoshotstaken
    let d = Math.random()
    if (d < 0.5) {
        console.log('if successful')
        let goalnumber2 = Number(teamtwonumgoal.innerHTML) + 1
        teamtwonumgoal.innerHTML = goalnumber2
    }
})