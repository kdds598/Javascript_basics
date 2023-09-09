//we going to create a clock that will updaye every second

let H=document.getElementById("h");

setInterval(update,1000)


function update()
{

  let date=new Date();
    H.innerHTML=formatetime(date);

    function formatetime(date)
    {
         let hours=date.getHours();
         let minutes=date.getMinutes();
         let seconds=date.getSeconds();

         let amorpm=hours>12?"pm":"am";
         hours=(hours%12)||12;
         hours=formatezeroes(hours)
         minutes=formatezeroes(minutes)
         seconds=formatezeroes(seconds)



       return `${hours}:${minutes}:${seconds}`

    }

    function formatezeroes(time)
    {
        time=time.toString();
        return time.length<2?"0"+time : time

    }

    
}