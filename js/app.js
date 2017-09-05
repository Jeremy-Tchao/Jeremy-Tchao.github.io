var projects = [{
        title: "Color Scheme Experiment",

        imageLink: "images/project1.png",

        styles: {
            background: "linear-gradient(to right, rgba(19,83,128,1) 0%, rgba(209,75,156,1) 100%)",
            position: "relative",
            "z-index": "0"
        },

        description: "In this project, I digitally sketched an Boeing 787-9 Dreamliner and the surroundings that it flies within, and created 4 different color schemes using certain combinations, like triad and complementary.\n\nThe drawing of the airplane was really tricky because its details, and what’s more challenging was filling in the colors, because I didn’t close shapes in the first place, so I had to redraw most of the shapes. As for the choosing of the color, it was not that hard, because I already had a few combinations in mind, and they worked great!"
    },
    {
        title: "Typeface Poster",

        imageLink: "images/project2.png",

        styles: {
            background: "linear-gradient(to right, rgba(202,199,4,1) 0%, rgba(255,251,0,1) 100%)",
            color: "black"
        },

        description: "This project was a poster for the typeface Bell Centennial. And this typeface was a purposed-designed typeface, so the concept of the poster unveiled itself for me easily: to demonstrate its purpose of increasing legibility for small-size and inferior quality print. However, the execution of the concept was really hard, as my first thoughts of designing a phone-book like poster did not turn out well: they lacked the aesthetic element.\n\nBut later, I was inspired by the design of the font itself: its carving and opening designed to anticipate the spread of the ink is very unique, and decided to emphasize that. And I also decided to use some small-size print to show that the actual functionality of the design."
    },
    {
        title: "Event Poster",

        imageLink: "images/project3.png",

        styles: {
            background: "linear-gradient(to right, rgba(209,199,183,1) 0%, rgba(125,112,84,1) 100%)"
        },

        description: "In this project, I was tasked with creating a post for a event of my choosing. I first chose the a star-gazing event in the Yosemite National Park. But after playing with the concept a bit, I found that there was little element that I can utilize to make the poster seemed designed. So I switched event to a more familiar topic and culture: a tea exposition in Shanghai. And I was able to create the Asian and Chinese cultural atmosphere that I wanted to show people using the elements that I am familiar with, like classical Chinese and paper.\n\nThe hardest part of designing the post was technical: the color of the bubbles in was really hard to fine-tune, as they are not easy to select."
    },
    {
        title: "Figure Poster",

        imageLink: "images/project4.png",

        styles: {
            background: "linear-gradient(to right, rgba(30,31,31,1) 0%, rgba(133,129,128,1) 100%)"
        },

        description: "For this project, I am tasked to create a poster for a person of my choosing. I chose the Chief Design Officer of Apple — Jony Ive, a designer both himself and his work is widely recognized.\n\nIn retrospect, I think this poster was really hard because there was too much to say about him and his work, so I did not focus on a focal point instead I spread out and lost focus. And because of that, I could not make the poster as aesthetically pleasing as my previous ones."
    },
    {
        title: '"The Play Instinct" by Paul Rand',

        imageLink: "images/project5.png",

        styles: {
            background: "linear-gradient(to right, rgba(135,211,237,1) 0%, rgba(0,181,241,1) 100%)"
        },

        description: 'This project calls for a design of Paul Rand\'s book: "The Play Instinct". It has to accentutate the playfulness and salute the artistic elements mentioned in the book.\n\nSo I selected the Golden Ratio as the ratio for the spread and applied the principles of golden seperation throughout the book. Because the Golden Ratio is long regarded as the key to achieve aesthetics throughout the history of art.\n\nBut using this unconventinoal ratio is not easy to implement: I have spent a lot of time trying to figure out a layout that both preserves the functionality of the book while demonstrating the Golden Ratio. But I jumped out of the box to design for the whole spread instead of just a single page.\n\nTherfore I am really proud of the final design, I really do think it is cool!'
    },
    {
        title: "Typography Form Experiment",

        imageLink: "images/project6.png",

        styles: {
            'background-color': "white",
            color: "black"
        },

        description: 'This project calls for a design of Paul Rand\'s book: "The Play Instinct". It has to accentutate the playfulness and salute the artistic elements mentioned in the book.\n\nSo I selected the Golden Ratio as the ratio for the spread and applied the principles of golden seperation throughout the book. Because the Golden Ratio is long regarded as the key to achieve aesthetics throughout the history of art.\n\nBut using this unconventinoal ratio is not easy to implement: I have spent a lot of time trying to figure out a layout that both preserves the functionality of the book while demonstrating the Golden Ratio. But I jumped out of the box to design for the whole spread instead of just a single page.\n\nTherfore I am really proud of the final design, I really do think it is cool!'
    }
];

var contacts = [
    {
        title: 'LinkedIn',
        iclass: 'fa fa-linkedin-square',
        link: 'https://www.linkedin.com/in/zjzhao/'
    },
    {
        title: 'Instagram',
        iclass: 'fa fa-instagram',
        link: 'https://www.instagram.com/jeremytchao/'
    },
    {
        title: 'Flickr',
        iclass: 'fa fa-flickr',
        link: 'https://www.flickr.com/photos/90156428@N06/'
    },
    {
        title: 'Facebook',
        iclass: 'fa fa-facebook-official',
        link: 'https://www.facebook.com/JeremyTchao'
    },
    {
        title: 'email',
        iclass: null,
        link: '&#122;&#106;&#122;&#104;&#097;&#111;&#064;&#117;&#099;&#100;&#097;&#118;&#105;&#115;&#046;&#101;&#100;&#117;'
    }
];

function initView() {

    // for(var i = 0, len = projects.length; i < len; i++) {
    //     console.log(projects[i]);
    //     $("#projects-list").append(`
    //         <a name="project${i + 1}"></a>
    //         <section id="p${i + 1}" class="projects">
    //             <img src=${projects[i].imageLink} alt="project${i + 1}">
    //             <h1>${projects[i].title}</h1>
    //             <p>${projects[i].description}</p>
    //         </section>
    //     `);
    // }
    
    var formatetdContent = projects.map(function(obj, index){
        var formattedProject = `<a name="project${index + 1}"></a> 
            <section id="p${index + 1}" class="projects">
                <img src=${obj.imageLink} alt="project${index + 1}">
                <h1>${obj.title}</h1>
                <p>${obj.description}</p>
            </section>`;
        return formattedProject;
    });

    $("#projects-list").append(formatetdContent.join(""));

} // initView()

initView();