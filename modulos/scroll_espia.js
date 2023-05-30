const d = document;
export default function scrollSpy(){
   const $sections =d.querySelectorAll("Sección[data-scroll-spy]")
    const cb = (entries) =>{
        // console.log("entries",entries)

        entries.forEach((entry)=>{
            // console.log("entry",entry)
            const od = entry.target.getAttribute("id");
        
            if(entry.IsIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.add(
                    "active"
                );
            } else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.remove(
                    "active"
                )
            }
        
        
        })

    }
    
    const observer = new IntersectionObserver(cb,{
        // rootMargin:"-250px"
        treshold:0.5,
    })

    $sections.forEach((el) =>observer.observe(el))


}