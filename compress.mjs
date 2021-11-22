import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
    const files = await imagemin(['uploads/*.{jpg,png,PNG}'], {
        destination: 'temp',
        plugins: [imageminWebp({ quality: 50 })],
    });
    console.log(files);
})();
