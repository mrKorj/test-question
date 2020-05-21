export const initialState: IQuest[] = [
    {id: 1, correct: false, notCorrect: false, userAnswer: '', question: 'What\'s 3 first letters in alphabet', variants: ['abc', 'qwe', 'asd', 'zxc'], rightAnswer: 'abc'},
    {id: 2, correct: false, notCorrect: false, userAnswer: '', question: 'What\'s 3 last letters in alphabet', variants: ['abc', 'qwe', 'psd', 'xyz'], rightAnswer: 'xyz'},
    {id: 3, correct: false, notCorrect: false, userAnswer: '', question: '2 * 2 = ?', variants: ['2', '4', '3', '5'], rightAnswer: '4'},
    {id: 4, correct: false, notCorrect: false, userAnswer: '', question: 'Beer it is...', variants: ['good', 'not bad', 'bad', 'awesome'], rightAnswer: 'good'},
    {id: 5, correct: false, notCorrect: false, userAnswer: '', question: 'Watermelon it is ...', variants: ['Berry', 'Fruit', 'Vegetable', 'Grass'], rightAnswer: 'berry'},
]

export interface IQuest {
    id: number,
    correct: boolean,
    notCorrect: boolean,
    question: string,
    variants: string[],
    rightAnswer: string,
    userAnswer: string
}

export enum ActionTypes {
    INPUT_ANSWER = 'INPUT_ANSWER',
    SUBMIT_TEST = 'SUBMIT_TEST',
    TRY_AGAIN = 'TRY_AGAIN'
}

export interface IAction {
    type: string,
    payload: Record<string, any>
}

export default function (state: IQuest[], action: IAction) {
    switch (action.type) {
        case ActionTypes.INPUT_ANSWER: {
            const {val, id} = action.payload
            return state.map(q => {
                if (q.id === id) {
                    q.userAnswer = val
                }
                return q
            })
        }
        case ActionTypes.SUBMIT_TEST: {
            return state.map(q => {
                if (q.userAnswer === q.rightAnswer) {
                    q.correct = true
                } else {
                    q.notCorrect = true
                }
                return q
            })
        }
        case ActionTypes.TRY_AGAIN: {
            return state.map(q => {
                q.correct = false
                q.notCorrect = false
                q.userAnswer = ''
                return q
            })
        }
        default:
            return state
    }
}