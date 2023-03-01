"user strict"
let styles = ['джаз', 'блюз']
styles.push('рок')
let lenstyles = styles.length / 2
let mathLenRound = lenstyles.toFixed(0)
// delete styles[mathLenRound]
styles[mathLenRound -1 ] = 'classic'
console.log(styles)