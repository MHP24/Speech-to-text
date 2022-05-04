window.addEventListener('load', () => {
    let speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'es-MX';
    recognition.continuous = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
        .map(result => result[0]).map(result => result.transcript)
        let text = document.getElementById('text');
        text.innerHTML = '✅ '+transcript.join('\n✅ ');
    })
    document.getElementById('start-recording').addEventListener('click', () => {
        if(speech) {
            recognition.start();
        }
    });

    document.getElementById('stop-recording').addEventListener('click', () => {
        recognition.stop();
    });

    document.getElementById('copy').addEventListener('click', () => {
        let copyText = document.getElementById('text');
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value.split('✅').join(" "));

        alert("Texto Copiado.");
    });
});