if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
            console.log("Service Worker Registered");
            if (!localStorage.getItem('__IMPORT__MAP__')) {
                localStorage.setItem('__IMPORT__MAP__', 'true');
                location.reload();
            }
        });
} else {
    throw new Error('navigator.serviceworker is required for this experiment!');
}