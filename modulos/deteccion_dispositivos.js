const d = document,
n = navigator,
ua = n.userAgent;

export default function userDeviceInfo(id){

    const $id=d.getElementById(id),
    isMobile = {
        android: () => ua.match(/android/i),
        ios: ()=> ua.match(/iphone1ipad|ipod/i),
        windows: ()=> ua.match(/windows phone/i),
        any: function (){
            return this.android()|| this.ios() || this.windows();
        },
    },

IsDesktop = {
    linux: ()=>ua.match(/linux/i),
    mac: ()=> ua.match(/mac os/i),
    windows: ()=> ua.match(/windows nt/i),
    any: function (){
        return this.linux() || this.mac() || this.windows();
    },
},
isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/),
    any: function(){
        return (
            this.chrome() ||
            this.safari() ||
            this.firefox()
        );
    }
}

$id.innerHTML = `
<ul>
<li> User Agent:<b>${ua}</b></li>
<li> Plataforma:<b>${isMobile.any()?isMobile.any(): IsDesktop.any()}</b></li>
<li> Navegador:<b>${isBrowser.any()}</b></li>
</ul>
`
if(isBrowser.chrome()){
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</p>`
}
if(isBrowser.safari()){
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</p>`
}

if(IsDesktop.linux()){
    $id.innerHTML+=`<p><mark>Descarga nuestro software para Linux</mark></p> `

}
if(IsDesktop.windows()){
    $id.innerHTML+=`<p><mark>Descarga nuestro software para Windows `
}

if(isMobile.android()){
    window.location.href="https://deginfo.github.io"
}
}