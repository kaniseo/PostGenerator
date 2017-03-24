const prev = (state = {}, action) => {
    switch(action.type){
        case 'ADD_ADSPOT1':
            return {
                headline1: action.headline1,
                body1: action.body1,
                image1: action.image1
            }
        case 'ADD_ADSPOT2':
            return {
                headline2: action.headline2,
                body2: action.body2,
                image2: action.image2
            }
        default:
            return state
    }
}

export default prev