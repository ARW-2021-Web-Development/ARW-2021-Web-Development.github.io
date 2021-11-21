const _version = 'v2';
const currVersion = localStorage.getItem('version');

if (currVersion !== _version) {
    localStorage.clear();
    localStorage.setItem('version', _version);
}
