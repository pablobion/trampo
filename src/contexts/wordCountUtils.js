// Em seu arquivo wordCountUtils.js
import { useState, useEffect } from "react";

export function useWordCountLimit(plan) {

    const [wordCount, setWordCount] = useState(0);
    const limit = plan?.plan_word_limit || 0;
    const [isButtonDisabled, setButtonDisabled] = useState(wordCount >= limit);

    useEffect(() => {
        setButtonDisabled(wordCount >= limit);
    }, [wordCount, limit]);console.log(isButtonDisabled, wordCount)

    const handleIncrementWordCount = () => {
        setWordCount((prevCount) => prevCount + 1);
    };

    return {
        wordCount,
        isButtonDisabled,
        handleIncrementWordCount,

    };
}
