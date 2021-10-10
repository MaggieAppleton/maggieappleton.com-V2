/**
 * @param value Markdown string
 * @returns Array of index pairs for the second opening brace matched with the second closing brace
 */
 export const getBracketPairs = (value) => {
    const bracketPairs = []
    if (value) {
        let pointer = 0
        let lastChar = ''
        let bracketStart = -1
        let codeBlock = ''
        while (pointer < value.length) {
            const char = value[pointer]
            // Skip matching any double brackets inside of code blocks
            if (char === '`') {
                if (value[pointer + 1] === '`' && value[pointer + 2] === '`') {
                    if (codeBlock === '```') {
                        codeBlock = ''
                    } else {
                        codeBlock = '```'
                    }
                    pointer += 2
                } else {
                    if (codeBlock === '`') {
                        codeBlock = ''
                    } else {
                        codeBlock = '`'
                    }
                }
            }

            if (!codeBlock) {
                if (char === '[') {
                    if (lastChar !== '[[') {
                        if (value[pointer - 1] === '[') {
                            lastChar = '[['
                            bracketStart = pointer
                        } else {
                            lastChar = '['
                            bracketStart = pointer
                        }
                    }
                } else if (char === ']' && value[pointer - 1] === ']') {
                    if (lastChar !== '') {
                        // We have a pair
                        lastChar = ''
                        bracketPairs.push([bracketStart, pointer])
                        bracketStart = -1
                    }
                }
            }
            pointer++
        }
    }

    return bracketPairs
}
