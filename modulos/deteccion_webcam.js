const d = document,
n = navigator;

export default function webCam(id){
   const video = d.getElementById(id)

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true,audio:true})
        .then((stream) =>{
            video.srcObject = stream;
            video.play()
        })
        .catch((err) =>{
            video.insertAdjacentHTML("beforebegin",`<p>¡sucedió el siguiente error!:<mark>${err}</mark>
    `)
        })
    }

}