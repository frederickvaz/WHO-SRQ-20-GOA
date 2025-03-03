const srqQuestions = [
    { en: "Do you often have headaches?", kn: "चडशे फावट तुमची तकली उसळटा?" },
    { en: "Is your appetite poor?", kn: "तुमची भूक कमी आसा?" },
    { en: "Do you sleep badly?", kn: "तुमकां सारकी न्हीद पडना?" },
    { en: "Are you easily frightened?", kn: "तुमकां रोखडोच भंय दिसता?" },
    { en: "Do your hands shake?", kn: "तुमचे हात थरथरतात?" },
    { en: "Do you feel nervous, tense or worried?", kn: "तुमकां नेर्वोझ, भिरांत दिसता वा हुस्को जाता?" },
    { en: "Is your digestion poor?", kn: "तुमचें पचन सारकें ना?" },
    { en: "Do you have trouble thinking clearly?", kn: "स्पश्टपणान चिंतूंक तुमकां त्रास जाता?" },
    { en: "Do you feel unhappy?", kn: "तुमकां दुख्खी दिसता?" },
    { en: "Do you cry more than usual?", kn: "तुमी हरशी परस चड रडटात?" },
    { en: "Do you find it difficult to enjoy your daily activities?", kn: "सदांच्या कामांची मजा घेवप तुमकां कठीण जाता?" },
    { en: "Do you find it difficult to make decisions?", kn: "तुमकां निर्णय घेवंक कठीण जाता?" },
    { en: "Is your daily work suffering?", kn: "तुमच्या सदांच्या कामाचेर परिणाम जाता?" },
    { en: "Are you unable to play a useful part in life?", kn: "तुमी जिवितांत उपेगी भुमिका करपाक असमर्थ थारल्यात?" },
    { en: "Have you lost interest in things?", kn: "तुमकां कसलेच गजालींत आवड ना?" },
    { en: "Do you feel you are a worthless person?", kn: "तुमकां निरुपेगी मनीस आशिल्ले भाशेन दिसता?" },
    { en: "Has the thought of ending your life been on your mind?", kn: "जीव दिवपाचो विचार तुमचे तकलेंत आसा?" },
    { en: "Do you feel tired all the time?", kn: "तुमकां पुराय वेळ जाम जाल्ले भाशेन दिसता?" },
    { en: "Do you have uncomfortable feelings in your stomach?", kn: "तुमच्या पोटांत विचित्र दिसता?" },
    { en: "Are you easily tired?", kn: "तुमी रोखडेच जाम जातात?" }
];

window.onload = function () {
    const questionDiv = document.getElementById("questions");
    srqQuestions.forEach((question, index) => {
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `
            <label>${index + 1}. ${question.en} <br> <em>${question.kn}</em></label>
            <select id="item${index + 1}">
                <option value="" selected>Select</option>
                <option value="no">No (ना)</option>
                <option value="yes">Yes (हय)</option>
            </select>
        `;
        questionDiv.appendChild(div);
    });
};

function evaluateSRQ() {
    let totalScore = 0;
    let allAnswered = true;

    srqQuestions.forEach((_, index) => {
        const response = document.getElementById(`item${index + 1}`).value;
        if (response === "") {
            allAnswered = false;
        } else if (response === "yes") {
            totalScore++;
        }
    });

    const resultDiv = document.getElementById("result");

    if (!allAnswered) {
        resultDiv.innerHTML = `<p class="red-text"><strong>Please answer all questions before evaluating.</strong></p>`;
        return;
    }

    if (totalScore >= 8) {
        resultDiv.innerHTML = `<p class="red-text"><strong>Psychiatric disturbance present - Refer for psychiatric evaluation.</strong></p>`;
    } else {
        resultDiv.innerHTML = `<p class="green-text"><strong>Psychiatric disturbance absent - Reassure patient.</strong></p>`;
    }
}
