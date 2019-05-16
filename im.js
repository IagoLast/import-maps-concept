fetch('import-map.json')
    .then(res => res.json())
    .then(res => {
        const im = document.createElement('script');
        im.type = 'importmap';
        im.textContent = JSON.stringify(res);
        document.currentScript.after(im);
    });
