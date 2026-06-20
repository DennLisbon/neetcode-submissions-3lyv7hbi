class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0; // Ponteiro para s
        let j = 0; // Ponteiro para t
        
        const lenS = s.length;
        const lenT = t.length;
        
        // Percorre ambas as strings até o fim de uma delas
        while (i < lenS && j < lenT) {
            if (s[i] === t[j]) {
                j++; // Encontrou o caractere correspondente, avança em t
            }
            i++; // Sempre avança em s
        }
        
        // O que sobrar em t precisa ser adicionado ao final de s
        return lenT - j;
    }
}
