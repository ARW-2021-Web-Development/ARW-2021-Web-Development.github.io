const lookupTable = {
    ASO: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9yEv1lgwOhZ5xURMevK31vWx2VhyeRHjtV9eV8JqIOnry1yn9ObEmjsBrn9UzKuDRi2MKk8mlRS3H/pubhtml?gid=0&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false',
    ASPIRE: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9yEv1lgwOhZ5xURMevK31vWx2VhyeRHjtV9eV8JqIOnry1yn9ObEmjsBrn9UzKuDRi2MKk8mlRS3H/pubhtml?gid=1769576101&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false',
    CAP13: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9yEv1lgwOhZ5xURMevK31vWx2VhyeRHjtV9eV8JqIOnry1yn9ObEmjsBrn9UzKuDRi2MKk8mlRS3H/pubhtml?gid=1797681088&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false',
    PROBE: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9yEv1lgwOhZ5xURMevK31vWx2VhyeRHjtV9eV8JqIOnry1yn9ObEmjsBrn9UzKuDRi2MKk8mlRS3H/pubhtml?gid=1643481651&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false',
    ENGAGE: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9yEv1lgwOhZ5xURMevK31vWx2VhyeRHjtV9eV8JqIOnry1yn9ObEmjsBrn9UzKuDRi2MKk8mlRS3H/pubhtml?gid=1008943398&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false',
};

const clusterButtons = document.querySelectorAll('.cluster-btn');
const gsheets = document.querySelectorAll('.google-sheet');

gsheets.forEach((sheet, index) => {
    if (index != 0) {
        sheet.style.display = 'none';
    }
});

clusterButtons.forEach((btn, btnIndex) => {
    btn.addEventListener('click', () => {
        gsheets.forEach((sheet, sheetIndex) => {
            if (btnIndex != sheetIndex) {
                sheet.style.display = 'none';
            } else {
                sheet.style.display = 'block';
            }
        });
    });
});
