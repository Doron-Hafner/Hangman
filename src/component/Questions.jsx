const questions =  [{ hint: 'best basketball league?', word: 'NBA' },
                    { hint: 'blue and yellow?', word: 'GREEN' },
                    { hint: 'best basketball player?', word: 'LEBRON' }
]

function randomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)]
}

export { randomQuestion }
export { questions }