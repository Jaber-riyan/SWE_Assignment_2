const allcontentview = (id) => {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
        .then(response => response.json())
        .then(data => all(data.data))
}


const musiccontentview = (id) => {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
        .then(response => response.json())
        .then(data => music(data.data))
}

const comedycontentview = (id) => {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
        .then(response => response.json())
        .then(data => comedy(data.data))
}

const drawingcontentview = (id) => {
    console.log(id);
    drawing();
}




const all = (data) => {
    document.getElementById("all-content").innerHTML = "";
    const allContentDiv = document.getElementById("all-content");

    data.forEach(content => {
        // console.log(content);
        const contentBox = document.createElement("div");
        contentBox.classList.add("box");

        let time;

        if(content.others.posted_date != "")
        {
            time=convertSecondsToHMS(parseInt(content.others.posted_date))
        }

        else
        {
            time = "";
        }

        contentBox.innerHTML = `
            <img class="box-img" src="${content.thumbnail}" alt="Person Photo">
            <p>
            ${
                time == "" ? `` : `<small class="time-tag my-5">${time.hours} Hours, ${time.minutes} Minutes and ${time.seconds} Seconds</small>`
            }
            </p>
            <p onclick="convertSecondsToHoursAndMinutes(parseInt(${content.authors.posted_date}))"></p>
            <p id="title">${content.title}</p>
            <img  id="id-picture" src="${content.authors[0].profile_picture}" alt="Person Photo">
            <p><b>${content.authors[0].profile_name} </b>
            ${content.authors[0].verified == "" ? `<img  id="id-picture" src="./verified.png" alt="Verified Photo">` : ""
            }
            </p>
            <p><b>${content.others.views} views</b></p>
        `
        allContentDiv.appendChild(contentBox);
    })
}

const music = (data) => {
    document.getElementById("all-content").innerHTML = "";
    const musicContentDiv = document.getElementById("all-content");

    data.forEach(content => {
        console.log(content.authors[0].verified);
        const contentBox = document.createElement("div");
        contentBox.classList.add("box");


        let time;

        if(content.others.posted_date != "")
        {
            time=convertSecondsToHMS(parseInt(content.others.posted_date))
        }

        else
        {
            time = "";
        }

        contentBox.innerHTML = `
        <img class="box-img" src="${content.thumbnail}" alt="Person Photo">
        <p>
        ${
            time == "" ? `` : `<small class="time-tag my-5">${time.hours} Hours, ${time.minutes} Minutes and ${time.seconds} Seconds</small>`
        }
        </p>
        <p onclick="convertSecondsToHoursAndMinutes(parseInt(${content.authors.posted_date}))"></p>
        <p id="title">${content.title}</p>
        <img  id="id-picture" src="${content.authors[0].profile_picture}" alt="Person Photo"><br>
        <p><b>${content.authors[0].profile_name} </b>
        ${
            content.authors[0].verified == "" ? `<img  id="id-picture" src="./verified.png" alt="Verified Photo">` : `<p>Not Verified</p>`
        }
        </p>
        
        <p><b>${content.others.views} views</b></p>
        `
        musicContentDiv.appendChild(contentBox);
    })
}

const comedy = (data) => 
{
    document.getElementById("all-content").innerHTML = "";
    const comedyContentDiv = document.getElementById("all-content");

    data.forEach(content => 
    {
        // console.log(content);
        const contentBox = document.createElement("div");
        contentBox.classList.add("box");

        let time;

        if(content.others.posted_date != "")
        {
            time=convertSecondsToHMS(parseInt(content.others.posted_date))
        }

        else
        {
            time = "";
        }

        contentBox.innerHTML = `
        <img class="box-img" src="${content.thumbnail}" alt="Person Photo">
        <p>
        ${
            time == "" ? `` : `<small class="time-tag my-5">${time.hours} Hours, ${time.minutes} Minutes and ${time.seconds} Seconds</small>`
        }
        </p>
        <p data-posted-date="${content.authors.posted_date}"></p>
        <p id="title">${content.title}</p>
        <img  id="id-picture" src="${content.authors[0].profile_picture}" alt="Person Photo">
        <p><b>${content.authors[0].profile_name} </b>
        ${
            content.authors[0].verified == "" ? `<img  id="id-picture" src="./verified.png" alt="Verified Photo">` : ""
        }
        </p>
        <p><b>${content.others.views} views</b></p>
        `
        comedyContentDiv.appendChild(contentBox);
    })
}

const drawing = () => {
    document.getElementById("all-content").innerHTML = "";
    const drawingContentDiv = document.getElementById("all-content");

    const divforDraw = document.createElement("div");
    divforDraw.classList.add("draw-cl");

    divforDraw.innerHTML = `
    <img  id="drawing-error-picture" src="./Icon.png" alt="Person Photo">
    <h1>Oops!! Sorry, There is no content here</h1>
    `
    drawingContentDiv.appendChild(divforDraw);
}


const sortByView = () => {
    const viewContent = document.getElementsByClassName("sort-view");
}

allcontentview(1000);


function convertSecondsToHMS(totalSeconds) 
{
    if(totalSeconds=="")
    {
        return "no time";
    }
    // Step 1: Calculate hours
    const hours = Math.floor(totalSeconds / 3600);
  
    // Step 2: Calculate remaining seconds after accounting for hours
    const remainingSecondsAfterHours = totalSeconds % 3600;
  
    // Step 3: Calculate minutes
    const minutes = Math.floor(remainingSecondsAfterHours / 60);
  
    // Step 4: Calculate remaining seconds after accounting for minutes
    const seconds = remainingSecondsAfterHours % 60;
  
    // Return the result as an object
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }




